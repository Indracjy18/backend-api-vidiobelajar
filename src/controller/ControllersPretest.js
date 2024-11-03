const { pool } = require("../config/connection");
const {
  allPretest,
  updatePretest,
  createPretest,
  deletePretest,
  detailPretest,
} = require("../models/modelPretest");

const getAllPretest = async (req, res) => {
  try {
    const result = await allPretest();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updatePretestKelas = async (req, res) => {
  try {
    let result = await updatePretest(
      req.body.material_id,
      req.body.pertanyaan,
      req.params.id
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createPretestKelas = async (req, res) => {
  try {
    const result = await createPretest(
      req.body.material_id,
      req.body.pertanyaan
    );
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePretestKelas = async (req, res) => {
  try {
    let result = await deletePretest(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailPretestKelas = async (req, res) => {
  try {
    let result = await detailPretest(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllPretest,
  updatePretestKelas,
  createPretestKelas,
  deletePretestKelas,
  detailPretestKelas,
};
