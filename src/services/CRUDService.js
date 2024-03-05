const connection = require("../config/database");

const getAllUser = async () => {
  const [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const addUser = async (email, name, city) => {
  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  return results;
};

const getUserId = async (userId) => {
  const [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id = ?`,
    [userId]
  );
  const user = results && results.length > 0 ? results[0] : {};
  return user;
};

const editUser = async (email, userId) => {
  const [results, fields] = await connection.query(
    `UPDATE Users SET email = ? WHERE id = ? `,
    [email, userId]
  );
  return results;
};

const deleteUser = async (userId) => {
  const [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [userId]
  );
  const user = results && results.length > 0 ? results[0] : {};
  return user;
};

module.exports = { getAllUser, getUserId, deleteUser, editUser, addUser };
