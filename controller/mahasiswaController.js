const mahasiswaHandler = require("../handler/mahasiswaHandler");

const get = async (req, res) => {
    const data = await mahasiswaHandler.getAllMahasiswa();

    res.json({
        message: "GET all mahasiswa BERHASIL",
        data: data
    });
}

const create = async (req, res) => {
    const data = await mahasiswaHandler.createMahasiswa(req);

    res.json({
        message: "CREATE new mahasiswa BERHASIL",
        data: data
    });
}

const update = async (req, res) => {
    await mahasiswaHandler.updateMahasiswa(req);

    res.json({
        message: "UPDATE mahasiswa BERHASIL",
    });
}

module.exports = { get, create, update };