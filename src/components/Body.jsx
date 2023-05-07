import React from 'react';

const Body = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto py-12 lg:py-24">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="border-2 border-gray-300 rounded-md shadow-md">
            <img src="https://via.placeholder.com/500x500" alt="Project 1" className="w-full rounded-t-md" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Project 1</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate erat in ultrices suscipit. Vivamus iaculis venenatis enim, sit amet pretium leo lacinia vel. Ut et mauris non lorem sagittis egestas eget id arcu.</p>
              <a href="#" className="inline-block text-sm font-medium text-red-600 mt-4 hover:text-red-500">Learn More</a>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-md shadow-md">
            <img src="https://via.placeholder.com/500x500" alt="Project 2" className="w-full rounded-t-md" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Project 2</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate erat in ultrices suscipit. Vivamus iaculis venenatis enim, sit amet pretium leo lacinia vel. Ut et mauris non lorem sagittis egestas eget id arcu.</p>
              <a href="#" className="inline-block text-sm font-medium text-red-600 mt-4 hover:text-red-500">Learn More</a>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-md shadow-md">
            <img src="https://via.placeholder.com/500x500" alt="Project 3" className="w-full rounded-t-md" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Project 3</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate erat in ultrices suscipit. Vivamus iaculis venenatis enim, sit amet pretium leo lacinia vel. Ut et mauris non lorem sagittis egestas eget id arcu.</p>
              <a href="#" className="inline-block text-sm font-medium text-red-600 mt-4 hover:text-red-500">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
