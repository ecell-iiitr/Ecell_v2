const { query } = require('express');
const {Pool} = require('pg');
const pool = new Pool({
    connectionString: "",
    
});

module.exports = {
    query: (text, params) => pool.query(text, params),

};

