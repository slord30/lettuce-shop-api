const request = require('supertest');
const app = require('../server');

describe('Users API', () => {
  test('GET /users - should return 200 and an array', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /users/:id - should return 400 for invalid ID', async () => {
    const response = await request(app).get('/users/invalidid');
    expect(response.status).toBe(400);
  });
});
