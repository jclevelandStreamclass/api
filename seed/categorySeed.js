require("dotenv").config();

const Category = require("../models/Category");

const categories = [
    {
        name:"Judo",
        photo:" "
    },
    {
        name:"Karate",
        photo:" "
    },
    {
        name:"Futbol",
        photo:" "
    },
    {
        name:"Vela",
        photo:" "
    },
    {
        name:"Danza",
        photo:" "
    },
    {
        name:"Crossfit",
        photo:" "
    },
]

Category.bulkCreate( categories).then(() => console.log("Las categorias han sido creadas"));
