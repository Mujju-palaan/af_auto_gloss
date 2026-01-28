"use client";
import Image from "next/image";

import { Container } from "./Container";
import backgroundImage from "@/public/bg/background-faqs.jpg";
import Link from "next/link";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import FaqsData from "@/data/FaqsData";
import Heading_desc from "@/components/Heading_desc";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-0 sm:py-4"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {FaqsData.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl  shadow-sm transition-shadow duration-300 hover:shadow-md
                bg-gradient-to-r from-purple-400  to-red-400"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  {openQuestion === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
