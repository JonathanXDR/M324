import express from 'express'
import albumRoute from './routes/albums.js'
import bandRoute from './routes/bands.js'

const app = express()
const port = process.env.APP_PORT || 3000

app.use(express.json())
app.use('/bands', bandRoute)
app.use('/albums', albumRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
