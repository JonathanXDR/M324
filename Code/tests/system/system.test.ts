import { spawn } from 'child_process'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import waitOn from 'wait-on'

const PORT = 4000
const BASE_URL = `http://localhost:${PORT}`

let serverProcess: any

describe('System (E2E) Tests', () => {
  beforeAll(async () => {
    serverProcess = spawn('bun', ['run', 'Code/src/index.ts'], {
      env: { ...process.env, PORT: PORT.toString() },
      stdio: 'inherit',
    })

    await waitOn({ resources: [BASE_URL], timeout: 10000 })
  }, 20000)

  afterAll(() => {
    if (serverProcess) {
      serverProcess.kill()
    }
  })

  it('should respond with "Hello World!" on the root path', async () => {
    const res = await request(BASE_URL).get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello World!')
  })

  it('should return an array of bands on GET /bands', async () => {
    const res = await request(BASE_URL).get('/bands')

    if (res.status === 200) {
      expect(Array.isArray(res.body.data)).toBe(true)
    } else {
      expect(res.body.data).toBe('No Bands found! :(')
    }
  })
})
