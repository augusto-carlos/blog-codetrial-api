
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()

      table.string('title', 120).notNullable()
      table.string('slug', 240).notNullable()
      table.text('content', 1000).notNullable()

      table.integer("user_id")
        .references("id")
        .inTable("users")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

      table.integer("category_id")
        .references("id")
        .inTable("categories")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostSchema
