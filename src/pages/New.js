import React, { Component } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Search, Clock, Eye, Heart, Filter, Calendar, User, Tag } from 'lucide-react';

class News extends Component {
  constructor(props) {
    super(props);
    // Static data for news and categories
    const staticCategories = [
      { id: 1, slug: 'cybersecurity', name: 'Cybersecurity', color: '#22d3ee' },
      { id: 2, slug: 'cloud', name: 'Cloud', color: '#a3e635' },
      { id: 3, slug: 'ai', name: 'AI', color: '#f472b6' },
    ];
    const staticNews = [
      {
        id: 1,
        slug: 'ai-threats-2024',
        title: 'AI Threats in 2024',
        summary: 'How AI is changing the cybersecurity landscape.',
        content: '<p>AI is both a tool and a threat in cybersecurity...</p>',
        author_name: 'Alice Smith',
        published_at: '2024-06-01',
        category_name: 'AI',
        category_color: '#f472b6',
        tags: ['AI', 'Security'],
        featured_image: null,
        is_featured: true,
        reading_time: 5,
        views: 120,
        like_count: 10,
        is_liked_by_user: false,
      },
      {
        id: 2,
        slug: 'cloud-breach',
        title: 'Major Cloud Breach',
        summary: 'A major cloud provider suffered a breach.',
        content: '<p>Cloud security is more important than ever...</p>',
        author_name: 'Bob Lee',
        published_at: '2024-05-28',
        category_name: 'Cloud',
        category_color: '#a3e635',
        tags: ['Cloud', 'Incident'],
        featured_image: null,
        is_featured: false,
        reading_time: 4,
        views: 80,
        like_count: 5,
        is_liked_by_user: false,
      },
      {
        id: 3,
        slug: 'phishing-trends',
        title: 'Phishing Trends 2024',
        summary: 'Phishing attacks are evolving rapidly.',
        content: '<p>Phishing remains a top threat for organizations...</p>',
        author_name: 'Carol Danvers',
        published_at: '2024-05-20',
        category_name: 'Cybersecurity',
        category_color: '#22d3ee',
        tags: ['Phishing', 'Trends'],
        featured_image: null,
        is_featured: false,
        reading_time: 3,
        views: 60,
        like_count: 2,
        is_liked_by_user: false,
      },
    ];
    this.state = {
      news: staticNews,
      allNews: staticNews,
      loading: false,
      error: null,
      searchQuery: '',
      activeFilter: 'All',
      categories: staticCategories,
      currentPage: 1,
      hasNextPage: false,
      hasPrevPage: false,
      selectedArticle: null,
      showArticleDetails: false,
      pageSize: 6,
    };
  }

  // Helper: Check if user is logged in
  isLoggedIn = () => {
    return !!localStorage.getItem('access_token');
  };

  // Helper: Format date
  formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Helper: Get initials for avatar
  getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  // Search handler
  handleSearch = (e) => {
    e.preventDefault();
    const { allNews, searchQuery, activeFilter, pageSize } = this.state;
    let filtered = allNews;
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (activeFilter !== 'All') {
      filtered = filtered.filter(item =>
        item.category_name.toLowerCase() ===
        this.state.categories.find(c => c.slug === activeFilter)?.name.toLowerCase()
      );
    }
    this.setState({
      news: filtered.slice(0, pageSize),
      currentPage: 1,
      hasNextPage: filtered.length > pageSize,
      hasPrevPage: false,
    });
  };

