const serieRepository = require("../repositories/serieRepository");
const {
  insertSerieSchema,
  updateSerieSchema,
} = require("../validations/serieValidation");

exports.getAllSeries = async () => {
  const series = await serieRepository.findAllSeries();
  return series;
};

exports.getSerieById = async (id) => {
  const serie = await serieRepository.findSerieById(id);
  return serie;
};

exports.createSerie = async (serie) => {
  const validationData = await insertSerieSchema.validateAsync(serie);

  return await serieRepository.insertSerie(validationData);
};

exports.editSerie = async (id, serieDetails) => {
  const validationData = await updateSerieSchema.validateAsync(serieDetails);

  await serieRepository.updateSerie(id, validationData);

  const serie = await serieRepository.findSerieById(id);

  return serie;
};

exports.removeSerie = async (id) => {
  return await serieRepository.deleteSerie(id);
};
