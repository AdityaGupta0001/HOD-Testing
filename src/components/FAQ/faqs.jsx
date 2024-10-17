import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "When are the hackathon dates?",
    answer: "Our hackathon is scheduled for October 28-29, 2024. Mark your calendars!"
  },
  {
    question: "What is the duration of the hackathon?",
    answer: "The hackathon will run for 24 hours, starting at 12 PM on Monday and ending at 12 PM on Tuesday."
  },
  {
    question: "What tracks are available for participants?",
    answer: "We have four exciting tracks: Healthcare, EdTech, Natural Language Processing, and Open CV. Choose the one that interests you most!"
  },
  {
    question: "Who can participate in the hackathon?",
    answer: "Our hackathon is open to students of all skill levels enrolled in any college. Whether you're a beginner or an expert, you're welcome to join!"
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation in our hackathon is completely free of charge."
  },
  {
    question: "Will there be prizes for the winners?",
    answer: "Yes! We have a prize pool of ₹30000 for the top three teams, along with some interesting stuff for others!"
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-orange-500">
      <button
        className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none focus:bg-orange-900 transition-colors duration-200"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span style={{ fontFamily: "Hitmarker, sans-serif" }} className="text-white text-3lg sm:text-base pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-orange-500 flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-orange-500 flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div style={{ fontFamily: "Hitmarker, sans-serif" }} className="px-4 pb-4 text-orange-200 text-md sm:text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 style={{ fontFamily: "Black Ops One, sans-serif" }} className="text-4xl sm:text-5xl text-orange-500 mb-6 sm:mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="border-t border-orange-500">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;