const { pool } = require("../config/connection");

const allPembayaran = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM `pembayaran`", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createPembayaran = (order_id, jumlah, tanggal_pembayaran, status) => {
  const sql =
    "INSERT INTO pembayaran (order_id,jumlah,tanggal_pembayaran,status) VALUES (?,?,?,?)";
  const values = [order_id, jumlah, tanggal_pembayaran, status];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ order_id, jumlah, tanggal_pembayaran, status });
      }
    });
  });
};

const updatePembayaran = (order_id, jumlah, tanggal_pembayaran, status, id) => {
  const sql =
    "UPDATE pembayaran SET order_id = ?, jumlah = ?, tanggal_pembayaran = ?, status = ? WHERE id = ?";
  const values = [order_id, jumlah, tanggal_pembayaran, status, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ order_id, jumlah, tanggal_pembayaran, status, id });
      }
    });
  });
};

const detailPembayaran = (id) => {
  const sql = "SELECT * FROM pembayaran WHERE id = ?";
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
const deletePembayaran = (id) => {
  const sql = "DELETE FROM pembayaran WHERE id = ?";
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
  allPembayaran,
  createPembayaran,
  updatePembayaran,
  detailPembayaran,
  deletePembayaran,
};
