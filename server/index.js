require('dotenv').config();
const app = require('./server');
const db = require('./knex');

const PORT = process.env.PORT || 5000;

(async () => {
    try {
        console.log('Running migrations....');
        await db.migrate.latest();
        console.log('Seeding database...');
        await db.seed.run();

        console.log('Starting express...');
        app.listen(PORT, () => console.log(`database server running on port${PORT}`));
    } catch (err) {
        console.error('Error starting app!', err);
    }
})();