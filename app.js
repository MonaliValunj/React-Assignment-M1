import express from 'express'

const app = express()

app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, "js")));



app.get('/', (req, res) => {
  res.sendFile('public/index.html')
})


const PORT = 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
