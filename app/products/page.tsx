import { query } from "@/lib/mysql";

interface Product {
  id: number;
  title: string;
  price: string;
}

export const revalidate = 60; 
// ISR: page rebuilds every 60s (serverless-friendly)

export default async function ProductsPage() {
  const products = await query<Product[]>(
    "SELECT id, title, price FROM products LIMIT 10"
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="p-3 border rounded-lg shadow-sm">
            <span className="font-semibold">{p.title}</span> — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
