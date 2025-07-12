import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select"
import { MapPin, Briefcase, Calendar, CheckCircle, Search } from "lucide-react"
import { Link, useParams } from "react-router-dom"

// Mock data for internships
const mockInternships = [
  {
    id: "se-001",
    title: "Software Engineering Intern",
    company: "Innovate Solutions",
    location: "Casablanca, Morocco",
    duration: "Summer 2025 (12 weeks)",
    description:
      "Join our engineering team to work on cutting-edge web applications. You'll gain hands-on experience with React, Node.js, and cloud platforms.",
    responsibilities: [
      "Develop and maintain features for our flagship web application.",
      "Participate in code reviews and contribute to team discussions.",
      "Write unit and integration tests to ensure code quality.",
      "Collaborate with product and design teams to implement new features.",
    ],
    requirements: [
      "Currently pursuing a Bachelor's or Master's degree in Computer Science or related field.",
      "Proficiency in JavaScript/TypeScript and a modern web framework (React, Vue, Angular).",
      "Familiarity with Node.js and RESTful APIs.",
      "Strong problem-solving skills and attention to detail.",
    ],
    benefits: [
      "Competitive intern salary.",
      "Mentorship from senior engineers.",
      "Opportunity for full-time conversion.",
      "Free daily meals and snacks.",
    ],
  },
  {
    id: "pd-002",
    title: "Product Design Intern",
    company: "Creative Minds Studio",
    location: "Rabat, Morocco",
    duration: "Fall 2025 (16 weeks)",
    description:
      "Contribute to the design of user interfaces and experiences for our mobile and web products. Work closely with product managers and engineers.",
    responsibilities: [
      "Conduct user research and usability testing.",
      "Create wireframes, prototypes, and high-fidelity mockups.",
      "Collaborate with product managers to define user stories and requirements.",
      "Present design concepts and solicit feedback from stakeholders.",
    ],
    requirements: [
      "Currently pursuing a degree in UX/UI Design, Graphic Design, or a related field.",
      "Proficiency with design tools like Figma, Sketch, or Adobe XD.",
      "Strong understanding of user-centered design principles.",
      "Portfolio showcasing design projects.",
    ],
    benefits: [
      "Opportunity to work on real-world products.",
      "Mentorship from experienced designers.",
      "Flexible working hours.",
      "Access to design workshops and conferences.",
    ],
  },
  {
    id: "mk-003",
    title: "Marketing Intern",
    company: "Moroccan Brands Co.",
    location: "Marrakech, Morocco",
    duration: "Spring 2025 (10 weeks)",
    description:
      "Assist our marketing team with social media campaigns, content creation, and market research. Learn about digital marketing strategies.",
    responsibilities: [
      "Manage social media content calendar and post engaging content.",
      "Assist in the creation of marketing materials (e.g., blog posts, email newsletters).",
      "Conduct market research and competitor analysis.",
      "Support event planning and execution.",
    ],
    requirements: [
      "Currently pursuing a degree in Marketing, Communications, or a related field.",
      "Excellent written and verbal communication skills.",
      "Familiarity with social media platforms and marketing tools.",
      "Ability to work independently and as part of a team.",
    ],
    benefits: [
      "Exposure to local marketing campaigns.",
      "Training in various marketing tools and analytics.",
      "Networking opportunities within the industry.",
      "Hybrid work model.",
    ],
  },
  {
    id: "ds-004",
    title: "Data Science Intern",
    company: "Data Insights Morocco",
    location: "Remote (Morocco)",
    duration: "Summer 2025 (12 weeks)",
    description:
      "Analyze large datasets to extract insights and build predictive models. Experience with Python and SQL is a plus.",
    responsibilities: [
      "Clean, process, and analyze large datasets.",
      "Develop and implement machine learning models.",
      "Create visualizations to communicate insights.",
      "Collaborate with engineering and product teams on data-driven initiatives.",
    ],
    requirements: [
      "Currently pursuing a Bachelor's or Master's degree in Data Science, Statistics, Computer Science, or related field.",
      "Proficiency in Python and relevant libraries (Pandas, NumPy, Scikit-learn).",
      "Experience with SQL and relational databases.",
      "Understanding of statistical modeling and machine learning concepts.",
    ],
    benefits: [
      "Work on challenging real-world data problems.",
      "Mentorship from senior data scientists.",
      "Flexible remote work environment.",
      "Access to cutting-edge data tools and technologies.",
    ],
  },
  {
    id: "fa-005",
    title: "Financial Analyst Intern",
    company: "Atlas Capital",
    location: "Casablanca, Morocco",
    duration: "Summer 2025 (10 weeks)",
    description:
      "Support our finance team with financial modeling, data analysis, and reporting. Gain exposure to investment banking operations.",
    responsibilities: [
      "Assist in financial modeling and valuation analysis.",
      "Prepare financial reports and presentations.",
      "Conduct industry and company research.",
      "Support due diligence processes.",
    ],
    requirements: [
      "Currently pursuing a Bachelor's or Master's degree in Finance, Economics, Accounting, or related field.",
      "Strong analytical and quantitative skills.",
      "Proficiency in Microsoft Excel and PowerPoint.",
      "Excellent communication and interpersonal skills.",
    ],
    benefits: [
      "Hands-on experience in the financial industry.",
      "Mentorship from experienced financial professionals.",
      "Networking opportunities.",
      "Potential for full-time employment.",
    ],
  },
  {
    id: "ur-006",
    title: "UX Research Intern",
    company: "Innovate Labs",
    location: "Rabat, Morocco",
    duration: "Fall 2025 (14 weeks)",
    description:
      "Conduct user research, usability testing, and synthesize findings to inform product design decisions. Strong communication skills required.",
    responsibilities: [
      "Plan and conduct qualitative and quantitative user research studies.",
      "Facilitate usability testing sessions.",
      "Analyze research data and synthesize findings into actionable insights.",
      "Communicate research findings to design and product teams.",
    ],
    requirements: [
      "Currently pursuing a degree in Human-Computer Interaction, Psychology, Anthropology, or related field.",
      "Familiarity with various research methodologies (interviews, surveys, usability tests).",
      "Strong analytical and communication skills.",
      "Experience with research tools (e.g., UserTesting, Qualtrics) is a plus.",
    ],
    benefits: [
      "Opportunity to shape product development.",
      "Mentorship from senior UX researchers.",
      "Collaborative and innovative work environment.",
      "Access to a wide range of research resources.",
    ],
  },
  {
    id: "cw-007",
    title: "Content Writing Intern",
    company: "Digital Media Group",
    location: "Fes, Morocco",
    duration: "Spring 2025 (8 weeks)",
    description:
      "Create engaging content for our blog, website, and social media channels. Develop your writing and editing skills.",
    responsibilities: [
      "Write and edit blog posts, articles, and website copy.",
      "Develop content for social media platforms.",
      "Assist with content strategy and keyword research.",
      "Ensure all content is consistent with brand voice and guidelines.",
    ],
    requirements: [
      "Currently pursuing a degree in Journalism, English, Marketing, or a related field.",
      "Exceptional writing, editing, and proofreading skills.",
      "Ability to adapt writing style to different audiences and platforms.",
      "Familiarity with SEO best practices is a plus.",
    ],
    benefits: [
      "Build a strong portfolio of published work.",
      "Mentorship from experienced content strategists.",
      "Flexible remote work schedule.",
      "Opportunity to learn about digital content marketing.",
    ],
  },
  {
    id: "op-008",
    title: "Operations Intern",
    company: "Logistics Solutions Morocco",
    location: "Tangier, Morocco",
    duration: "Summer 2025 (12 weeks)",
    description:
      "Assist with daily operations, supply chain management, and process optimization. Learn about the intricacies of logistics.",
    responsibilities: [
      "Support daily operational tasks and process improvements.",
      "Assist in supply chain analysis and optimization.",
      "Prepare operational reports and presentations.",
      "Collaborate with cross-functional teams to resolve operational issues.",
    ],
    requirements: [
      "Currently pursuing a Bachelor's degree in Operations Management, Supply Chain Management, Business Administration, or related field.",
      "Strong analytical and organizational skills.",
      "Proficiency in Microsoft Office Suite, especially Excel.",
      "Ability to work in a fast-paced environment.",
    ],
    benefits: [
      "Hands-on experience in logistics and supply chain.",
      "Mentorship from operations leaders.",
      "Exposure to various business functions.",
      "Opportunity to contribute to efficiency improvements.",
    ],
  },
]

