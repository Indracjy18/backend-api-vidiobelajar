const { pool } = require("../config/connection");

const allReview = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM review", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createReview = (
  user_id,
  produk_kelas,
  rating,
  komentar,
  tanggal_review
) => {
  const sql =
    "INSERT INTO review (user_id,produk_kelas,rating,komentar,tanggal_review) VALUES (?,?,?,?,?)";
  const values = [user_id, produk_kelas, rating, komentar, tanggal_review];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ user_id, produk_kelas, rating, komentar, tanggal_review });
      }
    });
  });
};

const updateReview = (
  user_id,
  produk_kelas,
  rating,
  komentar,
  tanggal_review
) => {
  const sql =
    "UPDATE review SET user_id = ?, produk_kelas = ?, rating = ?, komentar = ?, tanggal_review = ? WHERE id = ?";
  const values = [user_id, produk_kelas, rating, komentar, tanggal_review];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ user_id, produk_kelas, rating, komentar, tanggal_review });
      }
    });
  });
};

const detailReview = (id) => {
  const sql = "SELECT * FROM review WHERE id = ?";
  const values = [id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const deleteReview = (id) => {
  const sql = "DELETE FROM review WHERE id = ?";
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
  allReview,
  createReview,
  updateReview,
  deleteReview,
  detailReview,
};
