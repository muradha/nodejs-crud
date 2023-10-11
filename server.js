const dbConn = require('./lib/db');
const bodyParser = require("body-parser");
const express = require("express");
const siswaRouter = require('./routes/siswa');

let app = express();
const port = 8080;

app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(siswaRouter);

app.listen(port, () => {
    console.log("server berjalan di port " + port);
});