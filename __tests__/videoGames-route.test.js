'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');

const request = supertest(app);

beforeAll( async () => {
  await sequelizeDatabase.sync();
});

afterAll( async () => {
  await sequelizeDatabase.drop();
});


describe('VideoGames routes', () => {
  test('create route', async () => {
    const response = await request.post('/videogames').send({name: 'hunt: showdown'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('hunt: showdown');
  });

  test('read all route', async () => {
    const response = await request.get('/videogames');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('hunt: showdown');
  });

  test('read one route', async () => {
    const response = await request.get('/videogames/1');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('hunt: showdown');
  });

  test('update route', async () => {
    const response = await request.put('/videogames/1').send({name: 'hunt 2: bayou boogaloo'});

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('hunt 2: bayou boogaloo');
  });

  test('delete route', async () => {
    const response = await request.delete('/videogames/1');
    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('hunt 2: bayou boogaloo');
  });
});