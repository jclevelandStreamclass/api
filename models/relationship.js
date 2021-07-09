const dbConnection = require("../config/db");

const Serie = require("./Serie");
const Episode = require('./Episode')
const Category = require('./Category')
const SportsPlayer = require("./SportsPlayer")
const User = require('./User')

const loadModels = () => {

    User.hasMany(Serie, {
        foreignKey: {allowNull: false},
    });

    Serie.belongsToMany(User, {through: 'UserSeries'});

    Serie.hasMany(Episode, {
        foreignKey: {allowNull: false}
    })

    Episode.belongsTo(Serie);

    Category.hasMany(Serie, {
        foreignKey: { allowNull: false }
    });
    
    Serie.belongsTo(Category);  
         
    SportsPlayer.hasMany(Serie, {
       foreignKey: {allowNull: false}
    });
    
    Serie.belongsTo(SportsPlayer);  

    dbConnection.sync({force: true}).then(() => console.log("Estamos en el aire🤯🤯!!!!"));

};

module.exports = loadModels;





