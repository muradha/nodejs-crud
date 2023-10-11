const express = require("express");
const mahasiswaRouter = require('./routes/mahasiswa');
const { errorMiddleware } = require("./middleware/errorMiddleware");

let app = express();
const port = 8080;

app.use(express.json());

app.use(mahasiswaRouter);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log("server berjalan di port " + port);
});