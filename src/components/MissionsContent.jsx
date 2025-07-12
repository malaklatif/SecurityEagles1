import { Target, Shield, Users, Award, ChevronRight, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { Link } from "react-router-dom"

const MissionsContent = () => {
  const missions = [
    {
      id: 1,
      title: "Complete Security+ Certification",
      description: "Master fundamental cybersecurity concepts and earn your CompTIA Security+ certification",
      progress: 100,
      status: "Completed",
      deadline: "Dec 2024",
      points: 500,
    },
    {
      id: 2,
      title: "Network Security Mastery",
      description: "Learn advanced network security techniques and implement security measures",
      progress: 75,
      status: "In Progress",
      deadline: "Jan 2025",
      points: 300,
    },
    {
      id: 3,
      title: "Ethical Hacking Fundamentals",
      description: "Understand penetration testing methodologies and ethical hacking principles",
      progress: 45,
      status: "In Progress",
      deadline: "Feb 2025",
      points: 400,
    },
    {
      id: 4,
      title: "Incident Response Training",
      description: "Develop skills in cybersecurity incident detection, analysis, and response",
      progress: 0,
      status: "Upcoming",
      deadline: "Mar 2025",
      points: 350,
    },
  ]

  const getStatusVariant = (status) => {
    switch (status) {
      case "Completed":
        return "success" // Custom variant for success
      case "In Progress":
        return "default"
      default:
        return "secondary"
    }
  }

  // Function to determine the progress bar color
  const getProgressIndicatorColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500" // Green for completed
      case "In Progress":
      case "Upcoming":
        return "bg-blue-500" // Blue for in progress/upcoming
      default:
        return "bg-gray-500" // Fallback color
    }
  }

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Missions</h1>
        <div className="text-sm text-gray-600">SecurityEagles Learning Objectives</div>
      </div>

     

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center shadow-sm">
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Missions</h3>
            <p className="text-3xl font-bold text-green-600">4</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-sm">
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Points Earned</h3>
            <p className="text-3xl font-bold text-blue-600">800</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-sm">
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-silverCustom" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Community Rank</h3>
            <p className="text-3xl font-bold text-silverCustom">Silver</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-sm">
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Days Active</h3>
            <p className="text-3xl font-bold text-orange-600">127</p>
          </CardContent>
        </Card>
      </div>

      {/* Mission List */}
      <Card className="shadow-lg">
        <CardHeader className="border-b px-6 py-4">
          <CardTitle className="text-xl font-semibold text-gray-900">Current Missions</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {missions.map((mission) => (
              <Link
                key={mission.id}
                to={`/missions/${mission.id}`}
                className="block px-6 py-5 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{mission.title}</h3>
                      <Badge variant={getStatusVariant(mission.status)}>{mission.status}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{mission.description}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Deadline: {mission.deadline}</span>
                        <span>•</span>
                        <span>{mission.points} points</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{mission.progress}%</span>
                    </div>
                    <Progress
                      value={mission.progress}
                      className="h-2"
                      indicatorClassName={getProgressIndicatorColor(mission.status)}
                    />
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Community Goals */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Community Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
            <span className="text-gray-700 font-medium">Complete 5 Certifications</span>
            <span className="text-sm font-semibold text-blue-600">1/5</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
            <span className="text-gray-700 font-medium">Reach 2000 Learning Points</span>
            <span className="text-sm font-semibold text-blue-600">800/2000</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
            <span className="text-gray-700 font-medium">Mentor 3 New Members</span>
            <span className="text-sm font-semibold text-blue-600">0/3</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MissionsContent
