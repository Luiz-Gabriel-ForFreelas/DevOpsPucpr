const express = require('express')
const PORT = 8080;
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

module.exports = app; // Exporta o app para ser usado nos testes

app.listen(PORT)