import { query } from "@/lib/mysql";

interface Product { id: number; title: string; price: string; }

export const dynamic = "force-static";

export default async function ProductsPage() {
  const products = await query<Product[]>("SELECT id, title, price FROM products LIMIT 10");

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => <li key={p.id}>{p.title} — ${p.price}</li>)}
      </ul>
    </div>
  );
}