// InternshipSearchSection component for searching internships
function InternshipSearchSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")

  const handleSearch = () => {
    console.log("Searching for:", { searchTerm, location, category })
    // In a real app, you'd fetch data based on these parameters
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Dream Internship
            </h1>
            <p className="mx-auto max-w-[800px] text-blue-700 md:text-xl lg:text-lg">
              Explore thousands of internship opportunities from top companies in Morocco.
            </p>
          </div>
          <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-lg">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by keyword, title, or company"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full sm:w-[180px] rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="casablanca">Casablanca</SelectItem>
                <SelectItem value="rabat">Rabat</SelectItem>
                <SelectItem value="marrakech">Marrakech</SelectItem>
                <SelectItem value="fes">Fes</SelectItem>
                <SelectItem value="tangier">Tangier</SelectItem>
                <SelectItem value="agadir">Agadir</SelectItem>
                <SelectItem value="remote">Remote (Morocco)</SelectItem>
              </SelectContent>
            </Select>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full sm:w-[180px] rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="it">IT & Software</SelectItem>
                <SelectItem value="marketing">Marketing & Communication</SelectItem>
                <SelectItem value="finance">Finance & Accounting</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="tourism">Tourism & Hospitality</SelectItem>
                <SelectItem value="design">Design & Creative</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSearch} className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// InternshipCard component for displaying internship listings
function InternshipCard({ id, title, company, location, duration, description }) {
  return (
    <Card className="flex flex-col h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-blue-700">{title}</CardTitle>
        <CardDescription className="flex items-center space-x-2 text-gray-600">
          <Briefcase className="h-4 w-4 text-gray-500" />
          <span>{company}</span>
        </CardDescription>
        <CardDescription className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span>{location}</span>
        </CardDescription>
        <CardDescription className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span>{duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/internships/${id}`} className="w-full">
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

// InternshipDetailPage component
export function InternshipDetailPage() {
  const { id } = useParams()

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <Card className="shadow-lg border-gray-200">
            <CardHeader className="pb-4 border-b border-gray-200">
              <CardTitle className="text-3xl font-bold text-blue-800">Internship Detail</CardTitle>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-700">
                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                  Company Name
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  Location
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  Duration
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">About the Internship</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is a sample internship description. The internship ID is: {id}
                </p>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                <Link to="/internships">
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent">
                    Back to Listings
                  </Button>
                </Link>
                <Button className="bg-green-500 hover:bg-green-600 text-white">Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default function InternshipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <InternshipSearchSection />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-4xl font-bold tracking-tight text-blue-800 sm:text-5xl">
                Latest Internship Opportunities
              </h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover internships that match your skills and career aspirations.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mockInternships.map((internship) => (
                <InternshipCard key={internship.id} {...internship} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
