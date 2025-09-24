"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCheckCircle, FaFlag, FaStar } from "react-icons/fa";

interface RoadmapItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string; // color of the dot and icon background
}

const roadmapData: RoadmapItem[] = [
  {
    date: "12/02/2025",
    title: "Kickoff",
    description:
      "Project kickoff and team alignment. Define objectives and initial scope.",
    icon: <FaRocket className="text-white w-4 h-4" />,
    color: "bg-blue-600",
  },
  {
    date: "05/03/2025",
    title: "First Milestone",
    description:
      "Complete initial development phase and deliver MVP for internal testing.",
    icon: <FaCheckCircle className="text-white w-4 h-4" />,
    color: "bg-green-500",
  },
  {
    date: "24/04/2025",
    title: "Launch",
    description:
      "Official launch of the product with marketing campaigns and announcements.",
    icon: <FaFlag className="text-white w-4 h-4" />,
    color: "bg-red-500",
  },
  {
    date: "10/05/2025",
    title: "Post-Launch Review",
    description:
      "Analyze user feedback, metrics, and iterate for the next phase improvements.",
    icon: <FaStar className="text-white w-4 h-4" />,
    color: "bg-yellow-500",
  },
];

const Roadmapp = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-24 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
        Product Roadmap
      </h2>

      <ol className="relative mx-auto w-full max-w-6xl space-y-20">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>

        {roadmapData.map((item, index) => {
          const isLeft = index % 2 === 0; // alternate sides

          return (
            <motion.li
              key={index}
              className={`relative flex items-start md:items-center justify-${isLeft ? "start" : "end"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content box */}
              <div
                className={`w-full md:w-5/12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all ${
                  isLeft ? "text-right pr-10 md:mr-10" : "text-left pl-10 md:ml-10"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${item.color}`}>
                    {item.icon}
                  </div>
                  <time className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                    {item.date}
                  </time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>

              {/* Timeline Dot */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full ${item.color} ring-4 ring-white dark:ring-gray-900 z-10 shadow-lg`}></div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};

export default Roadmapp;
