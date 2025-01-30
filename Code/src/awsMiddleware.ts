import AWS from 'aws-sdk'
import { type Request, type Response } from 'express'

const logGroupName = process.env.AWS_LOG_GROUP_NAME || ''
const logStreamName = process.env.AWS_LOG_STREAM_NAME || ''

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const cloudWatchLogs = new AWS.CloudWatchLogs()

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

export const logToAwsOnRequest = (req: Request, res: Response, next: any) => {
  const message =
    `[INFO] [${new Date().toISOString()}] Request received - ` +
    `Method: ${req.method}, ` +
    `Endpoint: ${req.originalUrl}, ` +
    `Client IP: ${req.ip}, ` +
    `User Agent: ${req.headers['user-agent']}, ` +
    `Request ID: ${req.headers['x-request-id'] || 'N/A'}, ` +
    `Body: ${JSON.stringify(req.body)}, ` +
    `Headers: Authorization: ${req.headers.authorization ? 'Bearer ****' : 'N/A'}, ` +
    `Content-Type: ${req.headers['content-type']}`

  logMessage(message)
  next()
}

export const logToAwsOnResponse = (req: Request, res: Response, next: any) => {
  const start = Date.now()
  res.on('finish', () => {
    const responseTime = Date.now() - start
    const message =
      `[INFO] [${new Date().toISOString()}] Response sent - ` +
      `Status: ${res.statusCode}, ` +
      `Endpoint: ${req.originalUrl}, ` +
      `Client IP: ${req.ip}, ` +
      `Request ID: ${req.headers['x-request-id'] || 'N/A'}, ` +
      `Response Time: ${responseTime}ms`

    logMessage(message)
  })
  next()
}
