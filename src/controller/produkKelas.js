const { pool } = require("../config/connection");
const {
  allProduks,
  createProduks,
  deleteProduks,
  updateProduks,
} = require("../models/produk_kelas");

const getAllProduk = async (req, res) => {
  try {
    let result = await allProduks();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createProduk = async (req, res) => {
  try {
    let result = await createProduks(
      req.body.nama,
      req.body.deskripsi,
      req.body.tutor_id,
      req.body.kategori_id
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduk = async (req, res) => {
  try {
    let result = await updateProduks(
      req.body.nama,
      req.body.deskripsi,
      req.body.tutor_id,
      req.body.kategori_id,
      req.params.id
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduk = async (req, res) => {
  try {
    let result = await deleteProduks(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailProduk = (req, res) => {
  const sql = "SELECT * FROM produk_kelas WHERE id = ?";
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
  getAllProduk,
  createProduk,
  updateProduk,
  deleteProduk,
  detailProduk,
};
