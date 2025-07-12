import React, { useState, useMemo } from 'react';

const allInternships = [
  {
    title: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    locationValue: "san-francisco",
    type: "Summer 2025",
    category: "tech",
    description: "Join our engineering team to work on cutting-edge web applications.",
    link: "#",
  },
  {
    title: "Marketing Intern",
    company: "Global Brands Co.",
    location: "New York, NY",
    locationValue: "new-york",
    type: "Fall 2024",
    category: "marketing",
    description: "Assist our marketing team with social media campaigns and content creation.",
    link: "#",
  },
  {
    title: "Financial Analyst Intern",
    company: "Capital Investments",
    location: "London, UK",
    locationValue: "london",
    type: "Spring 2025",
    category: "finance",
    description: "Support our finance department with data analysis and reporting.",
    link: "#",
  },
  {
    title: "Product Design Intern",
    company: "Innovate Studio",
    location: "Remote",
    locationValue: "remote",
    type: "Summer 2025",
    category: "design",
    description: "Collaborate with our design team to create user-centered experiences.",
    link: "#",
  },
  {
    title: "Cybersecurity Intern",
    company: "SecureNet Systems",
    location: "Austin, TX",
    locationValue: "austin",
    type: "Summer 2025",
    category: "cybersecurity",
    description: "Work on security assessments, penetration testing, and threat analysis.",
    link: "#",
  },
  {
    title: "Data Science Intern",
    company: "Analytics Corp",
    location: "Seattle, WA",
    locationValue: "seattle",
    type: "Fall 2024",
    category: "data-science",
    description: "Develop machine learning models and analyze large datasets.",
    link: "#",
  },
]

function InternshipPage() {
  const [searchFilters, setSearchFilters] = useState({
    keywords: "",
    location: "any",
    category: "any"
  });

  const filteredInternships = useMemo(() => {
    return allInternships.filter(internship => {
      // Keywords filter
      if (searchFilters.keywords) {
        const searchTerm = searchFilters.keywords.toLowerCase();
        const matchesKeywords = 
          internship.title.toLowerCase().includes(searchTerm) ||
          internship.company.toLowerCase().includes(searchTerm) ||
          internship.description.toLowerCase().includes(searchTerm);
        
        if (!matchesKeywords) return false;
      }

      // Location filter
      if (searchFilters.location !== "any") {
        if (internship.locationValue !== searchFilters.location) {
          return false;
        }
      }

      // Category filter
      if (searchFilters.category !== "any") {
        if (internship.category !== searchFilters.category) {
          return false;
        }
      }

      return true;
    });
  }, [searchFilters]);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-8 px-4 md:px-6">
        <div className="container mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">Find Your Dream Internship</h1>
          
          {/* Simple Search Filter */}
          <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="col-span-full md:col-span-2">
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                Keywords
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  id="keywords" 
                  placeholder="e.g., Software Engineer, Marketing" 
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-9 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  value={searchFilters.keywords}
                  onChange={(e) => setSearchFilters(prev => ({ ...prev, keywords: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select 
                id="location"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
              >
                <option value="any">Any Location</option>
                <option value="new-york">New York, NY</option>
                <option value="san-francisco">San Francisco, CA</option>
                <option value="london">London, UK</option>
                <option value="austin">Austin, TX</option>
                <option value="seattle">Seattle, WA</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select 
                id="category"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                value={searchFilters.category}
                onChange={(e) => setSearchFilters(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="any">Any Category</option>
                <option value="tech">Technology</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                <option value="design">Design</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="data-science">Data Science</option>
              </select>
            </div>
            <button 
              className="col-span-full md:col-span-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
              onClick={() => handleSearch(searchFilters)}
            >
              Search Internships
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredInternships.length} of {allInternships.length} internships
            </p>
            {searchFilters.keywords && (
              <p className="text-sm text-gray-500">
                Results for: "{searchFilters.keywords}"
              </p>
            )}
          </div>
          
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.length > 0 ? (
              filteredInternships.map((internship, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{internship.title}</h3>
                  <p className="text-gray-600 mb-1">{internship.company} - {internship.location}</p>
                  <p className="text-sm text-gray-500 mb-4">{internship.type}</p>
                  <p className="text-sm text-gray-700 mb-6">{internship.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No internships found matching your criteria.</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search filters.</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default InternshipPage; 