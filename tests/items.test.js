const request = require('supertest');
const app = require('../server');

describe('Items API', () => {
  test('GET /items - should return 200 and an array', async () => {
    const response = await request(app).get('/items');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /items/:id - should return 400 for invalid ID', async () => {
    const response = await request(app).get('/items/invalidid');
    expect(response.status).toBe(400);
  });
});
