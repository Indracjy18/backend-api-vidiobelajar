const { pool } = require("../config/connection");
const allOrder = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM `order`", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createOrder = (user_id, produk_kelas_id, tanggal_order, status) => {
  const sql =
    "INSERT INTO `order` (user_id,produk_kelas_id,tanggal_order,status) VALUES (?,?,?,?)";
  const values = [user_id, produk_kelas_id, tanggal_order, status];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ user_id, produk_kelas_id, tanggal_order, status });
      }
    });
  });
};

const updateOrder = (id, user_id, produk_kelas_id, tanggal_order, status) => {
  const sql =
    "Update `order` SET user_id = ?, produk_kelas_id = ?, tanggal_order = ?, status = ? WHERE id = ?";
  const values = [user_id, produk_kelas_id, tanggal_order, status, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ user_id, produk_kelas_id, tanggal_order, status, id });
      }
    });
  });
};

const deleteOrder = (id) => {
  const sql = "DELETE FROM `order` WHERE id = ?";
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

const detailOrder = (id) => {
  const sql = "SELECT * FROM `order` WHERE id = ?";
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
module.exports = {
  allOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  detailOrder,
};
