import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ChatMessage {
  type: string;
  message: string;
}

const ChatHistory: React.FC<{ chatHistory: ChatMessage[] }> = ({
  chatHistory,
}) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start rounded-lg px-4 py-2 ${
            message.type === 'user'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {message.type === 'user' && (
            <span className="mr-2 font-bold text-gray-600">You:</span>
          )}

          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
