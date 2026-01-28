"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage({ PolicyData }) {
  const [active, setActive] = useState("about-us");

  /* -------- Scroll Spy -------- */
  useEffect(() => {
    const handler = () => {
      let current = PolicyData[0]?.id;

      PolicyData.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;
        if (top <= 140) current = section.id;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handler);
    handler(); // initial sync

    return () => window.removeEventListener("scroll", handler);
  }, [PolicyData]);

  /* -------- Smooth Scroll -------- */
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -120; // match your scroll spy threshold
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[25%_70%] gap-6">
        {/* ================= Sidebar ================= */}
        <aside
          className="md:sticky md:top-35 h-fit flex flex-col md:justify-center md:items-center
        md:pl-0 pl-4"
        >
          {/* <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Privacy Policy
          </h2> */}

          <ul className="space-y-3 border-l pl-4 relative">
            {PolicyData.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`block text-left text-sm w-full transition-colors cursor-pointer ${
                    active === item.id
                      ? "text-red-600 font-medium"
                      : "text-stone-600 hover:text-red-400"
                  }`}
                >
                  {item.title}
                </button>

                {/* Active Indicator */}
                {active === item.id && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute -left-[17px] top-1 h-4 w-1 rounded-full bg-red-600"
                  />
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* ================= Content + Animation ================= */}
        <section className="md:pr-35 p-4 flex flex-col gap-10">
          {PolicyData.map((data) => (
            <motion.div
              key={data.id}
              id={data.id}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-gray-600">{data.info}</h1>
              <h3 className="md:text-2xl text-xl font-semibold mb-4 text-red-600">
                {data.title}
              </h3>

              {/* If description exists */}
              {/* {data.desc && (
                <p className="text-gray-500 leading-relaxed md:text-base text-sm mb-4">
                  {data.desc}
                </p>
              )} */}

              {/* If points is a STRING */}
              {typeof data.points === "string" && (
                <p className="text-red-600 leading-relaxed md:text-base text-sm">
                  {data.points}
                </p>
              )}

              {/* If points is an ARRAY */}
              {Array.isArray(data.points) && data.points.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                  {data.points.map((li, i) => (
                    <li key={i} className="leading-relaxed">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}