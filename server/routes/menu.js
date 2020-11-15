const { Router } = require('express');
const { Op } = require('sequelize');
const {
  Bar,
  Menu,
} = require('../db/models/dbindex.js');

const menuRouter = Router();

menuRouter.get('/', (req, res) => {
  Menu.findAll()
    .then((menus) => {
      res.send(menus);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

menuRouter.get('/allbars', (req, res) => {
  Menu.findAll()
    .then((menus) => {
      const ids = menus.map((bar) => ({ id: bar.id_bar }));
      return Bar.findAll({
        where: {
          [Op.or]: ids,
        },
      });
    })
    .then((rtn) => {
      res.send(rtn);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

menuRouter.get('/bar/:barId', (req, res) => {
  const { barId } = req.params;
  Menu.findAll({
    where: {
      id_bar: barId,
    },
  })
    .then((menus) => (menus.length > 0 ? res.send(menus) : res.send('Empty')))
    .catch((err) => {
      res.status(500).send(err);
    });
});

menuRouter.post('/bar', (req, res) => {
  const { barId, info } = req.body;
  Menu.findOrCreate({
    where: {
      'id_bar': barId,
      info,
    },
  })
    .then((menus) => res.send(menus))
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = {
  menuRouter,
};
