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

  test('500 on failed delete', async () => {
    const response = await mockRequest.delete('/videogames/lajsdlkaj');
    expect(response.status).toEqual(500);
  });
  
});
