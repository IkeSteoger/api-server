'use strict';

const express = require('express');
const router = express.Router();
const { videoGamesModel, tabletopGamesModel } = require('../models/index');

router.post('/videoGames', async (req, res, next) => {
  let videoGames = await videoGamesModel.create(req.body);

  res.status(200).send(videoGames);
});

router.get('/videoGames', async (req, res, next) => {
  let videoGames = await videoGamesModel.read();

  res.status(200).send(videoGames);
});

router.get('/videoGamesAndTabletop', async (req, res, next) => {
  let videoGames = await videoGamesModel.read(null, {
    include: {model: tabletopGamesModel},
    where: {released: req.query.released},
  });
  res.status(200).send(videoGames);
});

router.get('/videoGames/:id', async (req, res, next) => {
  let videoGames = await videoGamesModel.read(req.params.id);

  res.status(200).send(videoGames);
});

router.put('/videoGames/:id', async (req, res, next) => {
  await videoGamesModel.update(req.body, req.params.id);
  let updatedvideoGames = await videoGamesModel.read(req.params.id);
  res.status(200).send(updatedvideoGames);
});

router.delete('/videoGames/:id', async (req, res, next) => {
  try {
    const deletedGame = await videoGamesModel.delete(req.params.id);
    res.status(200).send(deletedGame);
  } catch(err) {
    next(err);
  }
});

module.exports = router;