const serieRepository = require("../repositories/serieRepository");

exports.getAllSeries = async () => {
    const series = await serieRepository.findAllSeries();
    return series;
}

exports.getSerieById = async (id) => {
    const usuario = await serieRepository.findSerieById(id);
    return usuario;
}

exports.createSerie = async (serie) => {
    // delete serie.id;
    if (!serie) {
        throw new Error();
    }

    return await serieRepository.insertSerie(serie);
}

exports.editSerie = async (id, serieDetails) => {
    const serie = await serieRepository.updateSerie(id, serieDetails);
    return serie;
}

exports.removeSerie = async (id) => {
    return await serieRepository.deleteSerie(id);
}

