const express = require ('express');
const app = express();
const path = require('path')
const knexConfig = require('./knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

app.use(express.static(path.resolve(__dirname, "..", "dist")));

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

app.get("/lookup", async (req, res) => {
    try {
        console.log('loading...');
        const monsterList = await db.select().table('monster');
        let result = monsterList.map((mon) => mon.name)
        res.json(result)
    } catch (err) {
        console.log('error loading database', err)
        res.sendStatus(500)
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
  });
// app.listen(5000, () => console.log('database server running on port 5000'));

module.exports = app;