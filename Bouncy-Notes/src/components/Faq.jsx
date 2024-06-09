import React, { useState } from "react";

const faqData = [
  {
    question: "1. How can I use Bouncy Notes?",
    answer:
      "Simply sign up for an account on Bouncy Notes, and you'll gain access to the platform. From there, you can start creating sticky notes, organizing them, and managing your task.",
  },
  {
    question: "2. Can I access Bouncy Notes on different devices?",
    answer:
      "Yes, Bouncy Notes is accessible on various devices, including desktops, laptops, tablets, and smartphones. Simply log in to your account from any compatible device to access your tasks.",
  },
  {
    question: "3. Is my data secure on Bouncy Notes?",
    answer:
      "Absolutely. Bouncy Notes takes data security seriously and employs industry-standard security measures to protect your information.",
  },
  {
    question: "4. How does the clustering feature work in Bouncy Notes?",
    answer:
      "The clustering feature in Bouncy Notes automatically groups your sticky notes based on criteria such as color, tag, priority, or keyword, making it easier to organize and manage your tasks.",
  },
  {
    question: "5. Is there a mobile app available for Bouncy Notes?",
    answer:
      "At the moment, Bouncy Notes is accessible through web browsers on mobile devices. However, stay tuned for any updates regarding a dedicated mobile app in the future.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="p-10 w-full">
        <div className="md:w-[50%] px-4 py-10">
          <h1 className="text-2xl md:text-5xl font-['DM Sans']">
            Why Bouncy Notes is a great tool for using online sticky notes
          </h1>
        </div>
        <div>
          {faqData.map((item, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 p-4 focus:outline-none"
              >
                {item.question}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700">
                  <p className="bg-white p-4 rounded-lg">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
