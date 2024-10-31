import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What personal data do we collect?',
    answer:
      'We collect data that you provide to us, such as your name, email address, and usage data from your interactions with our services.',
  },
  {
    question: 'How is my data used?',
    answer:
      'Your data is used to provide, maintain, and improve our services, as well as to communicate with you about important updates.',
  },
  {
    question: 'Can I delete my personal data?',
    answer:
      'Yes, you have the right to request the deletion of your personal data. Please contact our support team to assist you with this process.',
  },
  {
    question: 'Is my information shared with third parties?',
    answer:
      'We may share your information with service providers for analytics and support purposes, but only with your consent and in accordance with our privacy policy.',
  },
];

export const Support: React.FC = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null,
  );

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 px-5 py-10">
      <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-semibold text-gray-800">
          Support Center
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Find answers to the most common questions about our Privacy Policy
          below.
        </p>

        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-200 px-6 py-4 text-left font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-0"
              style={{ borderWidth: '1px' }} // Fixed border width to prevent resizing
            >
              <span>{item.question}</span>
              <span className="text-gray-500">
                {openQuestionIndex === index ? '-' : '+'}
              </span>
            </button>

            {openQuestionIndex === index && (
              <div className="rounded-b-lg border border-t-0 border-gray-300 bg-gray-50 px-6 py-4 text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Can't find what you're looking for? Contact our{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Support Team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
