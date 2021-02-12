module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genres',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
        },
        {
            tableName: 'genres',
            underscored: true,
        })

    Genre.associate = model => {
        Genre.hasMany(model.Series, { foreignKey: "genre_id" })
    }
    return Genre;
}