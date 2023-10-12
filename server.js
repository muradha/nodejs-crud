const express = require("express");
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mahasiswaRouter = require('./routes/mahasiswa');
const { errorMiddleware } = require("./middleware/errorMiddleware");

let app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));
app.use(express.json());

app.use(mahasiswaRouter);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log("server berjalan di port " + port);
});