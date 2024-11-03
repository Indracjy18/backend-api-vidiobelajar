const {
  allKelas,
  createKelas,
  updateKelas,
  detailKelas,
  deleteKelas,
} = require("../models/modelKelasSaya");

const getKelasSaya = async (req, res) => {
  try {
    let result = await allKelas(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createKelasSaya = async (req, res) => {
  try {
    let result = await createKelas(
      req.body.user_id,
      req.body.produk_kelas_id,
      req.body.tanggal_mulai
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateKelasSaya = async (req, res) => {
  try {
    let result = await updateKelas(
      req.body.user_id,
      req.body.produk_kelas_id,
      req.body.tanggal_mulai,
      req.params.id
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailKelasSaya = async (req, res) => {
  try {
    let result = await detailKelas(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteKelasSaya = async (req, res) => {
  try {
    let result = await deleteKelas(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getKelasSaya,
  createKelasSaya,
  updateKelasSaya,
  detailKelasSaya,
  deleteKelasSaya,
};
