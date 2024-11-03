const { pool } = require("../config/connection");
const {
  allKategori,
  createKategori,
  deleteKategori,
  updateKategori,
} = require("../models/kategori_kelas");

const getKategoriKelas = async (req, res) => {
  try {
    const result = await allKategori();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createKategoriKelas = async (req, res) => {
  try {
    let result = await createKategori(req.body.nama);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateKategoriKelas = async (req, res) => {
  try {
    let result = await updateKategori(req.body.nama, req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteKategoriKelas = async (req, res) => {
  try {
    let result = await deleteKategori(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailKategoriKelas = (req, res) => {
  const sql = "SELECT * FROM kategori_kelas WHERE id = ? ";
  const values = [req.params.id];
  pool.execute(sql, values, (err, rows) => {
    if (err) {
      res.json({
        detail: err.message,
      });
    } else {
      res.json(rows);
    }
  });
};

module.exports = {
  getKategoriKelas,
  createKategoriKelas,
  updateKategoriKelas,
  deleteKategoriKelas,
  detailKategoriKelas,
};
