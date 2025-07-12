import React, { useState } from "react";
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"

export function SearchFilter({ onSearch }) {
  const [filters, setFilters] = useState({
    keywords: "",
    location: "any",
    category: "any"
  });

  const handleInputChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div className="col-span-full md:col-span-2">
        <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
          Keywords
        </label>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <Input 
            id="keywords" 
            placeholder="e.g., Software Engineer, Marketing" 
            className="pl-9"
            value={filters.keywords}
            onChange={(e) => handleInputChange('keywords', e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <Select value={filters.location} onValueChange={(value) => handleInputChange('location', value)}>
          <SelectTrigger id="location">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Location</SelectItem>
            <SelectItem value="new-york">New York, NY</SelectItem>
            <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
            <SelectItem value="london">London, UK</SelectItem>
            <SelectItem value="austin">Austin, TX</SelectItem>
            <SelectItem value="seattle">Seattle, WA</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <Select value={filters.category} onValueChange={(value) => handleInputChange('category', value)}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Category</SelectItem>
            <SelectItem value="tech">Technology</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
            <SelectItem value="data-science">Data Science</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="col-span-full md:col-span-1" onClick={handleSearch}>
        Search Internships
      </Button>
    </div>
  )
} 