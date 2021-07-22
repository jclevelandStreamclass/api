require("dotenv").config();

const Serie = require("../models/Serie");

const series = [
  {
    id: "1",
    title: "Enseña Vela",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626434708/poseidon/ludomil-sawicki-lsXbZtrVSdQ-unsplash_yx4vjj.jpg",
    sportsPlayerId: "2",
    categoryId: "4",
  },
  {
    id: "2",
    title: "Enseña Gimnasia Rítmica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978310/poseidon/emily-sea-coiWR0gT8Cw-unsplash_b82bmg.jpg",
    sportsPlayerId: "3",
    categoryId: "5",
  },
  {
    id: "3",
    title: "Enseña Fórmula 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626521265/poseidon/hanson-lu-inVnYQoO9LI-unsplash_lqq1ve.jpg",
    sportsPlayerId: "4",
    categoryId: "7",
  },
  {
    id: "4",
    title: "Enseña Tenis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978622/poseidon/ben-hershey-K9HgyI3qmqA-unsplash_uain9u.jpg",
    sportsPlayerId: "1",
    categoryId: "8",
  },
  {
    id: "9",
    title: "Tenis Competetivo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978626/poseidon/john-fornander-4R9CcBdQTEg-unsplash_vothfx.jpg",
    sportsPlayerId: "6",
    categoryId: "8",
  },
  {
    id: "10",
    title: "Tenis Extreme",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626978634/poseidon/renith-r-MLU_X1d3ofQ-unsplash_lza0r7.jpg",
    sportsPlayerId: "7",
    categoryId: "8",
  },
  {
    id: "5",
    title: "Enseña Baloncesto",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626980281/poseidon/max-winkler-UFIZodJgScQ-unsplash_cg1vam.jpg",
    sportsPlayerId: "2",
    categoryId: "5",
  },
  {
    id: "6",
    title: "Enseña Pádel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626980349/poseidon/tomasz-krawczyk-M2x3A8Q4JbY-unsplash_wvpnmb.jpg",
    sportsPlayerId: "3",
    categoryId: "2",
  },
  {
    id: "7",
    title: "Enseña Judo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626977418/poseidon/samuel-castro-MS_RP-Lba0U-unsplash_nzpyqi.jpg",
    sportsPlayerId: "5",
    categoryId: "1",
  },
  {
    id: "8",
    title: "Enseña Bádminton",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1626980524/poseidon/muktasim-azlan-pPfOLOK0oeI-unsplash_n8eiah.jpg",
    sportsPlayerId: "2",
    categoryId: "5",
  },
];

Serie.bulkCreate(series).then(() => console.log("Las series han sido creadas"));
