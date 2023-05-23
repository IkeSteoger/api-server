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


describe('TabletopGames routes', () => {
  test('create route', async () => {
    const response = await request.post('/tabletopGames').send({'name': 'catan', 'released': '2001'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('catan');
  });

  test('read all route', async () => {
    const response = await request.get('/tabletopGames');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('catan');
  });

  test('read one route', async () => {
    const response = await request.get('/tabletopGames/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('catan');
  });

  test('update route', async () => {
    const response = await request.put('/tabletopGames/1').send({name: 'catan 2'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('catan 2');
  });

  test('delete route', async () => {
    const response = await request.delete('/tabletopGames/1');
    // console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('catan 2');
  });

  test('500 on failed delete', async () => {
    const response = await request.delete('/tabletopGames/lajsdlkaj');
    expect(response.status).toEqual(500);
  });
});