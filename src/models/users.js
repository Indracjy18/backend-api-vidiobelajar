const { pool } = require("../config/connection");

const allUser = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM user", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const updateUser = (username, email, fullname, password, id) => {
  const sql =
    "UPDATE user SET username = ?, email = ?,fullname =?,password = ? WHERE id = ?";
  const values = [username, email, fullname, password, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ username, email });
      }
    });
  });
};

const deleteUser = (id) => {
  const sql = "DELETE FROM user WHERE id = ?";
  const values = [id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({
          detail: err.message,
        });
      } else {
        resolve(null);
      }
    });
  });
};

const createUser = (username, email, fullname, password) => {
  const sql =
    "INSERT INTO user (username, email,fullname, password) VALUES (?, ?,?,?)";
  const values = [username, email, fullname, password];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({
          message: "connection error",
          error: err.message,
        });
      } else {
        resolve({ username, email, fullname, password });
      }
    });
  });
};

// Fungsi untuk mencari user berdasarkan email (untuk login)
const findUserByEmail = (email) => {
  const sql = "SELECT * FROM user WHERE email = ?";
  return new Promise((resolve, reject) => {
    pool.execute(sql, [email], (err, rows) => {
      if (err) reject({ detail: err.message });
      else resolve(rows[0]); // Hanya mengembalikan satu user
    });
  });
};
// Fungsi untuk membuat user baru dengan token verifikasi
const createUserWithToken = (username, email, fullname, password, token) => {
  const sql =
    "INSERT INTO user (username, email, fullname, password, token) VALUES (?, ?, ?, ?, ?)";
  const values = [username, email, fullname, password, token];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) reject({ detail: err.message });
      else resolve({ username, email, fullname });
    });
  });
};
const verifyUserToken = (token) => {
  const sql = "UPDATE user SET verified = 1 WHERE token = ?";
  return new Promise((resolve, reject) => {
    pool.execute(sql, [token], (err, rows) => {
      if (err) reject({ detail: err.message });
      else resolve(rows.affectedRows > 0); // Kembalikan true jika ada baris yang diperbarui
    });
  });
};
module.exports = {
  allUser,
  updateUser,
  deleteUser,
  createUser,
  findUserByEmail,
  createUserWithToken,
  verifyUserToken,
};
