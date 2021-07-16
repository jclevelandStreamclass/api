const Serie = require("../models/Serie");
const Episode = require("../models/Episode");
const SportsPlayer = require("../models/SportsPlayer");

// FIND
exports.findAllSeries = async () => {
  return await Serie.findAll({ include: { model: Episode } });
};

exports.findSerieById = async (id) => {
  return await Serie.findByPk(id, {
    include: [{ model: Episode }]
  });
  //return serie;
};

exports.searchSerie = async (filter) => {
  const {title} = filter
  return await Serie.findAll({where: {title}});
}
// INSERT
exports.insertSerie = async (serie) => {
  return await Serie.create(serie);
};

// UPDATE
exports.updateSerie = async (id, serieDetails) => {
  return await Serie.update(serieDetails, { where: { id } });
};

// DELETE
exports.deleteSerie = async (id) => {
  return await Serie.destroy({ where: { id } });
};
