const express = require('express');
const PORT = 8080;
const app = express();
app.use(express.json());

const alunos = Array(
    {id: 1, nome: "Luiz", idade: 21, curso: "Análise de Sistemas"},
    {id: 2, nome: "Maria", idade: 20, curso: "Farmácia"}
)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/alunos', (req, res) => {
    res.send(alunos)
})

app.get('/api/alunos/:id', (rec, res) => {
    const aluno = alunos.find(a => a.id === parseInt(rec.params.id))
    if(!aluno) {res.status(404).send('Aluno não encontrado')}
    res.send(aluno)
})

app.post('/api/alunos', (rec, res) => {
    const aluno = {
        id: alunos.length + 1,
        nome: rec.body.nome,
        idade: parseInt(rec.body.idade),
        curso: rec.body.curso
    }
    alunos.push(aluno);
    res.send(aluno);
})

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app; // Exporta o app para ser usado nos testes
