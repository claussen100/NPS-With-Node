import express from 'express';

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PACTH => Alteração específica
 */

// http://localhost:3333/users

app.get("/", (request, response) => {

    return response.json({ message: "Hello World - NLW04" });
})

//1 parametro => Rota(Recurso API)
//2 parametro => Request, response

app.post("/", (request, response) => {
    //ja recebeu os dados pra salvar

    return response.json({ message: "Os dados foram salvados com sucesso!" });
})

app.listen(3333, () => console.log("Server is Running!"));
