const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "simondb.c8vy11s6nsx4.us-east-1.rds.amazonaws.com",
    user: "Pokemon",
    password: "Bulbasaur100!",
    database: "pokeapi"
})
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;