import pool from './db';

export function executeGetQuery(query: string, params: any[] = []): Promise<any> {

  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err); 
      }

      connection.query(query, params, (queryError, results) => {
        connection.release();
        console.log(typeof results);
        
        if (queryError) {
          return reject(queryError);
        }
        
        if (results && Object.keys(results).length > 0) {
          resolve(Object.keys(results).length === 1 ? results[0] : results);
        } else {
          resolve(results);
          reject("NO_DATA")
        }
      });
    });
  });
}