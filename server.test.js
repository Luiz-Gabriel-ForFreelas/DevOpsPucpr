const request = require('supertest');
const app = require('./server'); // Importa o app sem iniciar o servidor

describe('Testando rotas do Express', () => {
    test('GET / deve retornar "Hello, World!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});