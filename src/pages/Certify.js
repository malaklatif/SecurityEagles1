import { useState } from "react"
import { Button } from "../components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState("roles")
  const [selectedCert, setSelectedCert] = useState(null)

  const roleCertifications = [
    {
      title: "Frontend Developer (React)",
      description: "Master React development with advanced concepts and best practices",
      level: "Advanced",
      duration: "90 min",
      questions: "15-20",
      category: "Software Engineer",
    },
    {
      title: "Software Engineer",
      description: "Comprehensive assessment of software engineering fundamentals",
      level: "Intermediate",
      duration: "105 min",
      questions: "20-25",
      category: "Software Engineer",
    },
    {
      title: "Software Engineer Intern",
      description: "Entry-level assessment for aspiring software engineers",
      level: "Beginner",
      duration: "75 min",
      questions: "12-18",
      category: "Software Engineer",
    },
    {
      title: "Backend Developer (Node.js)",
      description: "Test your skills in building scalable backend systems with Node.js",
      level: "Advanced",
      duration: "100 min",
      questions: "18-25",
      category: "Infrastructure",
    },
    {
      title: "DevOps Engineer",
      description: "Evaluate your expertise in CI/CD, automation, and cloud infrastructure",
      level: "Intermediate",
      duration: "90 min",
      questions: "15-20",
      category: "DevOps",
    },
    {
      title: "QA Engineer",
      description: "Assess your knowledge of software testing methodologies and tools",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Cyber Security",
    },
    {
      title: "Cyber Security Analyst",
      description: "Evaluate your ability to monitor, detect, and respond to security threats.",
      level: "Intermediate",
      duration: "90 min",
      questions: "15-20",
      category: "Cyber Security",
    },
    {
      title: "Penetration Tester",
      description: "Test your skills in identifying and exploiting security vulnerabilities.",
      level: "Advanced",
      duration: "120 min",
      questions: "20-25",
      category: "Cyber Security",
    },
    {
      title: "SOC Analyst",
      description: "Assess your expertise in security operations and incident response.",
      level: "Intermediate",
      duration: "80 min",
      questions: "12-18",
      category: "Cyber Security",
    },
    {
      title: "Security Engineer",
      description: "Comprehensive assessment of designing and implementing secure systems.",
      level: "Advanced",
      duration: "100 min",
      questions: "18-22",
      category: "Cyber Security",
    },
  ]

  const skillCertifications = [
    {
      title: "Angular (Basic)",
      description: "Fundamental Angular concepts and component development",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Software Engineer",
    },
    {
      title: "Angular (Intermediate)",
      description: "Advanced Angular features and application architecture",
      level: "Intermediate",
      duration: "75 min",
      questions: "15-20",
      category: "Software Engineer",
    },
    {
      title: "C# (Basic)",
      description: "Core C# programming concepts and object-oriented principles",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Software Engineer",
    },
    {
      title: "CSS (Basic)",
      description: "Styling fundamentals and responsive design principles",
      level: "Beginner",
      duration: "45 min",
      questions: "8-12",
      category: "Software Engineer",
    },
    {
      title: "Go (Intermediate)",
      description: "Advanced Go programming and concurrent programming",
      level: "Intermediate",
      duration: "75 min",
      questions: "15-20",
      category: "Infrastructure",
    },
    {
      title: "Go (Basic)",
      description: "Go language fundamentals and basic programming concepts",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Infrastructure",
    },
    {
      title: "JavaScript (Basic)",
      description: "Core JavaScript concepts and DOM manipulation",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Software Engineer",
    },
    {
      title: "Python (Basic)",
      description: "Python fundamentals and data structure manipulation",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Software Engineer",
    },
    {
      title: "React (Basic)",
      description: "React components, hooks, and state management basics",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Software Engineer",
    },
    {
      title: "TypeScript (Intermediate)",
      description: "Type safety, interfaces, and advanced TypeScript features",
      level: "Intermediate",
      duration: "70 min",
      questions: "12-18",
      category: "Software Engineer",
    },
    {
      title: "SQL (Advanced)",
      description: "Complex queries, optimization, and database design principles",
      level: "Advanced",
      duration: "90 min",
      questions: "18-25",
      category: "Infrastructure",
    },
    {
      title: "Docker (Intermediate)",
      description: "Containerization, orchestration, and Docker best practices",
      level: "Intermediate",
      duration: "60 min",
      questions: "10-15",
      category: "DevOps",
    },
    {
      title: "Network Security (Basic)",
      description: "Fundamentals of securing networks and understanding common threats.",
      level: "Beginner",
      duration: "50 min",
      questions: "10-15",
      category: "Cyber Security",
    },
    {
      title: "Incident Response (Intermediate)",
      description: "Processes and best practices for responding to security incidents.",
      level: "Intermediate",
      duration: "70 min",
      questions: "12-18",
      category: "Cyber Security",
    },
    {
      title: "Ethical Hacking (Advanced)",
      description: "Advanced penetration testing and vulnerability assessment skills.",
      level: "Advanced",
      duration: "90 min",
      questions: "18-25",
      category: "Cyber Security",
    },
    {
      title: "Digital Forensics (Intermediate)",
      description: "Techniques for investigating and analyzing cyber incidents.",
      level: "Intermediate",
      duration: "75 min",
      questions: "15-20",
      category: "Cyber Security",
    },
    {
      title: "Application Security (Basic)",
      description: "Securing web and mobile applications from common vulnerabilities.",
      level: "Beginner",
      duration: "60 min",
      questions: "10-15",
      category: "Cyber Security",
    },
  ]

  // Pro Certification Data and Section
  const proCyberCerts = [
    "Pro Certificate: Advanced Ethical Hacking",
    "Pro Certificate: Cybersecurity Leadership",
    "Pro Certificate: Digital Forensics Expert",
    "Pro Certificate: Cloud Security Architect",
    "Pro Certificate: Incident Response Specialist",
    "Pro Certificate: Penetration Testing Master",
    "Pro Certificate: Security Operations Center Analyst",
    "Pro Certificate: Malware Analysis Specialist",
    "Pro Certificate: Application Security Professional",
    "Pro Certificate: Network Defense Architect",
  ];

  const proCloudCerts = [
    "Pro Certificate: Multi-Cloud Solutions Architect",
    "Pro Certificate: DevOps Engineering Master",
    "Pro Certificate: Kubernetes Expert",
    "Pro Certificate: Serverless Architecture Specialist",
    "Pro Certificate: Cloud Migration Expert",
    "Pro Certificate: AWS Security Professional",
    "Pro Certificate: Azure Solutions Architect",
    "Pro Certificate: Google Cloud Platform Expert",
    "Pro Certificate: Cloud Cost Optimization Specialist",
    "Pro Certificate: Hybrid Cloud Integrator",
  ];

  const proDataAICerts = [
    "Pro Certificate: Machine Learning Engineer",
    "Pro Certificate: Data Science Leadership",
    "Pro Certificate: AI Solutions Architect",
    "Pro Certificate: Big Data Analytics Expert",
    "Pro Certificate: MLOps Professional",
    "Pro Certificate: Deep Learning Specialist",
    "Pro Certificate: Data Visualization Master",
    "Pro Certificate: Natural Language Processing Expert",
    "Pro Certificate: Computer Vision Professional",
    "Pro Certificate: Data Engineering Architect",
  ];

  const CertificationSection = ({
    title,
    description,
    certifications,
    viewAllText,
    titleColor = "text-black",
  }) => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="border-b-2 border-black pb-2">
          <h2 className={`text-2xl font-semibold ${titleColor}`}>{title}</h2>
        </div>

        {description && <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>}

        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-black hover:text-gray-700 cursor-pointer text-sm font-medium">{cert}</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          ))}
        </div>

        <Button variant="link" className="p-0 h-auto text-black hover:text-gray-700 text-sm">
          {viewAllText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  // Helper to get label for certification type
  const getCertType = (level) => {
    if (level === "Advanced") return "SPECIALIZATION";
    return "FOUNDATION";
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/60 backdrop-blur-sm border border-white/20 text-gray-600 mb-4">
            <span>Certification Tests</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-green-500 to-blue-900 bg-clip-text text-transparent">
            Get Certified
          </h1>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-green-500/10 transition-all duration-300">
                  <h2 className="text-xl font-bold mb-4 text-blue-100">Stand out from the crowd</h2>
                  <p className="text-blue-50 leading-relaxed">
                    Get certified in technical skills by taking the HackerRank Certification Test
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-green-500/10 transition-all duration-300">
                  <h2 className="text-xl font-bold mb-4 text-blue-100">Standardised Assessment</h2>
                  <p className="text-blue-50 leading-relaxed">
                    Assessments are organised around specific skills and are carefully curated based on years of
                    recruiting data from 2000+ companies
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-green-500/10 transition-all duration-300">
                  <h2 className="text-xl font-bold mb-4 text-blue-100">Enrich your profile</h2>
                  <p className="text-blue-50 leading-relaxed">
                    Upon successfully clearing an assessment, you can promote yourself using the HackerRank certificate
                    to peers and employers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("roles")}
                  className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                    activeTab === "roles"
                      ? "bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  Roles
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                    activeTab === "skills"
                      ? "bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  Skills
                </button>
                  <button
                  onClick={() => setActiveTab("procert")}
                    className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                    activeTab === "procert"
                        ? "bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                    }`}
                  >
                  Pro Certification
                  </button>
              </div>
            </div>
          </div>

          {/* Role Certifications by Category */}
          {activeTab === "roles" && (
            <section className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
                Get Your Roles Certified
              </h2>
              {["Infrastructure", "DevOps", "Cyber Security", "Software Engineer"].map((cat) => (
                <div key={cat} className="mb-12 max-w-6xl mx-auto font-bold text-3xl">
                  <h3 className="text-3xl font-bold mb-6 text-blue-900">{cat}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {roleCertifications.filter(cert => cert.category === cat).map((cert, index) => (
                      <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/90 cursor-pointer"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(cert.level)}`}
                            >
                              {cert.level}
                            </span>
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-900 to-green-500 rounded-full"></div>
                          </div>
                          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{cert.description}</p>
                          <div className="flex justify-between text-xs text-gray-500 mb-6">
                            <span className="bg-gray-100 px-2 py-1 rounded-md">{cert.duration}</span>
                            <span className="bg-gray-100 px-2 py-1 rounded-md">{getCertType(cert.level)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Skills Certifications by Category */}
          {activeTab === "skills" && (
            <section className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
                Get Your Skills Certified
              </h2>
              {["Infrastructure", "DevOps", "Cyber Security", "Software Engineer"].map((cat) => (
                <div key={cat} className="mb-12 max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-blue-900">{cat}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {skillCertifications.filter(cert => cert.category === cat).map((cert, index) => (
                      <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/90 cursor-pointer"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(cert.level)}`}
                            >
                              {cert.level}
                            </span>
                            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-900 rounded-full"></div>
                          </div>
                          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{cert.description}</p>
                          <div className="flex justify-between text-xs text-gray-500 mb-6">
                            <span className="bg-gray-100 px-2 py-1 rounded-md">{cert.duration}</span>
                            <span className="bg-gray-100 px-2 py-1 rounded-md">{getCertType(cert.level)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Pro Certification Section as Tab */}
          {activeTab === "procert" && (
            <section className="animate-in fade-in duration-500 mb-12">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">Pro Certifications</h2>
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Pro Certificate - Cybersecurity */}
                  <div>
                    <CertificationSection
                      title="Pro Certificate - Cybersecurity"
                      description="Advanced cybersecurity certifications for professionals ready to lead security initiatives and protect organizations from evolving threats."
                      certifications={proCyberCerts}
                      viewAllText="View all Cybersecurity Pro certificates"
                    />
                  </div>
                  {/* Pro Certificate - Cloud Architecture */}
                  <div>
                    <CertificationSection
                      title="Pro Certificate - Cloud Architecture"
                      description="Expert-level cloud certifications designed for architects and engineers building scalable, resilient cloud infrastructure solutions."
                      certifications={proCloudCerts}
                      viewAllText="View all Cloud Architecture Pro certificates"
                    />
                  </div>
                  {/* Pro Certificate - Data & AI */}
                  <div>
                    <CertificationSection
                      title="Pro Certificate - Data & AI"
                      description="Professional data science and AI certifications for experts driving innovation through machine learning and advanced analytics."
                      certifications={proDataAICerts}
                      viewAllText="View all Data & AI Pro certificates"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in duration-300">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedCert(null)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-blue-900">{selectedCert.title}</h2>
            <p className="text-gray-600 mb-4">{selectedCert.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold border border-gray-200">Level: {selectedCert.level}</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold border border-gray-200">Duration: {selectedCert.duration}</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold border border-gray-200">Questions: {selectedCert.questions}</span>
              {selectedCert.category && (
                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold border border-gray-200">Category: {selectedCert.category}</span>
              )}
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-900 to-green-500 hover:from-blue-950 hover:to-green-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Get Certified
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
