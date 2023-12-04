const { setupServer } = require('./server');

const server = setupServer();
const PORT = 4242;

server.listen(PORT, () => {
  console.log('server is running');
});
