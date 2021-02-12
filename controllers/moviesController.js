const db = require('../db/models');
module.exports = {
    movies: async (req, res) => {
        const movies = await db.Movies.findAll();
        return res.render('index', { movies })
    },
    series: async (req, res) => {
        const series = await db.Series.findAll({
            include: {
                model: db.Genres,
                attributes: ['name']
            }
        });
        return res.render('series', { series })
    },
    episodes: async (req, res) => {
        const episodes = await db.Episodes.findAll();
        return res.render('episodios', { episodes })
    }
}