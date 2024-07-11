import { Context, Env, Hono, Next } from 'hono';
const app = new Hono();

app.post('/', async (c) => {
  // way to excess body
  const body = await c.req.json();

  console.log(`body: ${body}`)
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
