const Serie = require("../models/Serie");
const Episode = require("../models/Episode");

// FIND
exports.findAllSeries = async () => {
  return await Serie.findAll({ include: { model: Episode } });
};

exports.findSerieById = async (id) => {
  return await Serie.findByPk(id, {
    include: [{ include: { model: Episode } }],
  });
};

// INSERT
exports.insertSerie = async (serie) => {
  return await Serie.create(serie);
};

// UPDATE
exports.updateSerie = async (id, serieDetails) => {
  await Serie.update(serieDetails, { where: { id } });
  return await Serie.findByPk(id);
};

// DELETE
exports.deleteSerie = async (id) => {
  return await Serie.destroy({ where: { id } });
};
