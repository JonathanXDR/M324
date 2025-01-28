import express, { type Request, type Response } from 'express'
import albumRoute from './routes/albums'
import bandRoute from './routes/bands'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/bands', bandRoute)
app.use('/albums', albumRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

export default app
