const db = require('../config/db');

const Task = {
  create: (title, description, user_id, callback) => {
    db.run(
      `INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)`,
      [title, description, user_id],
      callback
    );
  },

  getAllByUser: (user_id, callback) => {
    db.all(`SELECT * FROM tasks WHERE user_id = ?`, [user_id], callback);
  },

  update: (id, title, description, callback) => {
    db.run(
      `UPDATE tasks SET title = ?, description = ? WHERE id = ?`,
      [title, description, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM tasks WHERE id = ?`, [id], callback);
  }
};

module.exports = Task;
