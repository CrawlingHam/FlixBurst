import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What personal data do we collect?',
    answer: 'We collect data that you provide to us, such as your name, email address, and usage data from your interactions with our services.',
  },
  {
    question: 'How is my data used?',
    answer: 'Your data is used to provide, maintain, and improve our services, as well as to communicate with you about important updates.',
  },
  {
    question: 'Can I delete my personal data?',
    answer: 'Yes, you have the right to request the deletion of your personal data. Please contact our support team to assist you with this process.',
  },
  {
    question: 'Is my information shared with third parties?',
    answer: 'We may share your information with service providers for analytics and support purposes, but only with your consent and in accordance with our privacy policy.',
  },
];

export const Support: React.FC = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Support Center</h1>
        <p className="text-center text-gray-600 mb-8">
          Find answers to the most common questions about our Privacy Policy below.
        </p>
        
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left font-medium text-gray-700 py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-between items-center border border-gray-300 focus:outline-none focus:ring-0"
              style={{ borderWidth: '1px' }} // Fixed border width to prevent resizing
            >
              <span>{item.question}</span>
              <span className="text-gray-500">{openQuestionIndex === index ? '-' : '+'}</span>
            </button>
            
            {openQuestionIndex === index && (
              <div className="px-6 py-4 bg-gray-50 rounded-b-lg text-gray-700 border border-t-0 border-gray-300">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}

        <div className="text-center mt-10">
          <p className="text-gray-600">
            Can't find what you're looking for? Contact our <a href="#" className="text-blue-500 hover:underline">Support Team</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
