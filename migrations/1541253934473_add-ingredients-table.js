exports.shorthands = undefined

exports.up = (pgm) => {
  pgm.createTable('ingredients', {
    id: 'id',
    name: {
      type: 'text',
      notNull: true
    },
    amount: {
      type: 'text',
      notNull: true
    },
    parent_recipe_id: {
      type: 'integer',
      notNull: true,
      references: 'recipes(id)'
    }
  })
}