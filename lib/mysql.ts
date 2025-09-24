import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
});

export async function query<T = any>(q: string, values: any[] = []): Promise<T> {
  try {
    const results = await db.query<T>(q, values);
    console.log("✅ Database connected and query executed successfully");
    await db.end(); // close connection after each query (important in serverless)
    return results;
  } catch (err) {
    console.error("❌ Database connection/query failed:", err);
    throw err;
  }
}
