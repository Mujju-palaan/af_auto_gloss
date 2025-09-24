import { query } from "@/lib/mysql";

interface Product {
  id: number;
  title: string;
  price: string;
}

export default async function ProductsPage() {
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

// ✅ Force static generation
export const dynamic = "force-static";
