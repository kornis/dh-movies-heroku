module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movies', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER,
    },
    {
        tableName: 'movies',
        underscored: true,
    })

    return Movie;
}