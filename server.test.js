const request = require('supertest');
const app = require('./server'); // Importa o app sem iniciar o servidor

describe('Testando rotas do Express', () => {
    let server;

    beforeAll(() => {
        // Inicializa o servidor antes de rodar os testes
        server = app.listen(8080);
    });

    afterAll(() => {
        // Fecha o servidor depois que os testes terminarem
        server.close();
    });

    test('GET / deve retornar "Hello, World!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});