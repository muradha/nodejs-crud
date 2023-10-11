const express = require("express");
const router = express.Router();
const mahasiswaController = require('../controller/mahasiswaController');

router.get('/mahasiswa', mahasiswaController.get);
router.post('/mahasiswa', mahasiswaController.create);
router.patch('/mahasiswa/:id', mahasiswaController.update);
router.delete('/mahasiswa/:id', mahasiswaController.remove);

module.exports = router;