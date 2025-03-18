const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app; // Exporta o app para ser usado nos testes
