const { pool } = require("../config/connection");

const {
  allTutors,
  createTutors,
  deleteTutors,
  updateTutors,
} = require("../models/tutor");

const getAllTutor = async (req, res) => {
  try {
    let result = await allTutors();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTutor = async (req, res) => {
  try {
    let result = await createTutors(req.body.nama);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTutor = async (req, res) => {
  try {
    let result = await updateTutors(req.body.nama, req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTutor = async (req, res) => {
  try {
    let result = await deleteTutors(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailTutor = (req, res) => {
  const sql = "SELECT * FROM tutor WHERE id = ?";
  const values = [req.params.id];
  pool.execute(sql, values, (err, rows) => {
    if (err) {
      res.json({
        detail: err.message,
      });
    } else {
      res.json(rows[0]);
    }
  });
};

module.exports = {
  getAllTutor,
  createTutor,
  updateTutor,
  detailTutor,
  deleteTutor,
};
