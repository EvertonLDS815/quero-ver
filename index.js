require("dotenv").config();
const express = require("express");
const app = express();

const connetToDB = require("./database/db");

const port = process.env.PORT || 2777;
const cors = require("cors");

app.use(express.json());
app.use(cors());
const Pessoa = require("./model/nome");

connetToDB();

app.get("/", async (req, res) => {
  const pessoa = await Pessoa.find();
  res.json(pessoa);
});

app.post("/", async (req, res) => {
  const newpessoa = req.body;
  await Pessoa.create(newpessoa);

  res.status(201).json(newpessoa);
});

app.listen(port, () => console.log(`🚀 Meu Servidor está na porta http://localhost:${port}`))