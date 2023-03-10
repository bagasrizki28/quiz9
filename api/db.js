import pkg from "pg";

const { Client } = pkg;

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "bagas123",
    database: "integer",
    port: 5432

});

await client.connect();
console.log(`Database berhasil dimuat.`);
// const result = await client.query("SELECT * FROM mahasiswa");
// console.log(result);