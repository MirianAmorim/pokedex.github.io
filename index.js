const express = require("express");
const app = express();
const path = require("path"); 
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded( { extended: true } ));

const pokedex = [
    {
    num: "00",
    nome: "Charmander",
    tipo: "Fogo",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    desc: "Tem preferência por coisas quentes. Quando chove, diz-se que vapor jorra da ponta da sua cauda.",
    alt: "0.6",
    peso: "8.5",
    cat: "Lagarto",
    hab: "Chama",
    },
    {
    num: "012",
    nome: "Butterfree",
    tipo: "Bug",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    desc: "",
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
let text = '';

app.get("/", function (req, res) {
    res.render("index", { pokedex: pokedex });
});

app.get("/cadastro", function (req, res) {
    setTimeout( () =>{
        text = "";
    }, 1000);
    text = 'Seu Pokémon foi cadastrado com sucesso!'
    res.render("cadastro", {text : text});
});

app.post("/infos", function (req, res) {
    const {num, nome, tipo, foto, desc, alt, peso, cat, hab} = req.body;
    pokedex.push({
        num: num, 
        nome: nome, 
        tipo: tipo, 
        foto: foto, 
        desc: desc, 
        alt: alt, 
        peso: peso, 
        cat: cat, 
        hab: hab});
        text = 'Parabéns, seu Pokémon foi cadastrado!'
    res.redirect("cadastro");
});

app.get("/detalhes", function (req, res) {
    res.render("detalhes", { pokedex : pokedex });
});

app.get('detalhes/:id', function (req, res) {
    const id = req.params.id;
    const pokedex = pokedex[id];
    res.render("info_id", {
        pokedex,
      });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));