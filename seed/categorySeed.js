require("dotenv").config();

const Category = require("../models/Category");

const categories = [
  {
    id: "1",
    name: "Judo",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626977416/poseidon/nathan-dumlao-_p1Nli6XzJk-unsplash_eiz9gd.jpg",
  },
  {
    id: "2",
    name: "Karate",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626977409/poseidon/thao-le-hoang-HHechVrIhf8-unsplash_vfbru9.jpg",
  },
  {
    id: "3",
    name: "Futbol",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626977467/poseidon/daniel-norin-lBhhnhndpE0-unsplash_gdndge.jpg",
  },
  {
    id: "4",
    name: "Vela",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626434698/poseidon/lazarescu-alexandra-hXPG0Bk6JiM-unsplash_g9ghbt.jpg",
  },
  {
    id: "5",
    name: "Danza",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978241/poseidon/david-hofmann-XmD4gx8jsXE-unsplash_snrkx1.jpg",
  },
  {
    id: "6",
    name: "Crossfit",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978390/poseidon/john-arano-h4i9G-de7Po-unsplash_tjes7w.jpg",
  },
  {
    id: "7",
    name: "Fórmula 1",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978486/poseidon/jp-valery-F5LOVIoM0Kk-unsplash_shlnsf.jpg",
  },
  {
    id: "8",
    name: "Tenis",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978633/poseidon/josephine-gasser-cv83wpGtFtg-unsplash_fakgfs.jpg",
  },
  {
    id: "9",
    name: "Natación",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978719/poseidon/gentrit-sylejmani-JjUyjE-oEbM-unsplash_dwzxdw.jpg",
  },
];

Category.bulkCreate(categories).then(() =>
  console.log("Las categorias han sido creadas")
);
