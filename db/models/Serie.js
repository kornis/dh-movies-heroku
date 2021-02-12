module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define('Series',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: DataTypes.STRING,
            release_date: DataTypes.DATE,
            genre_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
            }
        },
        {
            tableName: 'series',
            underscored: true,
        })

        Serie.associate = model => {
            Serie.belongsTo(model.Genres, { foreignKey: "genre_id" })
        }

    return Serie;
}