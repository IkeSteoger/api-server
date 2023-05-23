'use strict';

const express = require('express');
const router = express.Router();
const { tabletopGamesModel } = require('../models/index');

router.post('/tabletopGames', async (req, res, next) => {
  let tabletopGames = await tabletopGamesModel.create(req.body);

  res.status(200).send(tabletopGames);
});

router.get('/tabletopGames', async (req, res, next) => {
  let tabletopGames = await tabletopGamesModel.read();

  res.status(200).send(tabletopGames);
});

router.get('/tabletopGames/:id', async (req, res, next) => {
  let tabletopGames = await tabletopGamesModel.read(req.params.id);

  res.status(200).send(tabletopGames);
});

router.put('/tabletopGames/:id', async (req, res, next) => {
  await tabletopGamesModel.update(req.body, req.params.id);
  let updatedTabletopGames = await tabletopGamesModel.read(req.params.id);
  res.status(200).send(updatedTabletopGames);
});

router.delete('/tabletopGames/:id', async (req, res, next) => {
  try {
    const deletedGame = await tabletopGamesModel.delete(req.params.id);
    res.status(200).send(deletedGame);
  } catch(err) {
    next(err);
  }
});

module.exports = router;