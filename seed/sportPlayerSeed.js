require("dotenv").config();

const SportPlayer = require("../models/SportsPlayer");

const sportsPLayers = [
  {
    id: "1",
    name: "Rafael Nadal",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Tenis",
    photo:
      "https://www.atptour.com/-/media/images/news/2021/06/17/11/54/nadal-wimbledon-bh-2019.jpg",
  },
  {
    id: "2",
    name: "Jordi Xammar",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Vela",
    photo:
      "https://img.ccma.cat/multimedia/jpg/8/1/1621184492518_670x378.jpg",
  },
  {
    id: "3",
    name: "Alejandra Quereda",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Gimnasia Rítmica",
    photo:
      "https://www.proyectofer.es/wp-content/uploads/2018/11/FER_montaje4_1140x664.jpg",
  },
  {
    id: "4",
    name: "Fernando Alonso",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Fórmula 1 Driver",
    photo:
      "https://soymotor.com/sites/default/files/styles/large/public/imagenes/noticia/fernando-alonso-barein-2021-f1-soymotor.jpg",
  },
  {
    id: "5",
    name: "Nikoloz Sheradishvili",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Judo Master",
    photo:
      "http://vestnikkavkaza.net/upload2/2018-10-24/15403683125bd027b8092c93.72946604.jpg",
  },
  {
    id: "6",
    name: "Garbiñe Muguruza",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Tennis player",
    photo:
      "https://euskalkazeta.com/wp-content/uploads/2017/07/garbine-muguruza-hat-es-unter-die-besten-vier-geschafft-.jpg",
  },
  {
    id: "7",
    name: "Feliciano López",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    job: "Tennis player",
    photo:
      "http://tennisnow.com/images/2021/June/Lopez-mallorca-06222021.aspx",
  },

  
  
];

SportPlayer.bulkCreate(sportsPLayers).then(() =>
  console.log("Los deportistas han sido creados")
);
