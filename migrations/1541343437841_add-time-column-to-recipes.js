exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns('recipes', {
    time: {
      type: 'text'
    }
  })
};

