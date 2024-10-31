export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-8xl font-bold text-red-500"> 404</h1>
      <h2 className="mt-4 text-3xl font-semibold"> Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        {' '}
        Sorry, the page you are looking for does not exist.
      </p>
      <button className="mt-8 rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
        {' '}
        Go Home
      </button>
    </div>
  );
};
