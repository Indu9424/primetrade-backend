const db = require('../config/db');

const User = {
  create: (username, email, password, role, callback) => {
    db.run(
      `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
      [username, email, password, role],
      callback
    );
  },

  findByEmail: (email, callback) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], callback);
  },

  findById: (id, callback) => {
    db.get(`SELECT * FROM users WHERE id = ?`, [id], callback);
  }
};

module.exports = User;
