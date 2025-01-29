import { type Request, type Response } from 'express'

export const logRequest = (req: Request, res: Response, next: any) => {
    console.log(`Request: ${req.method} ${req.url}`)
    next()
}
