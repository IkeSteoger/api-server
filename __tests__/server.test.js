'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  
  test('404 on bad route', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });
  
  test('404 on bad method', async () => {
    const response = await mockRequest.post('/');
    expect(response.status).toEqual(404);
  });

  // test('Create a record using POST', async () => {
  //   let response = await mockRequest.post('/videoGames?name=hunt');
  //   expect(response.status).toEqual(200);

  //   response = await mockRequest.post('/tabletopGames?name=skipBo');
  //   expect(response.status).toEqual(200);
  // });

  // test('Read a list of records using GET', async () => {
  //   let response = await mockRequest.get('/videoGames');
  //   expect(response.status).toEqual(200);

  //   response = await mockRequest.get('/tabletopGames');
  //   expect(response.status).toEqual(200);
  // });

  // test('Read a record using GET', async () => {
  //   const response = await mockRequest.get('/videoGames/1');
  //   expect(response.status).toEqual(200);
  // });

  // test('Update a record using PUT', async () => {
  //   const response = await mockRequest.put('/videoGames/1');
  //   expect(response.status).toEqual(200);
  // });

  // test('Destroy a record using DELETE', async () => {
  //   const response = await mockRequest.delete('/videoGames/1');
  //   expect(response.status).toEqual(200);
  // });

});
