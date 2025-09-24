import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  },
});

export async function query<T = any>(q: string, values?: (string | number)[]): Promise<T[]> {
  try {
    const results = await db.query<T[]>(q, values);
    return results;
  } catch (e: any) {
    console.error("❌ DB Query Error:", e);
    throw new Error(e.message);
  } finally {
    await db.end(); // safe for serverless
  }
}

// Optional: test DB connection at startup
(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ Database connected successfully");
    await db.end();
  } catch (err: any) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

export default db;
