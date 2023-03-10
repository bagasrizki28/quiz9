import mariadb from "mariadb";

const pool = mariadb.createPool({

    host: "localhost",
    port: 3306,
    database: "integers",
    user: "root",
    password: ""

});

const conn = await pool.getConnection();

const result = await conn.query("SELECT * FROM mahasiswa");

console.log(result);