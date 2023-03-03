import express from "express";

const app = express();

// Middleware

app.use((req, res, next) => {
    console.log("ada request masuk");
    // console.log(req.url);
    next();

});

// Route
app.get("/path", (req, res) => {
  res.send("assalamu'alaikum");
});

app.listen(3000, () => {
  console.log("Server sedang berjalan");
});
