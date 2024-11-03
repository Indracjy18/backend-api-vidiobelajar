const { pool } = require("../config/connection");

const allMaterials = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM material", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createMaterials = (modul_kelas_id, judul, tipe, konten, id) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO material (modul_kelas_id, judul, tipe, konten) VALUES (?, ?, ?, ?)";
    const values = [modul_kelas_id, judul, tipe, konten];
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ modul_kelas_id, judul, tipe, konten, id });
      }
    });
  });
};

const updateMaterials = (modul_kelas_id, judul, tipe, konten, id) => {
  const sql =
    "UPDATE material SET modul_kelas_id = ?, judul = ?, tipe = ?, konten = ? WHERE id = ?";
  const values = [modul_kelas_id, judul, tipe, konten, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ modul_kelas_id, judul, tipe, konten, id });
      }
    });
  });
};
const deleteMaterials = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM material WHERE id = ?";
    const values = [id];
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(null);
      }
    });
  });
};

const detailMaterials = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM material WHERE id = ?";
    const values = [id];
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows[0]);
      }
    });
  });
};

module.exports = {
  allMaterials,
  createMaterials,
  updateMaterials,
  updateMaterials,
  detailMaterials,
  deleteMaterials,
};
