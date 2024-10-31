import React from 'react';

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="mt-2 flex items-center justify-center">
          <div className="spinner-border text-blue-500" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
