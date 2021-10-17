const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "saak2108",
    host: "localhost",
    port: "5432",
    database: "jewelry_angular"
});

module.exports = pool;