const express = require("express");
const router = express.Router();
const mahasiswaController = require('../controller/mahasiswaController');
const dbConn = require('../lib/db');

router.get('/mahasiswa', mahasiswaController.get);

router.get('/mahasiswa/create', function (req, res) {
    res.render('pages/create');
});
router.post('/mahasiswa/create', mahasiswaController.create);

router.get('/mahasiswa/edit/:id', async function (req, res) {
    const mahasiswaId = req.params.id;
    const [rows] = await dbConn.query('SELECT * FROM tb_mahasiswa WHERE id_mhs=?', [mahasiswaId]);
    res.render('pages/edit', {
        data: rows
    });
});
router.put('/mahasiswa/edit/:id', mahasiswaController.update);

router.delete('/mahasiswa/delete/:id', mahasiswaController.remove);

module.exports = router;