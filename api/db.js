import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
    host: "db.aekdbzirudnmxzgatrkc.supabase.co",
    user: "postgres",
    password: "bagasrizky123",
    database: "postgres",
    port: 5432

});

await client.connect();
console.log(`Database berhasil dimuat.`);
// const result = await client.query("SELECT * FROM mahasiswa");
// console.log(result);