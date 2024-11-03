const { pool } = require("../config/connection");

const allModul = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM modul_kelas", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createModul = (produk_kelas_id, judul, urutan) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO modul_kelas (produk_kelas_id, judul, urutan) VALUES (?, ?, ?)";
    const values = [produk_kelas_id, judul, urutan];
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ produk_kelas_id, judul, urutan });
      }
    });
  });
};

const updateModul = (id, produk_kelas_id, judul, urutan) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE modul_kelas SET produk_kelas_id = ?, judul = ?, urutan = ? WHERE id = ?";
    const values = [produk_kelas_id, judul, urutan, id]; // id dipindahkan ke akhir
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ id, produk_kelas_id, judul, urutan });
      }
    });
  });
};

const deleteModul = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM modul_kelas WHERE id = ?";
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

const detailModul = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM modul_kelas WHERE id = ?";
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
  allModul,
  createModul,
  updateModul,
  deleteModul,
  detailModul,
};
