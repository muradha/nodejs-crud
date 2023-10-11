const siswaHandler = require("../handler/mahasiswaHandler");

const get = async (req, res) => {
    const data = await siswaHandler.getAllSiswa();

    res.json({
        message: "GET all mahasiswa BERHASIL",
        data: data
    });
}

const create = async (req, res) => {
    const data = await siswaHandler.createSiswa(req);

    res.json({
        message: "CREATE new mahasiswa BERHASIL",
        data: data
    });
}


module.exports = { get, create };