import React from 'react';
import { Home, RefreshCw } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Animated 404 Text */}
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-pink-600 
            animate-pulse">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
            Oops! Page Not Found
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            The page you're looking for seems to have wandered off into the digital wilderness.
          </p>
        </div>

        {/* Illustration Placeholder */}
        <div className="flex justify-center my-8">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 
            dark:from-purple-800 dark:to-pink-800 
            rounded-full animate-bounce 
            flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 200 200" 
              className="w-48 h-48 text-purple-600 dark:text-purple-200"
            >
              <path 
                fill="currentColor" 
                d="M100 20c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zm-20-90h40v40h-40z"
              />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleGoHome}
            className="flex items-center space-x-2 
            bg-purple-600 text-white px-6 py-3 rounded-lg 
            hover:bg-purple-700 transition-colors 
            dark:bg-purple-800 dark:hover:bg-purple-700"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </button>
          <button 
            onClick={handleRefresh}
            className="flex items-center space-x-2 
            bg-gray-200 text-gray-800 px-6 py-3 rounded-lg 
            hover:bg-gray-300 transition-colors 
            dark:bg-gray-700 dark:text-gray-200 
            dark:hover:bg-gray-600"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Refresh</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;