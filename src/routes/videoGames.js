'use strict';

const express = require('express');
const router = express.Router();
const { videoGamesModel } = require('../models/index');

router.post('/videoGames', async (req, res, next) => {
  let videoGames = await videoGamesModel.create(req.body);

  res.status(200).send(videoGames);
});

router.get('/videoGames', async (req, res, next) => {
  let videoGames = await videoGamesModel.findAll();

  res.status(200).send(videoGames);
});

router.get('/videoGames/:id', async (req, res, next) => {
  let videoGames = await videoGamesModel.findAll({where: {id: req.params.id}});

  res.status(200).send(videoGames);
});

router.put('/videoGames/:id', async (req, res, next) => {
  await videoGamesModel.update(req.body, {where: {id: req.params.id}});
  let updatedvideoGames = await videoGamesModel.findAll({where: {id: req.params.id}});
  res.status(200).send(updatedvideoGames);
});

router.delete('/videoGames/:id', async (req, res, next) => {
  await videoGamesModel.destroy({where: {id: req.params.id}});

  res.status(200).send('That ID was deleted!');
});

module.exports = router;