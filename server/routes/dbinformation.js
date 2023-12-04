const router = require('express').Router();
const knex = require('../knexIndex');

//DBの情報を全て取得してくるエンドポイント
router.get('/', async (req, res) => {
  const data = await knex('testtable').select('*');
  res.send(data);
});

//新規データを DBに登録するエンドポイント
router.post('/', async (req, res) => {
  const body = req.body;
  console.log('body : ', body);
  const newId = await knex('testtable')
    .insert(body)
    .returning('id')
    .then((elm) => elm[0].id);
  console.log('newId :', newId);
  res.send({ id: newId });
});

//

module.exports = router;
