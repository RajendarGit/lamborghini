'use client';

import * as React from 'react';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

type AccordionItem = {
  question: string;
  answer: string;
};

const data: AccordionItem[] = [
  {
    question: 'How fast do panels charge?',
    answer:
      'Solar panels charge batteries at varying speeds, primarily depending on sunlight conditions, panel wattage, and battery capacity. A typical 100W panel might take 8–10 hours of direct sunlight to charge a 100Ah battery from 50% capacity.',
  },
  {
    question: 'What can I run with 500W vs 2000W?',
    answer: '500W can power small devices like lights or a laptop. 2000W can run larger appliances like a microwave or fridge.',
  },
  {
    question: 'Are there subsidies or tax benefits',
    answer: 'Yes, many regions offer tax credits or subsidies. Check your local government website for specific programs.',
  },
];

const FeaturesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-3xl border border-gray-200 shadow-sm transition-colors duration-300 mb-4 py-5 ${
              isOpen ? 'bg-gray-200' : 'bg-white'
            }`}
          >
            <button
              className="w-full flex justify-between items-center text-left px-6 py-5"
              onClick={() => toggle(index)}
            >
              <span className="font-semibold text-lg text-gray-900">{item.question}</span>
              <span className="ml-4 text-gray-600">
                {isOpen ? <MinusIcon width={20} height={20} /> : <PlusIcon width={20} height={20} />}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed text-base">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesAccordion;