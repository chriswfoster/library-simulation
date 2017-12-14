const express = require("express")
const { json } = require("body-parser")
const cors = require("cors")
const session = require("express-session")
const massive = require("massive")

const { secret } = require("./config.js").session

const connectionString = require("./config").massive

const app = express()

// app.use(express.static(`${__dirname}/../build`)) // commented out until ready to build... tee hee!

const massiveConnection = massive(connectionString)
  .then(db => app.set("db", db))
  .catch(console.log)

// port 3030, Deltron Zero
const port = 3030

app.use(json())
app.use(cors())

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false
  })
)
const controller = require("./controller.js")
// SOMETHING MIGHT GO HERE..... MAYBE LOGIN FUNCTION OF SOME SORT

app.post("/api/auth/login", controller.loginuser, (req, res, next) => {
  res.redirect("http://localhost:3000/Home")
})
app.post("/api/auth/register", controller.registeruser)

app.get("/logout", function(req, res) {
  req.logout()
  res.redirect("/")
})

app.get("/api/getallposts", controller.getall)

app.get("/api/me", function(req, res) {
  console.log(req.session)
  if (!req.session.user) return res.status(401)
  res.status(200).json(req.session.user)
})

// const path = require("path")
// app.get("*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "/../build/index.html"))
// })

app.listen(port, () => {
  console.log(`Listening on dat port: ${port}`)
})
