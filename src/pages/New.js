
import { Component } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Avatar, AvatarFallback } from "../components/ui/avatar"
import { Search, Clock, Eye, Heart, Filter, Calendar, Tag } from "lucide-react"

// Mock data for news articles
const MOCK_NEWS = [
  {
    id: 1,
    slug: "cybersecurity-trends-2024",
    title: "Cybersecurity Trends 2024",
    summary:
      "Stay ahead with the latest cybersecurity trends for 2024. Explore the evolving landscape of digital threats and innovative defense strategies.",
    author_name: "Alice Smith",
    published_at: "2024-06-01T10:00:00Z",
    category_name: "Trends",
    category_color: "#06b6d4", // Cyan
    tags: ["cybersecurity", "trends", "future"],
    // is_featured: true, // Removed
    reading_time: 5,
    views: 1200,
    like_count: 10,
    is_liked_by_user: false,
    content:
      "<p>Cybersecurity is evolving rapidly in 2024, driven by advancements in AI and the increasing sophistication of cyber threats. Organizations are focusing on proactive defense mechanisms, including threat intelligence, zero-trust architectures, and enhanced employee training. The rise of remote work has also necessitated a re-evaluation of traditional security perimeters, leading to more distributed and resilient security models. Furthermore, the integration of machine learning in security operations is helping to automate threat detection and response, making systems more robust against emerging attacks.</p><p>Key trends include the adoption of AI-powered security tools, increased focus on supply chain security, and the growing importance of data privacy regulations. Companies are investing heavily in security awareness programs to empower employees as the first line of defense. The landscape is dynamic, requiring continuous adaptation and innovation to stay ahead of malicious actors.</p>",
  },
  {
    id: 2,
    slug: "ai-in-security",
    title: "AI in Security: A Game Changer",
    summary: "How artificial intelligence is shaping the future of digital security and defense mechanisms.",
    author_name: "Bob Lee",
    published_at: "2024-05-20T14:30:00Z",
    category_name: "AI",
    category_color: "#f97316", // Orange 600
    tags: ["AI", "security", "innovation"],
    // is_featured: false, // Removed
    reading_time: 7,
    views: 800,
    like_count: 5,
    is_liked_by_user: false,
    content:
      "<p>Artificial intelligence is rapidly transforming the cybersecurity landscape, offering unprecedented capabilities for threat detection, prevention, and response. AI algorithms can analyze vast amounts of data to identify patterns indicative of malicious activity, often in real-time, far surpassing human capabilities. This includes detecting anomalies in network traffic, identifying phishing attempts, and predicting potential vulnerabilities before they are exploited.</p><p>However, the integration of AI also presents new challenges, such as the need for robust datasets to train models and the potential for AI to be used by attackers. Ethical considerations and the development of explainable AI are crucial for building trust and ensuring responsible deployment. Despite these challenges, AI is undeniably a game-changer, enabling more proactive and adaptive security strategies.</p>",
  },
  {
    id: 3,
    slug: "blockchain-for-data-integrity",
    title: "Blockchain for Data Integrity",
    summary: "Exploring the role of blockchain technology in ensuring data integrity and security.",
    author_name: "Charlie Brown",
    published_at: "2024-05-10T09:00:00Z",
    category_name: "Blockchain",
    category_color: "#3b82f6", // Blue 500
    tags: ["blockchain", "data", "integrity"],
    // is_featured: false, // Removed
    reading_time: 6,
    views: 650,
    like_count: 8,
    is_liked_by_user: false,
    content:
      "<p>Blockchain technology, traditionally associated with cryptocurrencies, is finding new applications in ensuring data integrity and security across various industries. Its decentralized and immutable ledger system makes it an ideal solution for creating tamper-proof records and verifying the authenticity of data. By distributing data across a network of nodes, blockchain significantly reduces the risk of single points of failure and unauthorized modifications.</p><p>Use cases range from secure supply chain management and digital identity verification to healthcare record keeping and intellectual property protection. While challenges such as scalability and regulatory frameworks remain, the potential for blockchain to enhance trust and transparency in data management is immense. It offers a robust framework for building secure and verifiable digital ecosystems.</p>",
  },
  {
    id: 4,
    slug: "cloud-security-best-practices",
    title: "Cloud Security Best Practices",
    summary: "Essential practices for securing your data and applications in the cloud environment.",
    author_name: "Diana Prince",
    published_at: "2024-04-25T11:00:00Z",
    category_name: "Cloud",
    category_color: "#8b5cf6", // Violet
    tags: ["cloud", "security", "best practices"],
    // is_featured: false, // Removed
    reading_time: 8,
    views: 950,
    like_count: 12,
    is_liked_by_user: false,
    content:
      "<p>Securing cloud environments requires a distinct approach compared to on-premise infrastructure. Best practices for cloud security emphasize shared responsibility, where both the cloud provider and the user play a role in maintaining security. Key strategies include implementing strong identity and access management (IAM), encrypting data at rest and in transit, and regularly auditing configurations.</p><p>Automated security tools and continuous monitoring are vital for detecting and responding to threats in dynamic cloud environments. Organizations should also focus on network segmentation, vulnerability management, and incident response planning tailored to cloud-specific risks. Adhering to these practices helps ensure the confidentiality, integrity, and availability of data and applications hosted in the cloud.</p>",
  },
  {
    id: 5,
    slug: "quantum-computing-threats",
    title: "Quantum Computing and Future Security Threats",
    summary: "Understanding the potential security implications of quantum computing on current encryption.",
    author_name: "Eve Adams",
    published_at: "2024-04-15T16:00:00Z",
    category_name: "Future Tech",
    category_color: "#ec4899", // Pink
    tags: ["quantum computing", "encryption", "future"],
    // is_featured: false, // Removed
    reading_time: 9,
    views: 500,
    like_count: 3,
    is_liked_by_user: false,
    content:
      '<p>Quantum computing, while still in its nascent stages, poses a significant long-term threat to current cryptographic standards. The immense computational power of future quantum computers could potentially break widely used encryption algorithms like RSA and ECC, which form the backbone of secure communication and data protection. This has led to a global race to develop "post-quantum cryptography" (PQC) algorithms that are resistant to quantum attacks.</p><p>Researchers are actively working on new mathematical approaches to encryption that can withstand the capabilities of quantum computers. The transition to PQC will be a complex and gradual process, requiring significant investment and coordination across industries. Preparing for the quantum era involves assessing current cryptographic dependencies, researching PQC solutions, and developing migration strategies to ensure future data security.</p>',
  },
  {
    id: 6,
    slug: "data-privacy-regulations",
    title: "Navigating Data Privacy Regulations",
    summary: "A guide to understanding and complying with global data privacy regulations like GDPR and CCPA.",
    author_name: "Frank White",
    published_at: "2024-03-30T13:00:00Z",
    category_name: "Regulations",
    category_color: "#a78bfa", // Purple
    tags: ["data privacy", "GDPR", "CCPA", "compliance"],
    // is_featured: false, // Removed
    reading_time: 7,
    views: 720,
    like_count: 9,
    is_liked_by_user: false,
    content:
      "<p>The global landscape of data privacy regulations is becoming increasingly complex, with new laws emerging and existing ones evolving. Regulations like GDPR in Europe and CCPA in California have set high standards for how personal data is collected, processed, and stored. Compliance with these regulations is not just a legal requirement but also a critical factor in building customer trust and maintaining brand reputation.</p><p>Organizations must implement robust data governance frameworks, conduct regular privacy impact assessments, and ensure transparency in their data handling practices. Key aspects include obtaining explicit consent, providing data subjects with rights over their data, and implementing strong security measures to prevent breaches. Staying informed about regulatory changes and adapting privacy strategies accordingly is essential for navigating this intricate environment.</p>",
  },
]

