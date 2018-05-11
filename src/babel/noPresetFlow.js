// @flow

export default {
  meta: {
  },

  create: (context): {
    ReturnStatement: func,
  } => ({
    ReturnStatement: node => {
      console.log(node);
    },
  }),
};
