import { useState } from "react"
import { Search, Clock, Eye, Heart, Filter, GraduationCap, Layers, FileText } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { useNavigate } from "react-router-dom"

const solutionSidebar = [
  { title: "Bypass Authentication Lab", href: "#" },
  { title: "SQL Injection Walkthrough", href: "#" },
  { title: "XSS Mitigation", href: "#" },
  { title: "Cloud IAM Misconfiguration", href: "#" },
]

const generalPostSidebar = [
  { title: "Welcome to SecurityEagles!", href: "#" },
  { title: "How to Use the Platform", href: "#" },
  { title: "Community Announcements", href: "#" },
  { title: "Effective Learning Strategies", href: "#" },
]

const filterTags = [
  "All",
  "Networking",
  "System",
  "Virtualization",
  "Linux",
  "Windows Server",
  "DevOps",
  "Cloud",
  "Security",
  "AI",
]
const tabs = [
  {
    id: "learningPath",
    label: "Learning Paths",
    icon: GraduationCap,
    colors: {
      active: "bg-blue-600",
      activeText: "text-white",
      activeBorder: "border-blue-700",
      hover: "hover:bg-blue-50 hover:border-blue-200",
    },
  },
  {
    id: "solution",
    label: "Solutions",
    icon: Layers,
    colors: {
      active: "bg-orange-600",
      activeText: "text-white",
      activeBorder: "border-orange-700",
      hover: "hover:bg-orange-50 hover:border-orange-200",
    },
  },
  {
    id: "generalPost",
    label: "General Posts",
    icon: FileText,
    colors: {
      active: "bg-green-600",
      activeText: "text-white",
      activeBorder: "border-green-700",
      hover: "hover:bg-green-50 hover:border-green-200",
    },
  },
]
const generalPosts = [
  {
    id: 1,
    title: "Advanced Network Segmentation Strategies",
    description: "Learn how to implement effective network segmentation for enhanced security...",
    author: "John Smith",
    date: "2024-01-20",
    readTime: "8 min read",
    views: 1250,
    likes: 89,
    category: "Networking",
  },
  {
    id: 2,
    title: "Welcome to SecurityEagles Platform",
    description: "Get started with our comprehensive cybersecurity learning platform and discover all the features...",
    author: "Sarah Johnson",
    date: "2024-01-18",
    readTime: "5 min read",
    views: 2100,
    likes: 156,
    category: "General",
  },
  {
    id: 3,
    title: "Cloud Security Best Practices",
    description: "Essential security practices for cloud infrastructure deployment and management...",
    author: "Mike Chen",
    date: "2024-01-15",
    readTime: "12 min read",
    views: 890,
    likes: 67,
    category: "Cloud",
  },
  {
    id: 4,
    title: "DevOps Security Integration",
    description: "How to integrate security practices into your DevOps pipeline effectively...",
    author: "Emily Davis",
    date: "2024-01-12",
    readTime: "10 min read",
    views: 1450,
    likes: 98,
    category: "DevOps",
  },
]

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const navigate = useNavigate()
  const [activeMainSection, setActiveMainSection] = useState("learningPath")

  const navigationSections = [
    {
      title: "Domaine Réseau (Networking)",
      items: [
        { title: "Cisco Networking Academy – Course Materials", href: "#" },
        { title: "CompTIA Network+ Official Study Guide", href: "#" },
        { title: "CCNA 200-301 Official Cert Guide", href: "#" },
        { title: "RFCs (Request For Comments) – IETF", href: "#" },
        { title: "Wireshark User Guide", href: "#" },
        { title: "Linux Networking Administration Guide", href: "#" },
        { title: "Nmap Network Scanning", href: "#" },
        { title: "Network Warrior – Gary Donahue", href: "#" },
        { title: "Juniper Networks Technical Documentation", href: "#" },
        { title: "OSI Model Explained – Cisco Docs", href: "#" },
      ],
    },
    {
      title: "☁️ Cloud & DevOps",
      items: [
        { title: "AWS Well-Architected Framework", href: "#" },
        { title: "Google Cloud Architecture Framework", href: "#" },
        { title: "Microsoft Azure Architecture Center", href: "#" },
        { title: "Terraform Documentation – HashiCorp", href: "#" },
        { title: "Docker Official Documentation", href: "#" },
        { title: "Kubernetes Official Documentation", href: "#" },
        { title: "CI/CD with GitHub Actions Docs", href: "#" },
        { title: "Ansible User Guide – Red Hat Docs", href: "#" },
        { title: "Jenkins User Documentation", href: "#" },
        { title: "OCI DevOps Documentation – Oracle Cloud Infrastructure", href: "#" },
      ],
    },
    {
      title: "💻 Development (Web, Full-Stack, etc.)",
      items: [
        { title: "MDN Web Docs (HTML, CSS, JS)", href: "#" },
        { title: "PHP Official Manual", href: "#" },
        { title: "Laravel Official Documentation", href: "#" },
        { title: "React Documentation – Meta", href: "#" },
        { title: "Vue.js Documentation", href: "#" },
        { title: "Node.js Official Docs", href: "#" },
        { title: "Python Documentation (docs.python.org)", href: "#" },
        { title: "Java SE Documentation – Oracle", href: "#" },
        { title: "Spring Boot Documentation", href: "#" },
        { title: "Django Official Documentation", href: "#" },
      ],
    },
  ]

  const filteredPosts = generalPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "All" || post.category === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
          <div className="p-6">
            {activeMainSection === "learningPath" && (
              <>
                {navigationSections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="block text-sm text-gray-700 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
            {activeMainSection === "solution" && (
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Solution Menu</h3>
                <div className="space-y-1">
                  {solutionSidebar.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block text-sm text-gray-700 hover:text-green-600 py-1 px-2 rounded hover:bg-green-50"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {activeMainSection === "generalPost" && (
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">General Post Menu</h3>
                <div className="space-y-1">
                  {generalPostSidebar.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block text-sm text-gray-700 hover:text-yellow-600 py-1 px-2 rounded hover:bg-yellow-50"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto px-8 py-8">
          {/* Search Bar - Now always at the top */}
          <div className="relative max-w-4xl w-full mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-16 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-3xl"
            />
          </div>

          {/* Section Switcher Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeMainSection === tab.id

                return (
                  <button
                    key={tab.id}
                    className={`
                      relative flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 min-w-[140px] justify-center
                      ${
                        isActive
                          ? `${tab.colors.active} ${tab.colors.activeText} ${tab.colors.activeBorder} shadow-md transform scale-105 focus:ring-current`
                          : `bg-white text-gray-700 border-gray-200 ${tab.colors.hover} focus:ring-gray-300`
                      }
                    `}
                    onClick={() => setActiveMainSection(tab.id)}
                    aria-pressed={isActive}
                    role="tab"
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                    <span className="font-medium tracking-wide">{tab.label}</span>
                    {isActive && <div className="absolute inset-0 rounded-lg bg-white/10 pointer-events-none" />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Section Content */}
          {activeMainSection === "learningPath" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Learning Path</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Explore our curated learning paths in cybersecurity, networking, and cloud. Each path is designed to
                  guide you from fundamentals to advanced topics with hands-on labs and resources.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Cybersecurity Fundamentals</li>
                  <li>Network Security Basics</li>
                  <li>Cloud Security Essentials</li>
                  <li>Web Application Security</li>
                </ul>
              </div>
            </div>
          )}

          {activeMainSection === "solution" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Solution</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Find solutions and walkthroughs for common labs and challenges. Step-by-step guides help you
                  understand the process and reasoning behind each solution.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Bypass Authentication Lab Solution</li>
                  <li>SQL Injection Walkthrough</li>
                  <li>XSS Mitigation Steps</li>
                  <li>Cloud IAM Misconfiguration</li>
                </ul>
              </div>
            </div>
          )}

          {activeMainSection === "generalPost" && (
            <div className="space-y-6">
              {/* Tab Navigation */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {filterTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveFilter(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeFilter === tag
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Posts Grid */}
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`/placeholder-user.jpg`} alt={post.author} />
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{post.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                          Read more →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* Static sections that appear for all tabs except General Post */}
          {activeMainSection !== "generalPost" && (
            <>
              <section id="labs" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Labs: Hands-On Learning</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SecurityEagles Labs provide a practical environment to apply your knowledge in real-world scenarios. Our
                  labs cover topics such as penetration testing, network configuration, cloud deployments, secure coding,
                  and more. Each lab is designed to be interactive and beginner-friendly, with step-by-step instructions and
                  instant feedback.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Practice cybersecurity skills in a safe, sandboxed environment</li>
                  <li>Experiment with networking tools and protocols</li>
                  <li>Deploy and manage cloud infrastructure</li>
                  <li>Write and test secure code</li>
                  <li>Track your progress and earn badges</li>
                </ul>
                <div className="mt-4">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-green-600 transition-all duration-300"
                    onClick={() => navigate("/labs")}
                  >
                    Explore Labs
                  </Button>
                </div>
              </section>

              <section id="community-overview" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our community is a diverse group of developers, designers, and enthusiasts who come together to build
                  amazing projects, share knowledge, and support each other's growth. We believe in open collaboration and
                  inclusive participation.
                </p>
              </section>

              <section id="getting-started" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  New to our community? Here's how to get started and make the most of your experience with us.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  First, take some time to read through our community guidelines and code of conduct. These documents
                  outline our values and expectations for community interaction.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Next, introduce yourself in our welcome channel and let us know what brings you to our community. We love
                  hearing about your background, interests, and what you hope to achieve here.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <p className="text-green-800 text-sm">
                    <strong>Tip:</strong> Don't hesitate to ask questions! Our community members are always happy to help
                    newcomers get oriented and find their way around.
                  </p>
                </div>
              </section>

              <section id="community-guidelines" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Guidelines</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To maintain a positive and productive environment for everyone, we ask all community members to follow
                  these guidelines when participating in discussions, contributing to projects, or attending events.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Be respectful and considerate in all interactions</li>
                  <li>Help create a welcoming environment for newcomers</li>
                  <li>Share knowledge and resources generously</li>
                  <li>Provide constructive feedback and criticism</li>
                  <li>Respect different perspectives and experiences</li>
                </ul>
              </section>

              <section id="how-to-contribute" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Contribute</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  There are many ways to contribute to our community, regardless of your skill level or available time.
                  Every contribution, no matter how small, helps make our community stronger.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Getting Started:</strong> Check out our "good first issue" labels on GitHub for
                    beginner-friendly contribution opportunities.
                  </p>
                </div>
              </section>

              <section id="resources" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resources</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Community Discord Server</li>
                  <li>GitHub Organization</li>
                  <li>Weekly Newsletter</li>
                  <li>Learning Resources Library</li>
                  <li>Mentorship Program</li>
                </ul>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
