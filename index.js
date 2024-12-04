const express = require("express");

const app = express();

const db = require("./db");

require("dotenv").config();

app.use(express.json());



app.post("/produtos", (request, response) => {
    const produto = request.body;
    db.cadastrarProduto(produto);
    response.sendStatus(201);
});

app.get("/produtos", (request, response) => {
    response.json(db.listaDeProdutos());
});

app.get("/produtos/:id", (request, response) => {
    const id = request.params.id;
    response.json(db.consultarProduto(id));
});

app.patch("/produtos/:id", (request, response) => {
    const id = request.params.id;
    const dados = request.body;
    db.editarProduto(id, dados);
    response.sendStatus(200);
});

app.delete("/produtos/:id", (request, response) => {
    const id = request.params.id;
    db.deletarProduto(id);
    response.sendStatus(204);
});


//Verificações

app.get("/", (request, response) => {
    response.json({
        message: "OK!"
    })
})

app.listen(process.env.PORT, () => {
    console.log("APP FUNCIONANDO");
});
