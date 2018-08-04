'use strict'

const Model = use('Model')

class Project extends Model {
  user() {
    this.belongsTo('App/Models/User')
  }
}

module.exports = Project
