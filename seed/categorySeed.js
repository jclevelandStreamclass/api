require("dotenv").config();

const Category = require("../models/Category");

const categories = [
  {
    id: "1",
    name: "Judo",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "2",
    name: "Karate",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "3",
    name: "Futbol",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "4",
    name: "Vela",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "5",
    name: "Danza",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "6",
    name: "Crossfit",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "7",
    name: "Fórmula 1",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
  {
    id: "8",
    name: "Tenis",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
  },
];

Category.bulkCreate(categories).then(() =>
  console.log("Las categorias han sido creadas")
);
