const { pool } = require("../config/connection");

const allKelas = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM kelas_saya", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createKelas = (user_id, produk_kelas_id, tanggal_mulai) => {
  const sql =
    "INSERT INTO kelas_saya (user_id,produk_kelas_id,tanggal_mulai) VALUES (?,?,?)";
  const values = [user_id, produk_kelas_id, tanggal_mulai];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ user_id, produk_kelas_id, tanggal_mulai });
      }
    });
  });
};

const updateKelas = (user_id, produk_kelas_id, tanggal_mulai, id) => {
  const sql =
    "UPDATE kelas_saya SET user_id = ?, produk_kelas_id = ?, tanggal_mulai = ? WHERE id = ?;";
  const values = [user_id, produk_kelas_id, tanggal_mulai, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ user_id, produk_kelas_id, tanggal_mulai, id });
      }
    });
  });
};

const detailKelas = (id) => {
  const sql = "SELECT * FROM kelas_saya WHERE id = ?;";
  const values = [id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows[0]);
      }
    });
  });
};

const deleteKelas = (id) => {
  const sql = "DELETE FROM kelas_saya WHERE id = ?;";
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
  allKelas,
  createKelas,
  updateKelas,
  detailKelas,
  deleteKelas,
};
