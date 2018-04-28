import fs from 'fs';
import path from 'path';

import { CLIEngine } from 'eslint';
import dirTree from 'directory-tree';
import * as d3 from 'd3-hierarchy';
import { hyphenate } from 'fbjs';

import config from './../';

const root = path
  .resolve(process.cwd(), './src');

const cli = new CLIEngine({
  ...config,
  useEslintrc: false,
  cwd: root,
  ignore: false,
});

const { results } = cli
  .executeOnFiles(['.']);

const eslintResult = results
  .filter(({ messages }) => messages.length !== 0);

const files = d3
  .hierarchy(dirTree(root), null, 2)
  .leaves();

const testData = files
  .filter(({ data }) => {
    const { path, extension } = data;

    return /__testsFiles__/.test(path) && extension === '.js';
  })
  .map(({ data }) => {
    const { path, name } = data;

    const { messages } = eslintResult
      .find(({ filePath }) => filePath === path) || { messages: [] };

    const expectErrors = fs
      .readFileSync(path, 'utf-8')
      .split(/\n/g)
      .filter(text => /^\/\/ \$expectError /.test(text))
      .map(text => text.replace(/^\/\/ \$expectError /, ''));

    const testTasks = messages
      .map((message, index) => ({
        eslintInfo: message,
        expectError: expectErrors[index] || null,
      }));

    return {
      testName: hyphenate(name.replace(/.js/, '')),
      testTasks,
      checkErrorAmount: expectErrors.length === messages.length,
    };
  });


describe('eslint', () => {
  it('check amount of test files', () => {
    expect(eslintResult.length).toBe(testData.length);
  });

  testData.forEach(({ testName, testTasks, checkErrorAmount }, index) => {
    describe(testName, () => {
      testTasks.forEach(({ eslintInfo, expectError }) => {
        const { ruleId, line, message } = eslintInfo;

        it(`[line: ${line}, rule: ${ruleId}] ${message}`, () => {
          expect(ruleId).toBe(expectError);
        });
      });

      it('check error amount', () => {
        expect(checkErrorAmount).toBeTruthy();
      });
    });
  });
});
