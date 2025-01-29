import { type Request, type Response } from 'express'

import AWS from 'aws-sdk'

// Configure AWS credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})
console.log('Updated aws config:')

// Create a CloudWatch Logs client
const cloudWatchLogs = new AWS.CloudWatchLogs()

// Define the log group and stream names
const logGroupName = process.env.AWS_LOG_GROUP_NAME || ''

const logStreamName = process.env.AWS_LOG_STREAM_NAME || ''

const logMessage = (message: string) => {
  const params = {
    logGroupName,
    logStreamName,
    logEvents: [
      {
        message,
        timestamp: Date.now(),
      },
    ],
  }

  cloudWatchLogs.putLogEvents(params, (error: any, data: any) => {
    if (error) {
      console.log('Error writing log:', error)
    } else {
      console.log('Log written successfully:', data)
    }
  })
}
export const logRequest = (req: Request, res: Response, next: any) => {
  logMessage('App started')
  console.log(`Request: ${req.method} ${req.url}`)
  next()
}
