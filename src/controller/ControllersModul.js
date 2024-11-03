const { pool } = require("../config/connection");
const {
  allModul,
  createModul,
  updateModul,
  deleteModul,
  detailModul,
} = require("../models/modul_kelas");

const getAllModul = async (req, res) => {
  try {
    let result = await allModul();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
const createModulKelas = async (req, res) => {
  try {
    let result = await createModul(
      req.body.produk_kelas_id,
      req.body.judul,
      req.body.urutan
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateModulKelas = async (req, res) => {
  try {
    let result = await updateModul(
      req.params.id,
      req.body.produk_kelas_id,
      req.body.judul,
      req.body.urutan
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteModulKelas = async (req, res) => {
  try {
    let result = await deleteModul(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailModulkelas = async (req, res) => {
  try {
    let result = await detailModul(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllModul,
  createModulKelas,
  updateModulKelas,
  deleteModulKelas,
  detailModulkelas,
};
