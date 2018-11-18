exports.shorthands = undefined

exports.up = (pgm) => {
  pgm.createTable('recipes', {
    id: 'id',
    name: {
      type: 'text',
      notNull: true
    },
    instructions: {
      type: 'text'
    }
  })
}