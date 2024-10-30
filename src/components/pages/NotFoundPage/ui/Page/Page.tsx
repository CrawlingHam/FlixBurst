export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-8xl font-bold text-red-500"> 404</h1>
      <h2 className="text-3xl font-semibold mt-4"> Page Not Found</h2>
      <p className="mt-2 text-gray-600"> Sorry, the page you are looking for does not exist.</p>
      <button className="mt-8 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"> Go Home
      </button>
    </div>
  );
};
