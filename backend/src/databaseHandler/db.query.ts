import pool from './db';

export function executeGETQuery(query: string, params: any[] = []): Promise<any> {

  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => { //getConnection from db.ts to connect to database
      if (err) {
        return reject(err); 
      }

      connection.query(query, params, (queryError, results) => { //connecting, with query as param, params are sent with ?, results are answer from DB
        connection.release(); //Release connection after query

        if (queryError) {
          return reject(queryError); //If queryerror, reject
        }
        
        if (query.trim().toLowerCase().startsWith("insert")) { // Bad solution? Need to discuss
          console.log("Insert statement");
          resolve({ success: true, affectedRows: results.affectedRows });
        }
        else if (results && results.length > 0) { //check for length, if more than 0, db returned data, resolve
          resolve(results.length === 1 ? results[0] : results); //if 
        } 
        else {
          resolve(results);
        }
      });
    });
  });
}

//Could be useful to look at RowDataPacket or OkPacket instead, RowDataPacket if data, OKpacket if insert... 