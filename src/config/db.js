const Sequelize = require('sequelize');

export const db = new Sequelize('tesdadb', 'root', null, {
    host: 'localhost',
    dialect: "mysql"
});

export const testConnection = () => {
    db.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}