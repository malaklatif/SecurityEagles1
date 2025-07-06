
import { useState } from "react"
import { ChevronRight, Copy, Edit } from "lucide-react"
import { Button } from "../components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const navigationSections = [
    {
      title: "GETTING STARTED",
      items: [
        { title: "Welcome to Community", href: "#" },
        { title: "Community Guidelines", href: "#" },
        { title: "Code of Conduct", href: "#" },
        { title: "FAQ", href: "#" },
      ],
    },
    {
      title: "CONTRIBUTING",
      items: [
        { title: "How to Contribute", href: "#" },
        {
          title: "Development Setup",
          href: "#",
          subitems: [
            { title: "Local Environment", href: "#" },
            { title: "Docker Setup", href: "#" },
            { title: "Testing", href: "#" },
            { title: "Code Style", href: "#" },
            { title: "Pull Requests", href: "#" },
            { title: "Issue Reporting", href: "#" },
          ],
        },
      ],
    },
    {
      title: "COMMUNITY",
      items: [
        { title: "Members", href: "#" },
        { title: "Events", href: "#" },
        { title: "Projects", href: "#" },
        { title: "Resources", href: "#" },
        { title: "Discussions", href: "#" },
        { title: "Support", href: "#" },
        { title: "Mentorship", href: "#" },
        { title: "Partnerships", href: "#" },
        { title: "Newsletter", href: "#" },
        { title: "Blog", href: "#" },
      ],
    },
    {
      title: "GUIDES",
      items: [
        { title: "Best Practices", href: "#" },
        { title: "Tutorials", href: "#" },
        { title: "API Documentation", href: "#" },
      ],
    },
  ]

  const tableOfContents = [
    { title: "Community Overview", href: "#community-overview" },
    { title: "Getting Started", href: "#getting-started" },
    { title: "Community Guidelines", href: "#community-guidelines" },
    { title: "How to Contribute", href: "#how-to-contribute" },
    { title: "Code of Conduct", href: "#code-of-conduct" },
    { title: "Resources", href: "#resources" },
    { title: "Events and Meetups", href: "#events" },
    { title: "Support Channels", href: "#support" },
    { title: "Recognition Program", href: "#recognition" },
    { title: "FAQ", href: "#faq" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
          <div className="p-6">
            {navigationSections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{section.title}</h3>
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.subitems ? (
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-sm text-gray-700 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50">
                            {item.title}
                            <ChevronRight className="w-4 h-4" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="ml-4 mt-1 space-y-1">
                            {item.subitems.map((subitem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subitem.href}
                                className="block text-sm text-gray-600 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50"
                              >
                                {subitem.title}
                              </a>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <a
                          href={item.href}
                          className="block text-sm text-gray-700 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50"
                        >
                          {item.title}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">Getting Started with Our Community</h1>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                  <Copy className="w-4 h-4 mr-1" />
                  Copy link
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit on GitHub
                </Button>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Welcome to our vibrant community! This documentation will help you get started, understand our
                guidelines, and learn how to contribute effectively to our projects.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our community is built on collaboration, learning, and mutual support. Whether you're a beginner or an
                experienced developer, there's a place for you here.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In this guide, we'll walk you through everything you need to know to become an active community member.
              </p>
            </div>
          </div>

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
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-64 bg-white border-l border-gray-200 h-screen sticky top-0 overflow-y-auto">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">On this page</h3>
            <nav className="space-y-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm text-gray-600 hover:text-blue-600 py-1 hover:bg-gray-50 rounded px-2 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}
