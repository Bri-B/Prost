const { Router } = require('express');
const {
  Thread,
} = require('../db/models/dbindex.js');

const threadRouter = Router();

threadRouter.get('/', (req, res) => {
  Thread.findAll()
    .then((threads) => {
      res.send(threads);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//
module.exports = {
  threadRouter,
};
