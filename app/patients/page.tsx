"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PatientsPage() {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPatients() {
      const res = await fetch("/api/patients"); // <- using products API
      const data = await res.json();
      setPatients(data);
    }
    fetchPatients();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>

        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.product_id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{p.product_id}</td>
                <td className="border border-gray-200 px-4 py-2">{p.title}</td>
                <td className="border border-gray-200 px-4 py-2">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title || "Product image"}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                  ) : (
                    <Image
                      src="/default-avatar.png" // fallback placeholder image
                      alt="No Image"
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                  )}
                </td>

                <td className="border border-gray-200 px-4 py-2">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