const MOCK_CATEGORIES = [
  { id: 1, slug: "trends", name: "Trends", color: "#06b6d4" }, // Cyan
  { id: 2, slug: "ai", name: "AI", color: "#f97316" }, // Orange 600
  { id: 3, slug: "blockchain", name: "Blockchain", color: "#3b82f6" }, // Blue 500
  { id: 4, slug: "cloud", name: "Cloud", color: "#8b5cf6" }, // Violet
  { id: 5, slug: "future-tech", name: "Future Tech", color: "#ec4899" }, // Pink
  { id: 6, slug: "regulations", name: "Regulations", color: "#a78bfa" }, // Purple
]

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: MOCK_NEWS,
      loading: false,
      error: null,
      searchQuery: "",
      activeFilter: "All",
      categories: MOCK_CATEGORIES,
      currentPage: 1,
      hasNextPage: false,
      hasPrevPage: false,
      selectedArticle: null,
      showArticleDetails: false,
    }
  }

  // Check if user is logged in (keep for like button logic)
  isLoggedIn = () => {
    // Simulate login status. In a real app, this would check a token or session.
    return typeof window !== "undefined" && !!localStorage.getItem("access_token")
  }

  // Simulate fetching news (filter/search/pagination on mock data)
  fetchNews = (page = 1, search = "", category = "") => {
    this.setState({ loading: true })
    setTimeout(() => {
      let filtered = MOCK_NEWS
      if (search) {
        filtered = filtered.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.summary.toLowerCase().includes(search.toLowerCase()),
        )
      }
      if (category && category !== "All") {
        filtered = filtered.filter(
          (item) =>
            item.category_name.toLowerCase() === category.toLowerCase() ||
            item.category_name.toLowerCase() === MOCK_CATEGORIES.find((c) => c.slug === category)?.name.toLowerCase(),
        )
      }
      // Pagination (3 per page)
      const perPage = 3
      const start = (page - 1) * perPage
      const paged = filtered.slice(start, start + perPage)
      this.setState({
        news: paged,
        hasNextPage: start + perPage < filtered.length,
        hasPrevPage: page > 1,
        currentPage: page,
        error: null,
        loading: false,
      })
    }, 300)
  }

  // Handle search
  handleSearch = (e) => {
    e.preventDefault()
    this.fetchNews(1, this.state.searchQuery, this.state.activeFilter)
  }

  // Handle filter change
  handleFilterChange = (filter) => {
    this.setState({ activeFilter: filter })
    this.fetchNews(1, this.state.searchQuery, filter)
  }

  // Handle pagination
  handlePageChange = (page) => {
    this.fetchNews(page, this.state.searchQuery, this.state.activeFilter)
  }

  // Handle like/unlike (simulate on mock data)
  handleLike = (slug) => {
    if (!this.isLoggedIn()) {
      // In a real app, you'd redirect to a login page or show a modal
      alert("Please log in to like articles.")
      // window.location.href = '/login'; // Uncomment for actual redirect
      return
    }
    this.setState((prevState) => ({
      news: prevState.news.map((item) =>
        item.slug === slug
          ? {
              ...item,
              is_liked_by_user: !item.is_liked_by_user,
              like_count: item.is_liked_by_user ? item.like_count - 1 : item.like_count + 1,
            }
          : item,
      ),
    }))
  }

  // Handle read more - show article details (from mock data)
  handleReadMore = (slug) => {
    const article = MOCK_NEWS.find((item) => item.slug === slug)
    if (article) {
      this.setState({
        selectedArticle: article,
        showArticleDetails: true,
      })
    }
  }

  // Handle back to news list
  handleBackToList = () => {
    this.setState({
      selectedArticle: null,
      showArticleDetails: false,
      error: null,
    })
  }

  // Format date
  formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Get initials for avatar
  getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  componentDidMount() {
    this.fetchNews()
  }

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
      showArticleDetails,
    } = this.state

    // Show article details if selected
    if (showArticleDetails && selectedArticle) {
      return (
        <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              onClick={this.handleBackToList}
              variant="ghost"
              className="mb-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              ← Back to News
            </Button>
            {/* Article Details */}
            <Card className="bg-white border border-gray-200 shadow-sm rounded-xl">
              {/* Removed featured article badge */}
              <CardHeader className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-cyan-600">
                      <AvatarFallback className="bg-cyan-100 text-cyan-600 font-semibold">
                        {this.getInitials(selectedArticle.author_name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900 text-lg">{selectedArticle.author_name}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {this.formatDate(selectedArticle.published_at)}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 border border-gray-200"
                    style={{ borderColor: selectedArticle.category_color, color: selectedArticle.category_color }}
                  >
                    {selectedArticle.category_name}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {selectedArticle.title}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedArticle.summary}</p>
                {/* Tags */}
                {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm bg-gray-100 border-gray-200 text-gray-600">
                        <Tag className="h-4 w-4 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-6 text-sm text-gray-600">
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
              <CardContent className="p-6 md:p-8 pt-0">
                {/* Article Content */}
                <div className="prose max-w-none text-gray-800 leading-relaxed text-lg">
                  <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                </div>
                {/* Like Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Did you find this article helpful?</span>
                    {this.isLoggedIn() ? (
                      <Button
                        onClick={() => this.handleLike(selectedArticle.slug)}
                        className={`flex items-center gap-2 transition-all duration-200 ${
                          selectedArticle.is_liked_by_user
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${selectedArticle.is_liked_by_user ? "fill-current" : ""}`} />
                        {selectedArticle.is_liked_by_user ? "Liked" : "Like"}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => alert("Please log in to like articles.")} // Simplified for demo
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 flex items-center gap-2"
                        title="Login to like this article"
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
      )
    }

    if (loading && news.length === 0) {
      return (
        <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500"></div>
            </div>
          </div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Error Loading News</h2>
              <p className="text-red-500 mb-6">{error}</p>
              <Button onClick={() => this.fetchNews()} className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3">
                Try Again
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Latest News</h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Stay updated with the latest cybersecurity and technology news
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-10">
            <form onSubmit={this.handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                  className="pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent rounded-lg"
                />
              </div>
              <Button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Search
              </Button>
            </form>

            {/* Category Filters */}
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 text-base font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => this.handleFilterChange("All")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200 ${
                  activeFilter === "All"
                    ? "bg-cyan-600 text-white shadow-sm border-cyan-600"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                All
              </button>
              {(categories || []).map((category) => (
                <button
                  key={category.id}
                  onClick={() => this.handleFilterChange(category.slug)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200 ${
                    activeFilter === category.slug
                      ? "text-white shadow-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  style={{
                    backgroundColor: activeFilter === category.slug ? category.color : "",
                    color: activeFilter === category.slug ? "white" : "",
                    borderColor: activeFilter === category.slug ? category.color : "",
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
              {[...Array(3)].map(
                (
                  _,
                  index, // Show 3 skeleton loaders for the current page size
                ) => (
                  <Card key={index} className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 w-20 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                  </Card>
                ),
              )}
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {news.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden"
                  >
                    {/* Removed featured article badge */}
                    <CardHeader className="p-5 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border-2 border-cyan-600">
                            <AvatarFallback className="bg-cyan-100 text-cyan-600 font-semibold">
                              {this.getInitials(item.author_name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{item.author_name}</p>
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {this.formatDate(item.published_at)}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 border border-gray-200"
                          style={{ borderColor: item.category_color, color: item.category_color }}
                        >
                          {item.category_name}
                        </Badge>
                      </div>
                      <h3
                        className="text-xl font-bold text-gray-900 mb-2 hover:text-cyan-700 cursor-pointer transition-colors duration-200"
                        onClick={() => this.handleReadMore(item.slug)}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">{item.summary}</p>
                    </CardHeader>
                    <CardContent className="p-5 pt-0">
                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs bg-gray-100 border-gray-200 text-gray-600"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                            </Badge>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
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
                                ? "text-red-500 hover:text-red-600"
                                : "text-gray-500 hover:text-red-500"
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${item.is_liked_by_user ? "fill-current" : ""}`} />
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => alert("Please log in to like articles.")} // Simplified for demo
                            className="text-sm transition-all duration-200 text-gray-500 hover:text-cyan-600"
                            title="Login to like this article"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      {/* Read More Button */}
                      <Button
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 rounded-lg transition-all duration-200"
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
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </Button>
                  <span className="text-gray-600 text-lg font-medium">Page {currentPage}</span>
                  <Button
                    onClick={() => this.handlePageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
    )
  }
}

export default News