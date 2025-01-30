import express, { type Request, type Response } from 'express'
import albumRoute from './routes/albums.js'
import bandRoute from './routes/bands.js'

const app = express()
const useAWS: boolean = process.env.USE_AWS === 'true'

app.use(express.json())

if (useAWS) {
  const { logToAwsOnRequest, logToAwsOnResponse } = await import(
    './awsMiddleware.js'
  )
  app.use(logToAwsOnRequest)
  app.use(logToAwsOnResponse)
}

app.use('/bands', bandRoute)
app.use('/albums', albumRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
