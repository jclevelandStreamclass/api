require("dotenv").config();

const SportPlayer = require("../models/SportsPlayer");

const sportsPLayers = [
  {
    id: "1",
    name: "Rafael Nadal",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Tenis",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "2",
    name: "Jordi Xammar",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Vela",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "3",
    name: "Alejandra Quereda",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Gimnasia Rítmica",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "4",
    name: "Fernando Alonso",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Fórmula 1",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
];

SportPlayer.bulkCreate(sportsPLayers).then(() =>
  console.log("Los deportistas han sido creados")
);
