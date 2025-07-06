import React from "react";
import { Button } from "../components/ui/button";

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">SecurityEagles Labs</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to SecurityEagles Labs! Here you can practice your skills in a safe, hands-on environment. Our labs are designed to help you learn by doing, with real-world scenarios in cybersecurity, networking, cloud, and development.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Penetration Testing Lab</h2>
            <p className="text-gray-600 mb-2">Test your ethical hacking skills in a sandboxed environment.</p>
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-4 py-2 rounded-lg">Start Lab</Button>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Cloud Deployment Lab</h2>
            <p className="text-gray-600 mb-2">Deploy and manage cloud infrastructure with guided exercises.</p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-lg">Start Lab</Button>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Secure Coding Lab</h2>
            <p className="text-gray-600 mb-2">Write and test secure code in real-world scenarios.</p>
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-4 py-2 rounded-lg">Start Lab</Button>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Network Analysis Lab</h2>
            <p className="text-gray-600 mb-2">Analyze network traffic and protocols using industry tools.</p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-lg">Start Lab</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 