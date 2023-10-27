import { Pool } from 'mysql';
import pool from './db';

// Function to execute a database query
export function executeQuery(query: string, params: any[] = []): Promise<any> {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(query, params, (queryError, results) => {
          connection.release();
          if (queryError) {
            reject(queryError);
          } else {
            if (results.length === 1) {
              // If you expect a single row, return the first element of the results array
              resolve(results[0]);
            } else {
              // If you expect multiple rows, you can return the entire results array
              resolve(results);
            }
          }
        });
      }
    });
  });
}
