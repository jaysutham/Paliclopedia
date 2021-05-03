const express = require ('express');
const app = express();
app.use(express.json());
const router = require('./routes');
app.use(router)




app.listen(5000, () => console.log('database server running on port 5000'));