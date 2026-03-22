const fastify = require('fastify')()

fastify.get('/external', async () => {
  await new Promise(r => setTimeout(r, 50))
  return { data: 'ok', ts: Date.now() }
})

fastify.listen({ port: 3001, host: '0.0.0.0' })
