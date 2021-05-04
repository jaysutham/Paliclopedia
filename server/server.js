const express = require ('express');
const app = express();
const path = require('path')
const knexConfig = require('./knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/lookup/:name", async (req, res) => {
    let params = req.params.name
    try {
        console.log('fetching monster...');
        const monster = await db.select().table('monster');
        let result = monster.find((mon) => mon.name == params)
        res.json(result)
    } catch (err) {
        console.log("monster not found!", err)
        res.sendStatus(500);
    }
});

// app.listen(5000, () => console.log('database server running on port 5000'));

module.exports = app;