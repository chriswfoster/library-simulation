module.exports = {
  createbook: (req, res, next) => {
    const dbInstance = req.app.get("db")
    console.log(req.body)
    const { genre, in_stock, image_url, title, author, description } = req.body

    dbInstance
      .createBook(genre, in_stock, image_url, title, author, description)
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  },
  registeruser: (req, res, next) => {
    const dbInstance = req.app.get("db")
    console.log(req.body)
    const { username, password } = req.body

    dbInstance
      .registerUser(username, password)
      .then(response => {
        res.status(200).send(response)
      })
      .catch(() => res.status(500).send())
  },
  getall: (req, res, next) => {
    const dbInstance = req.app.get("db")

    dbInstance
      .getAllBooks()
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send())
  },
  loginuser: (req, res, next) => {
    const dbInstance = req.app.get("db")
    const { username, password } = req.body

    dbInstance
      .loginUser(username, password)
      .then(response => {
        req.session.user = response
        res.status(200).send(response)
      })
      .catch(() => res.status(500).send())
  }
}