  // Filter handler
  handleFilterChange = (filter) => {
    const { allNews, searchQuery, pageSize } = this.state;
    let filtered = allNews;
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filter !== 'All') {
      filtered = filtered.filter(item =>
        item.category_name.toLowerCase() ===
        this.state.categories.find(c => c.slug === filter)?.name.toLowerCase()
      );
    }
    this.setState({
      news: filtered.slice(0, pageSize),
      activeFilter: filter,
      currentPage: 1,
      hasNextPage: filtered.length > pageSize,
      hasPrevPage: false,
    });
  };

  // Pagination handler
  handlePageChange = (page) => {
    const { allNews, searchQuery, activeFilter, pageSize } = this.state;
    let filtered = allNews;
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (activeFilter !== 'All') {
      filtered = filtered.filter(item =>
        item.category_name.toLowerCase() ===
        this.state.categories.find(c => c.slug === activeFilter)?.name.toLowerCase()
      );
    }
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    this.setState({
      news: filtered.slice(start, end),
      currentPage: page,
      hasNextPage: end < filtered.length,
      hasPrevPage: start > 0,
    });
  };

  // Like handler (local only)
  handleLike = (slug) => {
    if (!this.isLoggedIn()) {
      window.location.href = '/login';
      return;
    }
    this.setState(prevState => {
      const news = prevState.news.map(item =>
        item.slug === slug
          ? {
              ...item,
              is_liked_by_user: !item.is_liked_by_user,
              like_count: item.is_liked_by_user ? item.like_count - 1 : item.like_count + 1,
            }
          : item
      );
      const allNews = prevState.allNews.map(item =>
        item.slug === slug
          ? {
              ...item,
              is_liked_by_user: !item.is_liked_by_user,
              like_count: item.is_liked_by_user ? item.like_count - 1 : item.like_count + 1,
            }
          : item
      );
      return { news, allNews };
    });
  };

  // Read more handler (local only)
  handleReadMore = (slug) => {
    const article = this.state.allNews.find(item => item.slug === slug);
    if (article) {
      this.setState({
        selectedArticle: article,
        showArticleDetails: true,
      });
    }
  };

  // Back to list
  handleBackToList = () => {
    this.setState({
      selectedArticle: null,
      showArticleDetails: false,
      error: null,
    });
  };

  render() {
    const { 
      news, 
      loading, 
      error, 
      searchQuery, 
      activeFilter, 
      categories, 
      currentPage, 
      hasNextPage, 
      hasPrevPage,
      selectedArticle,
      showArticleDetails
    } = this.state;

    // Show article details if selected
    if (showArticleDetails && selectedArticle) {
      return (
        <div className="container mx-auto px-6 py-20 text-white">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button 
              onClick={this.handleBackToList}
              className="mb-6 bg-slate-700 hover:bg-slate-600 text-white"
            >
              ← Back to News
            </Button>

            {/* Article Details */}
            <Card className="bg-slate-800 border-slate-700">
              {selectedArticle.featured_image && (
                <div className="relative">
                  <img 
                    src={selectedArticle.featured_image.image} 
                    alt={selectedArticle.featured_image.alt_text || selectedArticle.title}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  />
                  {selectedArticle.is_featured && (
                    <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                      Featured
                    </Badge>
                  )}
                </div>
              )}
              
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-green-100 text-green-600">
                        {this.getInitials(selectedArticle.author_name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-200 text-lg">{selectedArticle.author_name}</p>
                      <p className="text-sm text-gray-500">{this.formatDate(selectedArticle.published_at)}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-slate-700 text-gray-300"
                    style={{ borderColor: selectedArticle.category_color }}
                  >
                    {selectedArticle.category_name}
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedArticle.title}
                </h1>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {selectedArticle.summary}
                </p>

                {/* Tags */}
                {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm bg-slate-700 border-slate-600 text-gray-300">
                        <Tag className="h-4 w-4 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{selectedArticle.reading_time} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    <span>{selectedArticle.views} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    <span>{selectedArticle.like_count} likes</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Article Content */}
                <div className="prose prose-invert max-w-none">
                  <div 
                    className="text-gray-300 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </div>

                {/* Like Button */}
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Did you find this article helpful?</span>
                    {this.isLoggedIn() ? (
                      <Button 
                        onClick={() => this.handleLike(selectedArticle.slug)}
                        className={`flex items-center gap-2 transition-all duration-200 ${
                          selectedArticle.is_liked_by_user 
                            ? 'bg-red-500 hover:bg-red-600 text-white' 
                            : 'bg-slate-700 hover:bg-slate-600 text-gray-300'
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${selectedArticle.is_liked_by_user ? 'fill-current' : ''}`} />
                        {selectedArticle.is_liked_by_user ? 'Liked' : 'Like'}
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => window.location.href = '/login'}
                        className="bg-slate-700 hover:bg-slate-600 text-gray-300 flex items-center gap-2"
                      >
                        <Heart className="h-5 w-5" />
                        Login to Like
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

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
              onClick={() => this.handleSearch({ preventDefault: () => {} })} 
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
            <form onSubmit={this.handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
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
                onClick={() => this.handleFilterChange('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === 'All'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                All
              </button>
              {(categories || []).map((category) => (
                <button
                  key={category.id}
                  onClick={() => this.handleFilterChange(category.slug)}
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
                              {this.getInitials(item.author_name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-200">{item.author_name}</p>
                            <p className="text-sm text-gray-500">{this.formatDate(item.published_at)}</p>
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
                      
                      <div className="flex items-center justify-between mb-4">
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
                        {this.isLoggedIn() ? (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => this.handleLike(item.slug)}
                            className={`text-sm transition-all duration-200 ${
                              item.is_liked_by_user 
                                ? 'text-red-500 hover:text-red-600' 
                                : 'text-gray-400 hover:text-red-500'
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${item.is_liked_by_user ? 'fill-current' : ''}`} />
                          </Button>
                        ) : (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => window.location.href = '/login'}
                            className="text-sm transition-all duration-200 text-gray-400 hover:text-green-500"
                            title="Login to like this article"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      
                      {/* Read More Button */}
                      <Button 
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition-all duration-200"
                        onClick={() => this.handleReadMore(item.slug)}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {(hasNextPage || hasPrevPage) && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <Button
                    onClick={() => this.handlePageChange(currentPage - 1)}
                    disabled={!hasPrevPage}
                    className="bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  <span className="text-gray-400">Page {currentPage}</span>
                  <Button
                    onClick={() => this.handlePageChange(currentPage + 1)}
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
  }
}

export default News;