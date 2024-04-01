import React, { useState } from 'react';
import faq from '../../assets/Feb-Business_9.jpg';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I book a vaccination slot?',
      answer: 'You can book a vaccination slot by visiting the official vaccination portal or by using the Aarogya Setu app.',
    },
    {
      question: 'Are walk-in vaccinations available?',
      answer: 'Yes, walk-in vaccinations are available at certain centers. Please check with your local health authorities for more information.',
    },
    {
      question: 'What documents do I need to carry for vaccination?',
      answer: 'You typically need to carry your Aadhaar card or any other government-issued ID proof for vaccination.',
    },
  ];

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 flex flex-col md:flex-row">
      <div className="md:w-1/3 p-4">
        <img src={faq} alt="Related Image" className="w-full h-auto" />
      </div>
      <div className="md:w-2/3 p-4">
        <h1 className="text-2xl font-bold mb-4">FAQ</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full py-2 px-4 bg-gray-200 text-left rounded-lg focus:outline-none"
              onClick={() => handleClick(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="mt-2 p-2 bg-gray-100">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
