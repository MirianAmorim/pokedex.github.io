const express = require("express");
const app = express();
const path = require("path"); 
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded( { extended: true } ));

const pokedex = [
    {
    num: "004",
    nome: "Charmander",
    tipo: "Fogo",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    desc: "Tem preferência por coisas quentes. Quando chove, diz-se que vapor jorra da ponta da sua cauda.",
    alt: "0.6m",
    peso: "8.5Kg",
    cat: "Lagarto",
    hab: "Chama",
    },
    {
    num: "007",
    nome: "Squirtle",
    tipo: "Água",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    desc: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
    alt: "0.5m",
    peso: "9Kg",
    cat: "Tartaruga",
    hab: "Canhão d'água",
    },
    {
    num: "012",
    nome: "Butterfree",
    tipo: "Inseto",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    desc: "Em batalha, ele bate suas asas em grande velocidade para liberar poeira altamente tóxica no ar.",
    alt: "1.1m",
    peso: "32Kg",
    cat: "Borboleta",
    hab: "Olhos Compostos",
    }
];

let text = '';

app.get("/", function (req, res) {
    setTimeout( () =>{
        text = "";
    }, 1000);
    res.render("index", { pokedex: pokedex, text });
});

app.get("/cadastro", function (req, res) {
    
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
        text = 'Seu Pokémon foi cadastrado com sucesso!';
    res.redirect("/");
});

app.get("/detalhes", function (req, res) {
    res.render("detalhes", { pokedex : pokedex });
});

app.get('/detalhes/:id', function (req, res) {
    const id = req.params.id;
    const pokemon = pokedex[id];
    res.render("info_id", {pokemon});
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));