const dbConn = require("../lib/db.js");

const getAllMahasiswa = async () => {
    const [rows, fields] = await dbConn.query('SELECT * FROM tb_mahasiswa');

    return rows;
}

const createMahasiswa = async (req, res) => {
    const { nim, nama, agama, jenis_kelamin, alamat } = req.body;

    const insertQuery = await dbConn.execute('INSERT INTO `tb_mahasiswa` (`nim_mhs`, `nama_mhs`, `agama_mhs`, `jk_mhs`, `alamat_mhs`) VALUES (?, ?, ?, ?, ?)', [nim, nama, agama, jenis_kelamin, alamat]);

    const [rows] = await dbConn.query('SELECT * FROM tb_mahasiswa WHERE id_mhs=?', insertQuery[0].insertId);

    return rows;
}

const updateMahasiswa = async (req, res) => {
    const { nim, nama, agama, jenis_kelamin, alamat } = req.body;
    const { id } = req.params;

    const results = await dbConn.execute('UPDATE `tb_mahasiswa` SET `nim_mhs`=?, `nama_mhs`=?, `agama_mhs`=?, `jk_mhs`=?, `alamat_mhs`=? WHERE  `id_mhs`=?', [nim, nama, agama, jenis_kelamin, alamat, id]);

    return results;
}

module.exports = { getAllMahasiswa, createMahasiswa, updateMahasiswa };