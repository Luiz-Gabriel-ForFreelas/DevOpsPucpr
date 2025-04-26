const request = require('supertest');
const app = require('./server'); // Importa o app sem iniciar o servidor

describe('Testando rotas do Express', () => {
    test('GET /  - deve retornar "Hello, World!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });

    test("GET /api/alunos - deve retornar a lista inicial de alunos", async () => {
        const initArray = Array(
            {id: 1, nome: "Luiz", idade: 21, curso: "Análise de Sistemas"},
            {id: 2, nome: "Maria", idade: 20, curso: "Farmácia"}
        );
        const response = await request(app).get('/api/alunos');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(initArray);
    });

    test("GET /api/alunos/:id - deve retornar o aluno desejado", async () => {
        const aluno = {id: 1, nome: "Luiz", idade: 21, curso: "Análise de Sistemas"};
        const response = await request(app).get('/api/alunos/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(aluno);
    });

    test("GET /api/alunos/:id - deve retornar o status 404", async () => {
        const response = await request(app).get('/api/alunos/3');
        expect(response.status).toBe(404);
        expect(response.body).toEqual('Aluno não encontrado');
    });
});