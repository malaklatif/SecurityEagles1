import { User, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const courses = [
  {
    id: 1,
    title: "Network Security Architecture",
    code: "CS-401",
    progress: 87,
    status: "active",
    modules: 8,
    completedModules: 7,
    estimatedHours: 24,
    completedHours: 21,
    currentModule: "Advanced Firewall Configuration",
    instructor: "Dr. Sarah Chen",
    deadline: "2024-02-15",
    grade: "A-",
  },
  {
    id: 2,
    title: "Application Security Testing",
    code: "CS-402",
    progress: 64,
    status: "active",
    modules: 10,
    completedModules: 6,
    estimatedHours: 32,
    completedHours: 20,
    currentModule: "Automated Security Testing",
    instructor: "Prof. Michael Rodriguez",
    deadline: "2024-02-28",
    grade: "B+",
  },
  // ...add more courses as needed
];

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-50 text-green-700 border-green-200";
    case "active":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "scheduled":
      return "bg-gray-50 text-gray-700 border-gray-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
};

const getGradeColor = (grade) => {
  if (grade === "A" || grade === "A-") return "text-green-600";
  if (grade === "B+" || grade === "B") return "text-blue-600";
  if (grade === "B-" || grade === "C+") return "text-yellow-600";
  return "text-gray-500";
};

export default function LearningPath() {
    const totalProgress = 80; // placeholder value
    const completedCourses = 3; // placeholder value
    const totalCourses = 5; // placeholder value
    const totalHours = 120; // placeholder value
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Professional Development Dashboard</h1>
              <p className="text-gray-600 mt-1">Cybersecurity Certification Program</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Student ID</div>
                <div className="font-medium">CS-2024-001</div>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        <Card className="bg-white shadow-sm border mt-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">Program Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-700">Cybersecurity Professional Certificate</span>
              <span className="text-gray-600">{totalProgress}% Complete</span>
            </div>
            <Progress value={totalProgress} className="h-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-semibold text-gray-900">{completedCourses}</div>
                <div className="text-sm text-gray-600">Completed Courses</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-semibold text-gray-900">{totalCourses}</div>
                <div className="text-sm text-gray-600">Total Courses</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-semibold text-gray-900">{totalHours}</div>
                <div className="text-sm text-gray-600">Total Program Hours</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm border mt-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">Course Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {courses.map((course, index) => (
              <div key={course.id}>
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                        <Badge variant="outline" className={getStatusColor(course.status)}>
                          {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>
                          Course Code: {course.code} • Instructor: {course.instructor}
                        </div>
                        <div>Current Module: {course.currentModule}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Progress</div>
                        <div className="text-lg font-semibold text-gray-900">{course.progress}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Due Date</div>
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(course.deadline).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 space-y-2">
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>
                          Modules: {course.completedModules}/{course.modules}
                        </span>
                        <span>
                          Hours: {course.completedHours}/{course.estimatedHours}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant={course.status === "completed" ? "outline" : "default"}
                        size="sm"
                        disabled={course.status === "scheduled"}
                        className="w-full lg:w-auto"
                      >
                        {course.status === "completed"
                          ? "View Certificate"
                          : course.status === "scheduled"
                          ? "Starts Soon"
                          : "Continue Course"}
                      </Button>
                    </div>
                  </div>
                </div>
                {index < courses.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="max-w-2xl mt-8">
          <Card className="bg-white shadow-sm border">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-gray-900">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses
                .filter((course) => course.status === "active")
                .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
                .map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{course.code}</div>
                      <div className="text-sm text-gray-600">{course.title}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {new Date(course.deadline).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {Math.ceil(
                          (new Date(course.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                        )}{" "}
                        days
                      </div>
                    </div>
                  </div>
                ))}
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}