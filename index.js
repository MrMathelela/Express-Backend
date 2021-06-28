const express = require('express')
const app = express()
const sql = require("./db");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/getall', (req, res) => {

    sql.query("SELECT * FROM pokeapi_urls limit 1", (err, results) => {

        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        res.send(results[0])
        console.log("pokeapi_urls: ", results[0]);
    });

})

app.listen(3001, () => {
    console.log("running on port 3001")
})