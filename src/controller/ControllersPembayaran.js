const {
  allPembayaran,
  createPembayaran,
  updatePembayaran,
  detailPembayaran,
  deletePembayaran,
} = require("../models/modelPembayaran");

const getAllPembayaran = async (req, res) => {
  try {
    let result = await allPembayaran();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
const createPembayaranKelas = async (req, res) => {
  try {
    const result = await createPembayaran(
      req.body.order_id,
      req.body.jumlah,
      req.body.tanggal_pembayaran,
      req.body.status
    );
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updatePembayaranKelas = async (req, res) => {
  try {
    const result = await updatePembayaran(
      req.body.order_id,
      req.body.jumlah,
      req.body.tanggal_pembayaran,
      req.body.status,
      req.params.id
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailPembayaranKelas = async (req, res) => {
  try {
    let result = await detailPembayaran(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePembayaranKelas = async (req, res) => {
  try {
    let result = await deletePembayaran(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllPembayaran,
  createPembayaranKelas,
  updatePembayaranKelas,
  detailPembayaranKelas,
  deletePembayaranKelas,
};
