const { pool } = require("../config/connection");
const {
  allReview,
  createReview,
  updateReview,
  detailReview,
  deleteReview,
} = require("../models/modelReview");

const getAllReview = async (req, res) => {
  try {
    const result = await allReview();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createReviewKelas = async (req, res) => {
  try {
    let result = await createReview(
      req.body.user_id,
      req.body.produk_kelas_id,
      req.body.rating,
      req.body.komentar,
      req.body.tanggal_review
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateReviewKelas = async (req, res) => {
  try {
    let result = await updateReview(
      req.body.user_id,
      req.body.produk_kelas_id,
      req.body.rating,
      req.body.komentar,
      req.body.tanggal_review
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailReviewKelas = async (req, res) => {
  try {
    let result = await detailReview(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteReviewKelas = async (req, res) => {
  try {
    let result = await deleteReview(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllReview,
  createReviewKelas,
  updateReviewKelas,
  detailReviewKelas,
  deleteReviewKelas,
};
