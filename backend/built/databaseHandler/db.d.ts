import * as mysql from 'mysql';
declare const pool: mysql.Pool;
export default pool;
export declare const getConnection: () => Promise<mysql.PoolConnection>;
