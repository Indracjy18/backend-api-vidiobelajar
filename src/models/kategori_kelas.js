const { pool } = require("../config/connection");

const allKategori = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM kategori_kelas", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const updateKategori = (nama, id) => {
  const sql = "UPDATE kategori_kelas SET nama = ? WHERE id = ?";
  const values = [nama, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ nama });
      }
    });
  });
};

const deleteKategori = (id) => {
  const sql = "DELETE FROM kategori_kelas WHERE id = ?";
  const values = [id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(null);
      }
    });
  });
};

const createKategori = (nama) => {
  const sql = "INSERT INTO kategori_kelas (nama) VALUES (?)";
  const values = [nama];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ nama });
      }
    });
  });
};

module.exports = {
  allKategori,
  updateKategori,
  deleteKategori,
  createKategori,
};
