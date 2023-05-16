'use strict';

const express = require('express');
const router = express.Router();
const { tabletopGamesModel } = require('../models/index');

router.post('/tabletopGames', async (req, res, next) => {
  let tabletopGames = await tabletopGamesModel.create(req.body);

  res.status(200).send(tabletopGames);
});

router.get('/tabletopGames', async (req, res, next) => {
  let tabletopGames = await tabletopGamesModel.findAll();

  res.status(200).send(tabletopGames);
});

router.get('/tabletopGames/:id', async (req, res, next) => {
  let tabletopGames = await tabletopGamesModel.findAll({where: {id: req.params.id}});

  res.status(200).send(tabletopGames);
});

router.put('/tabletopGames/:id', async (req, res, next) => {
  await tabletopGamesModel.update(req.body, {where: {id: req.params.id}});
  let updatedTabletopGames = await tabletopGamesModel.findAll({where: {id: req.params.id}});
  res.status(200).send(updatedTabletopGames);
});

router.delete('/tabletopGames/:id', async (req, res, next) => {
  await tabletopGamesModel.destroy({where: {id: req.params.id}});

  res.status(200).send('That ID was deleted!');
});
// supposed to send the id back that is deleted
module.exports = router;