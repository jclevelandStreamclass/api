const serieRepository = require("../repositories/serieRepository");
const {
  insertSerieSchema,
  updateSerieSchema,
} = require("../validations/serieValidation");

exports.getAllSeries = async () => {
  const series = await serieRepository.findAllSeries();
  return series;
};

exports.getAllSeriesLastUpdate = async () => {
  const series = await serieRepository.findAllSeriesLastUpdate();
  return series;
};

exports.getSerieById = async (id) => {
  const serie = await serieRepository.findSerieById(id);
  return serie;
};

exports.getSerieByCategory = async (cate) => {
  return await serieRepository.findSerieByCategoryId(cate);
};

exports.searchSerieName = async (filter) => {
  return await serieRepository.searchSerie(filter);
};

exports.createSerie = async (serie) => {
  const validationData = await insertSerieSchema.validateAsync(serie);
  return await serieRepository.insertSerie(validationData);
};

exports.editSerie = async (id, serieDetails) => {
  const validationData = await updateSerieSchema.validateAsync(serieDetails);

  const serieDb = await serieRepository.findSerieById(id);

  if (!serieDb) {
    throw new Error("Serie not found in databases");
  }

  await serieRepository.updateSerie(id, validationData);

  const serie = await serieRepository.findSerieById(id);

  return serie;
};

exports.removeSerie = async (id) => {
  const serieDb = await serieRepository.findSerieById(id);

  if (!serieDb) {
    throw new Error("Serie not found in databases");
  }

  return await serieRepository.deleteSerie(id);
};
