import * as mysql from 'mysql';

// Define your database connection details
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'vaskinde marknad',
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Export the connection pool
export default pool;

// Optionally, you can export a getConnection function if needed
export const getConnection = () => {
  return new Promise<mysql.PoolConnection>((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};
