exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('recipes', {
    id: {
      type: 'serial',
      primaryKey: true,
    },
    name: {
      type: 'text',
      notNull: true
    },
    instructions: {
      type: 'text'
    }
  })
};