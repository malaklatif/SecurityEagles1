import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Shield, Cloud, Code, Network, ArrowRight, Clock, Users, BookOpen, Award } from "lucide-react"
import { useEffect, useState } from "react"

function AnimatedNumber({ target, duration }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const increment = target / (duration ? duration / 16 : 125)
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev + increment >= target) {
          clearInterval(timer)
          return target
        }
        return prev + increment
      })
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{Math.floor(current).toLocaleString()}</span>
}

export default function LabsPage() {
  const labs = [
    {
      title: "Security Eagles: Cyber Range Essentials",
      description:
        "Kickstart your cybersecurity journey with Security Eagles! Explore hands-on labs, real-world attack simulations, and foundational skills in a safe, supportive environment.",
      icon: Shield,
      level: "Beginner",
      duration: "2 hours",
      enrolled: 1847,
      category: "Cybersecurity",
      difficulty: "Easy",
      credits: "3 Credits",
    },
    {
      title: "Cloud Security with Security Eagles",
      description:
        "Master cloud security concepts and best practices with Security Eagles. Learn to secure AWS, Azure, and GCP environments through interactive, guided labs.",
      icon: Cloud,
      level: "Intermediate",
      duration: "3 hours",
      enrolled: 1292,
      category: "Cloud Computing",
      difficulty: "Medium",
      credits: "4 Credits",
    },
    {
      title: "Secure Coding with Security Eagles",
      description:
        "Develop secure software with Security Eagles! Practice secure coding, code review, and vulnerability mitigation in real applications.",
      icon: Code,
      level: "Intermediate",
      duration: "2.5 hours",
      enrolled: 1156,
      category: "Programming",
      difficulty: "Medium",
      credits: "3 Credits",
    },
    {
      title: "Digital Forensics by Security Eagles",
      description:
        "Investigate cyber incidents and analyze digital evidence with Security Eagles' forensics labs. Learn the latest tools and techniques in a hands-on setting.",
      icon: Network,
      level: "Advanced",
      duration: "4 hours",
      enrolled: 834,
      category: "Forensics",
      difficulty: "Hard",
      credits: "5 Credits",
    },
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700 border-green-200"
      case "Medium":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Hard":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-16 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Security Eagles Labs</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Security Eagles is your gateway to mastering cybersecurity. Our mission is to empower learners and professionals with hands-on, real-world labs, fostering a vibrant community of defenders, innovators, and leaders in IT security. Whether you're a student, educator, or enthusiast, Security Eagles offers a unique, interactive platform to build your skills and confidence in a safe, supportive environment.
            </p>

            {/* Security Eagles Statistics */}
            <div className="flex items-center justify-center space-x-12 bg-gray-50 rounded-xl py-6 px-8 inline-flex">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  <AnimatedNumber target={2847} />+
                </div>
                <div className="text-sm text-gray-600">Eagles Enrolled</div>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  <AnimatedNumber target={150} />+
                </div>
                <div className="text-sm text-gray-600">Partner Institutions</div>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  <AnimatedNumber target={45} />+
                </div>
                <div className="text-sm text-gray-600">Interactive Labs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Lab Courses</h2>
            <p className="text-gray-600">Choose from our comprehensive cybersecurity curriculum</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab, index) => {
              const IconComponent = lab.icon
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className={getDifficultyColor(lab.difficulty)}>
                          {lab.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">{lab.category}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {lab.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{lab.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{lab.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>
                          <AnimatedNumber target={lab.enrolled} duration={1500} /> students
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>{lab.credits}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200 group">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>Start Learning</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Educational CTA */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Security Eagles Movement</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Security Eagles partners with educational institutions, tech communities, and industry leaders to deliver world-class cybersecurity education. Integrate our labs into your curriculum, or join our growing network of Security Eagles to advance your career and protect the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium rounded-lg">
              Become a Security Eagle
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-medium rounded-lg bg-transparent"
            >
              Download Security Eagles Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
