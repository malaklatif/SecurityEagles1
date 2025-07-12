import React from 'react';

function InternshipCard({ title, company, location, type, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-1">{company} - {location}</p>
      <p className="text-sm text-gray-500 mb-4">{type}</p>
      <p className="text-sm text-gray-700 mb-6">{description}</p>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Apply Now
      </button>
    </div>
  );
}

export { InternshipCard }; 