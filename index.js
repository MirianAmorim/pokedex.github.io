const express = require("express");
const app = express();
const path = require("path"); 
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded( { extended: true } ));

let text = '';

const pokedex = [
    {
    num: "012",
    nome: "Butterfree",
    tipo: "Bug",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    desc: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    alt: "1.1m",
    peso: "32Kg",
    cat: "Borboleta",
    hab: "Compound Eyes",
    },
    {
    num: "012",
    nome: "Butterfree",
    tipo: "Bug",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    desc: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    alt: "1.1m",
    peso: "32Kg",
    cat: "Borboleta",
    hab: "Compound Eyes",
    },
    {
    num: "012",
    nome: "Butterfree",
    tipo: "Bug",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    desc: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    alt: "1.1m",
    peso: "32Kg",
    cat: "Borboleta",
    hab: "Compound Eyes",
    }
];

app.get("/", function (req, res) {
    res.render("index.ejs", { pokedex: pokedex });
});
app.get("/cadastro", function (req, res) {
    res.render("cadastro.ejs");
});
app.get("/detalhes", function (req, res) {
    res.render("detalhes.ejs");
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));