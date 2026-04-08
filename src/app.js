const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static('public'))
app.use(express.static('pages'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '/sobre.html'));
});

app.use((req, res) => {
    res.status(404).send("404 - Pagina não encontrada");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});