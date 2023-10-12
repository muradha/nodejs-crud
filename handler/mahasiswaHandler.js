const {ResponseError} = require('../error/responseError');
const dbConn = require("../lib/db.js");

const getAllMahasiswa = async () => {
    const [rows, fields] = await dbConn.query('SELECT * FROM tb_mahasiswa');

    return rows;
}

const createMahasiswa = async (req, res) => {
    const { nim_mhs, nama_mhs, agama_mhs, jk_mhs, alamat_mhs } = req.body;

    const insertQuery = await dbConn.execute('INSERT INTO `tb_mahasiswa` (`nim_mhs`, `nama_mhs`, `agama_mhs`, `jk_mhs`, `alamat_mhs`) VALUES (?, ?, ?, ?, ?)', [nim_mhs, nama_mhs, agama_mhs, jk_mhs, alamat_mhs]);

    const [rows] = await dbConn.query('SELECT * FROM tb_mahasiswa WHERE id_mhs=?', insertQuery[0].insertId);

    return rows;
}

const updateMahasiswa = async (mahasiswaId, req, res) => {
    const { nim_mhs, nama_mhs, agama_mhs, jk_mhs, alamat_mhs } = req.body;

    const [rows] = await dbConn.query('SELECT * FROM tb_mahasiswa WHERE id_mhs=?', [mahasiswaId]);

    if(rows.length !== 1){
        throw new ResponseError(404, "Mahasiswa is not found");
    }

    const results = await dbConn.execute('UPDATE `tb_mahasiswa` SET `nim_mhs`=?, `nama_mhs`=?, `agama_mhs`=?, `jk_mhs`=?, `alamat_mhs`=? WHERE `id_mhs`=?', [nim_mhs, nama_mhs, agama_mhs, jk_mhs, alamat_mhs, mahasiswaId]);

    return results;
}

const deleteMahasiswa = async(mahasiswaId, req, res) => {

    const [rows] = await dbConn.query('SELECT * FROM tb_mahasiswa WHERE id_mhs=?', [mahasiswaId]);

    if(rows.length !== 1){
        throw new ResponseError(404, "Mahasiswa is not found");
    }

    const results = await dbConn.execute('DELETE FROM `tb_mahasiswa` WHERE `id_mhs`=?', [mahasiswaId]);

    return results;
}

module.exports = { getAllMahasiswa, createMahasiswa, updateMahasiswa, deleteMahasiswa };