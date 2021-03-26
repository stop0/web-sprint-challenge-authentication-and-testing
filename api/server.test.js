// Write your tests here
const server = require('./server.js');

const request = require('supertest');


test('sanity', () => {
  expect(true).toBe(false)
})

describe('GET /api/auth', () => {
  test('It should require authentication', () => {
    return request(server)
      .get('/api/auth')
      .then((response) => {
        expect(response.statusCode).toBe(404)
      })
  })
})

describe('Test /api/auth/login', () => {
  test('Login returns true', () => {
    return request(server)
      .get('/api/auth/login')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })
})