import express from "express";
import { Client } from "api/db.js";

const app = express();

app.use((req, res, next) => {
  if (req.url === "/bagas") {
    console.log("ada request masuk");
  } console.log(req.url);
  next();
});

app.get("/api/salam", (req, res) => {
  res.send("assalamualaikum");
});

app.get("/api/mahasiswa", async (req, res) => {
    const result = await Client.query("SELECT * FROM mahasiswa");
    res.send(result.rows);
  });

app.listen(3000, () => {
  console.log("Server telah berjalan");
});
