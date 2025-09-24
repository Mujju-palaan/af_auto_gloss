import { query } from "@/lib/mysql";

interface Product {
  id: number;
  title: string;
  price: string;
}

export default async function ProductsPage() {
  // ✅ Runs on the server at build-time (SSG) or request-time (SSR),
  // depending on how you configure `revalidate`.
  const products = await query<Product[]>(
    "SELECT id, title, price FROM products LIMIT 10"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Enable ISR (Incremental Static Regeneration)
// Page is statically generated and revalidated every 60s.
export const revalidate = 60;
