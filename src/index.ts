
import express from 'express';

const app = express();
const porta = 3000;

app.use(express.json());

app.get("/sobre", (req, res) => {
    res.status(200).json({
        mensagem: "api sobre cadastro de produtos"
    });
});

app.get("/saudacao/:nome", (req, res) => {
    const nome = req.params.nome;

    res.json({
        mensagem: `bom dia ${nome}`
    });
});

app.get("/produto/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        acao: "pesquisa por produto",
        id: id
    });
});

app.post("/produto", (req, res) => {
    res.json({
        verbo: "POST",
        acao: "Cadastrar Cliente"
    });
});

app.put("/produto", (req, res) => {
    res.json({
        verbo: "PUT",
        acao: "Substituir o Recurso completamente"
    });
});

app.delete("/produto/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        id: id,
        verbo: "Delete",
        acao: "Deletar o Recurso"
    });
});

app.listen(porta, () => {
    console.log("servidor no ar");
    console.log("http://localhost:" + porta);
});
