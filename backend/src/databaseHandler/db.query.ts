import pool from './db';

export function executeGetQuery(query: string, params: any[] = []): Promise<any> {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err); 
      }

      connection.query(query, params, (queryError, results) => {
        connection.release();

        if (queryError) {
          return reject(queryError);
        }

        if (results && results.length > 0) {
          resolve(results.length === 1 ? results[0] : results);
        } else {
          reject("NO_DATA")
          // This error currently crashes if thrown on createUser endpoint, WIP
        }
      });
    });
  });
}