//npm install express
//npm init -y
const express = require('express');
const app = express();
const porta = 8080;

//O express precisa disso para conseguir usar o "app"
app.use(express.json())
//array de objetos
let cardapio =[
{id: 1, nome: "x-salada", preco:15.00}
];
//criação da rota POST
app.post('/novo-lanche',(req,res) => {
//"carteiro" body traz a JSON enviado
const novoItem = req.body;
cardapio.push(novoItem);

console.log("Cardapio atualizado: ",cardapio);

res.status(201).json({
mensagem: "Lanche cadastrado com sucesso!",
itemCadastrado: novoItem
});
})

app.listen(porta, () =>{
console.log(`servidor rodando na porta ${porta}`)
})