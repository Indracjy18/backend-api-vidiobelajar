const { pool } = require("../config/connection");

const allProduks = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM produk_kelas", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createProduks = (nama, deskripsi, tutor_id, kategori_id) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO produk_kelas (nama,deskripsi,tutor_id,kategori_id) VALUES (?,?,?,?)";
    const values = [nama, deskripsi, tutor_id, kategori_id];
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ nama, deskripsi, tutor_id, kategori_id });
      }
    });
  });
};

const updateProduks = (nama, deskripsi, tutor_id, kategori_id, id) => {
  const sql =
    "UPDATE produk_kelas SET nama = ?, deskripsi = ?, tutor_id = ?, kategori_id = ? WHERE id = ?";
  const values = [nama, deskripsi, tutor_id, kategori_id, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ id, nama, deskripsi, tutor_id, kategori_id });
      }
    });
  });
};

const deleteProduks = (id) => {
  const sql = "DELETE FROM produk_kelas WHERE id = ?";
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

module.exports = {
  allProduks,
  createProduks,
  updateProduks,
  deleteProduks,
};
