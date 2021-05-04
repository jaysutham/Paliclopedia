// Update with your config settings.

const { parse } = require('pg-connection-string')

let pgconfig;

if(process.env.DATABASE_URL){
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

let localconfig = {
  database:'paliclopedia',
  user:'postgres', 
  password:'postgres'
}

module.exports = {
  development: {
    client: 'pg',
    connection: pgconfig || localconfig,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations/`
    },
    seeds: {
      directory: `${__dirname}/seeds/`
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  pgconfig

};
