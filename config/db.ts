import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host:"localhost",
    user:'root',
    password:'password',
    database:'hospital',
    waitForConnections: true,
    connectionLimit: 10,   // optional: pool size
    queueLimit: 0,
});

try {
    const connection = await db.getConnection();
    console.log('Database connected successfully');
    connection.release();   //important to release back pool
} catch (err: any) {
    console.error("❌ Database connection failed", err.message);
    process.exit(1);    //optional: stop server id DB is essential
}