const { pool } = require("../config/connection");

const allTutors = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM tutor", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const createTutors = (nama) => {
  const sql = "INSERT INTO tutor (nama) VALUES (?)";
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

const updateTutors = (nama, id) => {
  const sql = "UPDATE tutor SET nama = ?, email = ? WHERE id = ?";
  const values = [nama, email, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ nama, email });
      }
    });
  });
};

const deleteTutors = (id) => {
  const sql = "DELETE FROM tutor WHERE id = ?";
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
const detailTutors = (id) => {
  const sql = "SELECT * FROM tutor WHERE id = ?";
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

module.exports = {
  allTutors,
  createTutors,
  updateTutors,
  deleteTutors,
  detailTutors,
};
