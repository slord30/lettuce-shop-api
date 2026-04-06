const request = require('supertest');
const app = require('../server');

describe('Lists API', () => {
  test('GET /lists - should return 200 and an array', async () => {
    const response = await request(app).get('/lists');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /lists/:id - should return 400 for invalid ID', async () => {
    const response = await request(app).get('/lists/invalidid');
    expect(response.status).toBe(400);
  });
});
