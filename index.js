const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send(`
  <a href="/">Home</a>
  <a href="/about">About</a>
    <h1 style="background-color: red;">home page</h1>
    <p>sample home</p>
  `)
})

app.get('/about', (req, res) => {
    res.send('about page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})