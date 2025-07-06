import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Search, Clock, Eye, Heart, Filter, Calendar, User, Tag } from 'lucide-react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const API_BASE_URL = 'http://localhost:8000/api';

  // Get auth token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem('access_token');
  };

  // API request helper
  const apiRequest = async (endpoint, options = {}) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Handle unauthorized - redirect to login
          window.location.href = '/login';
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  // Fetch news list
  const fetchNews = async (page = 1, search = '', category = '') => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        page_size: '12',
        ordering: '-published_at',
      });

      if (search) params.append('search', search);
      if (category && category !== 'All') params.append('category_slug', category);

      const data = await apiRequest(`/news/?${params.toString()}`);
      
      if (data) {
        setNews(data.results || []);
        setHasNextPage(!!data.next);
        setHasPrevPage(!!data.previous);
        setCurrentPage(page);
      }
    } catch (error) {
      setError('Failed to fetch news');
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const data = await apiRequest('/news/categories/');
      if (data) {
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(1, searchQuery, activeFilter);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    fetchNews(1, searchQuery, filter);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    fetchNews(page, searchQuery, activeFilter);
  };

  // Handle like/unlike
  const handleLike = async (slug) => {
    try {
      const data = await apiRequest(`/news/${slug}/like/`, {
        method: 'POST',
      });
      
      if (data) {
        // Update the news item with new like status
        setNews(prevNews => 
          prevNews.map(item => 
            item.slug === slug 
              ? { 
                  ...item, 
                  is_liked_by_user: data.liked,
                  like_count: data.liked ? item.like_count + 1 : item.like_count - 1
                }
              : item
          )
        );
      }
    } catch (error) {
      console.error('Error liking/unliking news:', error);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  useEffect(() => {
    fetchNews();
    fetchCategories();
  }, []);

  if (loading && news.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-white">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-20 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading News</h2>
          <p className="text-red-400 mb-4">{error}</p>
          <Button 
            onClick={() => fetchNews()} 
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-gray-400 text-lg">Stay updated with the latest cybersecurity and technology news</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <Button 
              type="submit" 
              className="bg-green-500 hover:bg-green-600 text-white px-6"
            >
              Search
            </Button>
          </form>

          {/* Category Filters */}
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === 'All'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.slug
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
                style={{
                  borderColor: category.color,
                  ...(activeFilter === category.slug && { backgroundColor: category.color })
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-slate-700 rounded mb-4"></div>
                <div className="h-6 bg-slate-700 rounded mb-2"></div>
                <div className="h-4 bg-slate-700 rounded mb-4"></div>
                <div className="h-20 bg-slate-700 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <Card key={item.id} className="bg-slate-800 border-slate-700 hover:shadow-lg transition-shadow duration-200">
                  {item.featured_image && (
                    <div className="relative">
                      <img 
                        src={item.featured_image.image} 
                        alt={item.featured_image.alt_text || item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {item.is_featured && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
                          Featured
                        </Badge>
                      )}
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-green-100 text-green-600">
                            {getInitials(item.author_name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-200">{item.author_name}</p>
                          <p className="text-sm text-gray-500">{formatDate(item.published_at)}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-slate-700 text-gray-300"
                        style={{ borderColor: item.category_color }}
                      >
                        {item.category_name}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-green-400 cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{item.summary}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-slate-700 border-slate-600 text-gray-300">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.reading_time} min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{item.like_count}</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleLike(item.slug)}
                        className={`text-sm transition-all duration-200 ${
                          item.is_liked_by_user 
                            ? 'text-red-500 hover:text-red-600' 
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${item.is_liked_by_user ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {(hasNextPage || hasPrevPage) && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <Button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!hasPrevPage}
                  className="bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-50"
                >
                  Previous
                </Button>
                <span className="text-gray-400">Page {currentPage}</span>
                <Button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!hasNextPage}
                  className="bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-50"
                >
                  Next
                </Button>
              </div>
            )}

            {news.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default News; 