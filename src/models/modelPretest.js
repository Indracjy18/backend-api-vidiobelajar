const { pool } = require("../config/connection");

const allPretest = () => {
  return new Promise((resolve, reject) => {
    pool.execute("SELECT * FROM pretest", (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve(rows);
      }
    });
  });
};

const updatePretest = (material_id, pertanyaan, id) => {
  const sql = "UPDATE pretest SET material_id = ?, pertanyaan = ? WHERE id = ?";
  const values = [material_id, pertanyaan, id];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ material_id, pertanyaan, id });
      }
    });
  });
};

const createPretest = (material_id, pertanyaan) => {
  const sql = "INSERT INTO pretest (material_id, pertanyaan) VALUES (?,?)";
  const values = [material_id, pertanyaan];
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, rows) => {
      if (err) {
        reject({ detail: err.message });
      } else {
        resolve({ material_id, pertanyaan });
      }
    });
  });
};

const deletePretest = (id) => {
  const sql = "DELETE FROM pretest WHERE id = ?";
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

const detailPretest = (id) => {
  const sql = "SELECT * FROM pretest WHERE id = ? ";
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
  allPretest,
  updatePretest,
  createPretest,
  deletePretest,
  detailPretest,
};
