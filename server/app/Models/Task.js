'use strict'

const Model = use('Model')

class Task extends Model {
  project() {
    this.belongsTo('App/Models/Project')
  }
}

module.exports = Task
