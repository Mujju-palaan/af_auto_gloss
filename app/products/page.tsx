import { GetStaticProps } from "next";
import { query } from "@/lib/mysql";

interface Product {
  id: number;
  title: string;
  price: string;
}

interface ProductsPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
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

// Runs only once, at build time
export const getStaticProps: GetStaticProps = async () => {
  const products = await query<Product[]>(
    "SELECT id, title, price FROM products LIMIT 10"
  );

  return {
    props: {
      products,
    },
  };
};
