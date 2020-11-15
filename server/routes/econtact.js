const { Router } = require('express');
const {
  Customer,
  Econtact,
} = require('../db/models/dbindex.js');

const econtactRouter = Router();

econtactRouter.get('/', (req, res) => {
  Econtact.findAll()
    .then((eContacts) => {
      res.send(eContacts);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

econtactRouter.get('/customer/:customerId', (req, res) => {
  const { customerId } = req.params;
  Econtact.findAll({
    where: {
      id_customer: customerId,
    },
  })
    .then((eContacts) => {
      eContacts.length > 0 ? res.send(eContacts) : res.send('Empty');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
// TODO: Refactor
econtactRouter.post('/add', (req, res) => {
  const {
    first,
    last,
    email,
    number,
    id,
  } = req.body;
  Customer.findOne({
    where: {
      id_google: `${id}`,
    },
  })
    .then((result) => {
      const customerId = result.id;
      Econtact.create({
        id_customer: customerId,
        first_name: first,
        last_name: last,
        phone_number: number,
        email,
      })
        .then((response) => {
          res.send(response);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
});

econtactRouter.put('/edit', (req, res) => {
  const {
    eContactId,
    first_name,
    last_name,
    phone_number,
    email,
  } = req.body;
  Econtact.update({
    first_name,
    last_name,
    phone_number,
    email,
  }, {
    where: {
      id: eContactId,
    },
  })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

econtactRouter.get('/customer/:customerId', (req, res) => {
  const { customerId } = req.params;
  Econtact.findAll({
    where: {
      id_customer: customerId,
    },
  })
    .then((eContacts) => {
      eContacts.length > 0 ? res.send(eContacts) : res.send('Empty');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//
module.exports = {
  econtactRouter,
};
