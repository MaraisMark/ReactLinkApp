const USERS = require("./tables").USERS

module.exports = class UserService {
  constructor(knex) {
    this.knex = knex
  }

  localLogin(email) {
    return this.knex.select().from(USERS).where("email", email)
  }

  localSignUp(name, email, password) {
    return this.knex(USERS)
      .insert({
        name,
        email,
        password,
      })
      .returning("id")
  }

  checkValidEmail(email) {
    return this.knex.select().from(USERS).where("email", email)
  }

  getUserInfoById(id) {
    return this.knex.select().from(USERS).where("id", id)
  }
}
