'use client'
import Image from 'next/image'

import { Container } from './Container'
import backgroundImage from '@/public/bg/background-faqs.jpg'
import Link from 'next/link';
import {useState} from 'react';
import {ChevronUpIcon, ChevronDownIcon} from 'lucide-react';
import FaqsData from '@/data/FaqsData'

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((openQuestion === index) ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-title"
            className="mb-6 text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-center text-xl tracking-tight text-slate-700">
            If you can’t find what you’re looking for, please open an issue on our{' '}
            <a
              href="https://github.com/responsively-org/responsively-app"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
            .
          </p>
          <div className="space-y-6">
            {FaqsData.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
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
}

export default Faq