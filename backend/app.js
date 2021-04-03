// General Initialization
require("dotenv").config()
const NODE_ENV = process.env.NODE_ENV || "development"

const knexFile = require("./knexfile")[NODE_ENV]
const knex = require("knex")(knexFile)
const authClass = require("./utils/auth")
const auth = authClass(knex)
const app = require("./utils/init-app")(auth)

var createError = require("http-errors")

var usersRouter = require("./routes/users")
var linksRouter = require("./routes/links")

app.use("/api/users", usersRouter)
app.use("/api/links", linksRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
})

module.exports = app
