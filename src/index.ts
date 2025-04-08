import { serve } from '@hono/node-server'
import { log } from 'console'
import { Hono } from 'hono'
import qwen from './qwen.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/qwen", async c => {
  const input = c.req.query("input")
  if(input){
    const s = await qwen(input)
    if(s){
      return c.json({ ok: true, input, response: `${s}\nDeveloper: @AppModule` })
    } else {
      return c.json({ ok: false, error: s })
    }
  } else {
    return c.text("set the \"input\" query!")
  }
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
