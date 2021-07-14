require("dotenv").config();

const Serie = require("../models/Serie");

const series = [
  {
    title: "Enseña Vela",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://duckduckgo.com/?q=deportes+vela&atb=v275-1&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fc.pxhere.com%2Fphotos%2F31%2F51%2Fwindsurfer_sea_sports_people_horizon-943665.jpg!d",
  },
  {
    title: "Enseña Gimnasia Rítmica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://duckduckgo.com/?q=gimnasia+ritmica&atb=v275-1&iax=images&ia=images&iai=https%3A%2F%2F3.bp.blogspot.com%2F-w23uYgWiNDA%2FVGFG-1fjIxI%2FAAAAAAAAABQ%2Fxv5EOnG_Xsk%2Fs1600%2Faaaaaaaaaaaaaa.jpg",
  },
  {
    title: "Enseña Fórmula 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://duckduckgo.com/?q=formula+1+alonso&atb=v275-1&iar=images&iax=images&ia=images&iai=http%3A%2F%2Fwww.magazinespain.com%2Fwp-content%2Fuploads%2Ffernando-alonso-5-1.jpg",
  },
  {
    title: "Enseña Tenis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://duckduckgo.com/?q=rafa+nadal&atb=v275-1&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fstatic1.laverdad.es%2Fwww%2Fmultimedia%2F201909%2F27%2Fmedia%2Fcortadas%2F142275165--624x970.jpg",
  },
];

Serie.bulkCreate(series).then(() => console.log("Las series han sido creadas"));
