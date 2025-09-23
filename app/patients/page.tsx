"use client"; // since we’ll fetch from API inside component

import { useEffect, useState } from "react";

export default function PatientsPage() {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPatients() {
      const res = await fetch("/api/patients");
      const data = await res.json();
      setPatients(data);
      console.log(data);
    }
    fetchPatients();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Patients</h1>

        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Age</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.patient_id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{p.first_name}</td>
                <td className="border border-gray-200 px-4 py-2">{p.last_name}</td>
                <td className="border border-gray-200 px-4 py-2">{p.date_of_birth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
