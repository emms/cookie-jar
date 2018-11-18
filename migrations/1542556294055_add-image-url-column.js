exports.shorthands = undefined

exports.up = (pgm) => {
  pgm.addColumns('recipes', {
    image_url: {
      type: 'text'
    }
  })
}

exports.down = (pgm) => {
}