const pool = require("../config/connection");

const {
  allMaterials,
  createMaterials,
  updateMaterials,
  deleteMaterials,
  detailMaterials,
} = require("../models/material");

const getAllMaterial = async (req, res) => {
  try {
    let result = await allMaterials();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createMaterial = async (req, res) => {
  try {
    let result = await createMaterials(
      req.body.modul_kelas_id,
      req.body.judul,
      req.body.tipe,
      req.body.konten,
      req.params.id
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateMaterial = async (req, res) => {
  try {
    let result = await updateMaterials(
      req.body.modul_kelas_id,
      req.body.judul,
      req.body.tipe,
      req.body.konten,
      req.params.id
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteMaterial = async (req, res) => {
  try {
    let result = await deleteMaterials(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailMaterial = async (req, res) => {
  try {
    let result = await detailMaterials(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  detailMaterial,
};
