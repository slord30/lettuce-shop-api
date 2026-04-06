const request = require('supertest');
const app = require('../server');

describe('Stores API', () => {
  test('GET /stores - should return 200 and an array', async () => {
    const response = await request(app).get('/stores');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /stores/:id - should return 400 for invalid ID', async () => {
    const response = await request(app).get('/stores/invalidid');
    expect(response.status).toBe(400);
  });
});
