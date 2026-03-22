const fastify = require('fastify')({
  logger: true
})

fastify.get('/api/data', async (request, reply) => {
  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 5_000));

  reply.send({ message: 'Hello from the mock API!' });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Mock API server is running at ${address}`);
});
