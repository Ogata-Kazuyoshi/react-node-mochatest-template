const { setupServer } = require('./server');

const server = setupServer();
const PORT = 4242;
require('dotenv').config();

server.listen(process.env.PORT || PORT, () => {
  console.log('server is running');
});
