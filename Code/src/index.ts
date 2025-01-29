import express, { type Request, type Response } from 'express'
import albumRoute from './routes/albums.js'
import bandRoute from './routes/bands.js'

const app = express()
const port = process.env.APP_PORT || 3000
const AWS = require('aws-sdk')

// Configure AWS credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

// Create a CloudWatch Logs client
const cloudWatchLogs = new AWS.CloudWatchLogs()

// Define the log group and stream names
const logGroupName = process.env.AWS_LOG_GROUP_NAME || ''

const logStreamName = process.env.AWS_LOG_STREAM_NAME || ''

app.use(express.json())
app.use('/bands', bandRoute)
app.use('/albums', albumRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

const logMessage = (message: string) => {
  const params = {
    logGroupName: logGroupName,
    logStreamName: logStreamName,
    logEvents: [
      {
        message: message,
        timestamp: Date.now()
      }
    ]
  }

  cloudWatchLogs.putLogEvents(params, (error: any, data: any) => {
    if (error) {
      console.log('Error writing log:', error)
    } else {
      console.log('Log written successfully:', data)
    }
  })
}

// Example usage: write a log message
logMessage('App started')

export default app
