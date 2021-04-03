const express = require("express")
const jwt = require("jwt-simple")
const bcrypt = require("../utils/bcrypt")

module.exports = class UserRouter {
  constructor(userService) {
    this.userService = userService
  }

  router() {
    let router = express.Router()
    router.post("/login", this.localLogin.bind(this))
    return router
  }

  async localLogin(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(401).send("Invalid email address or password")
      }
      const email = req.body.email
      const password = req.body.password
      const userInfo = await this.userService.localLogin(email)
      if (userInfo[0]) {
        const passwordMatch = await bcrypt.checkPassword(
          password,
          userInfo[0].password
        )
        if (!passwordMatch) {
          return res.status(401).send("Incorrect password")
        }
        const payload = {
          id: userInfo[0].id,
          email: userInfo[0].email,
        }
        const token = jwt.encode(payload, process.env.JWT_SECRET)
        console.log("Local Login User Id: " + userInfo[0].id)
        return res.json({
          success: true,
          id: userInfo[0].id,
          email: userInfo[0].email,
          token,
        })
      } else {
        return res.status(401).send("User not found")
      }
    } catch (err) {
      // console.error(err);
      return res.status(401).json({
        success: false,
        message: err.message,
        error: err,
      })
    }
  }
}
