const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { setupServer } = require('../server');
const config = require('../knexfile');
const knex = require('knex')(config.development);

const tableName = 'testtable';

const testData = {
  id: 9998,
  name: '9998',
  description: 'abcd',
};

describe('testtableのチェック', () => {
  let request;
  const server = setupServer();
  beforeEach(async () => {
    request = chai.request(server);
    await knex(tableName)
      .insert(testData)
      .returning('id')
      .then((result) => {
        console.log(`insert data ID : ${result[0].id}`);
      })
      .catch(console.error);
  });

  after(async () => {
    await knex(tableName)
      .where('id', testData.id)
      .returning('id')
      .del()
      .then((result) => {
        console.log('removed test customer');
      })
      .catch(console.error);
  });

  it('/api/v1/dbのエンドポイントでDB情報を全てGETできる', () => {
    request.get('/api/v1/db').end(function (err, res) {
      expect(err).to.be.null;

      expect(res.body).to.be.a('array');
      expect(res.body[0]).to.have.property('id');
      expect(res.body[0]).to.have.property('name');
      expect(res.body[0]).to.have.property('description');
    });
  });
});
