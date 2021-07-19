require("dotenv").config();

const Episode = require("../models/Episode");

const episodes = [
  {
    number: 1,
    duration: "Introduccion",
    description: "Una introducción a la navegación.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626434694/poseidon/lauren-forando-87mvOl39xmA-unsplash_rutcoa.jpg",
    video: "https://vimeo.com/573031486",
    serieId: "1",
  },
  {
    number: 2,
    duration: "Introduccion",
    description: "Navegacion 2.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626434702/poseidon/ian-keefe-o51ZmPzv95Q-unsplash_kxvhwe.jpg",
    video: "https://vimeo.com/573031486",
    serieId: "1",
  },
  {
    number: 3,
    duration: "Introduccion",
    description: "Navegacion 3.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626434708/poseidon/ludomil-sawicki-lsXbZtrVSdQ-unsplash_yx4vjj.jpg",
    video: "https://vimeo.com/573031486",
    serieId: "1",
  },
  {
    number: 4,
    duration: "Introduccion",
    description: "Navegacion 4.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626434714/poseidon/artem-verbo-zHg5TXgVoGQ-unsplash_vgiaql.jpg",
    video: "https://vimeo.com/573031486",
    serieId: "1",
  },
];

Episode.bulkCreate(episodes).then(() =>
  console.log("Los episodios han sido creados")
);
