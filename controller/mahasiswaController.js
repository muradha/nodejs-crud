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

const update = async (req, res, next) => {
    try {
        const mahasiswaId = req.params.id;
        await mahasiswaHandler.updateMahasiswa(mahasiswaId, req);

        res.json({
            message: "UPDATE mahasiswa BERHASIL",
        });
    } catch (error) {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const mahasiswaId = req.params.id;
        await mahasiswaHandler.deleteMahasiswa(mahasiswaId, req);

        res.json({
            message: "DELETE mahasiswa BERHASIL"
        });
    } catch (error) {
        next(error);
    }
}

module.exports = { get, create, update, remove };