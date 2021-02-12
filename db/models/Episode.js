module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define('Episodes',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: DataTypes.STRING,
            rating: DataTypes.INTEGER,
            release_date: DataTypes.DATE,
        },
        {
            tableName: 'episodes',
            underscored: true,
        })

    return Episode;
}