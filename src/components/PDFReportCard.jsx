import React from 'react';
import { Download, FileText } from 'lucide-react';

const PDFReportCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      {/* Illustration */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-20 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">📄</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center mb-6">
        <h3 className="font-semibold text-blue-800 mb-1">PDF Report</h3>
        <p className="text-sm text-gray-500">Annual detailed report</p>
      </div>

      {/* Download Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors flex items-center justify-center space-x-2">
        <Download className="w-4 h-4" />
        <span>Download</span>
      </button>
    </div>
  );
};

export default PDFReportCard;
