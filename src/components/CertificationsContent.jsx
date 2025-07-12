import { Clock, CheckCircle, Star, Building2, TrendingUp, Target } from "lucide-react"

const CertificationsContent = () => {
  const certifications = [
    {
      id: 1,
      name: "CompTIA Security+",
      status: "Completed",
      progress: 100,
      date: "Dec 2024",
      provider: "CompTIA",
      level: "Intermediate",
      points: 500,
      validUntil: "Dec 2027",
      examCode: "SY0-701",
    },
    {
      id: 2,
      name: "Certified Ethical Hacker (CEH)",
      status: "In Progress",
      progress: 75,
      date: "Jan 2025",
      provider: "EC-Council",
      level: "Advanced",
      points: 750,
      validUntil: "Jan 2028",
      examCode: "312-50",
    },
    {
      id: 3,
      name: "CISSP",
      status: "In Progress",
      progress: 45,
      date: "Mar 2025",
      provider: "ISC2",
      level: "Expert",
      points: 1000,
      validUntil: "Mar 2028",
      examCode: "CISSP",
    },
    {
      id: 4,
      name: "AWS Security Specialty",
      status: "Planned",
      progress: 0,
      date: "Apr 2025",
      provider: "Amazon",
      level: "Advanced",
      points: 800,
      validUntil: "Apr 2028",
      examCode: "SCS-C02",
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-5 h-5 text-blue-600" />
      case "In Progress":
        return <Clock className="w-5 h-5 text-blue-500" />
      default:
        return <Target className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-blue-50 text-blue-700 border border-blue-200"
      case "In Progress":
        return "bg-blue-50 text-blue-600 border border-blue-200"
      default:
        return "bg-gray-50 text-gray-600 border border-gray-200"
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-blue-100 text-blue-800 border border-blue-200"
      case "Advanced":
        return "bg-blue-75 text-blue-700 border border-blue-150"
      case "Intermediate":
        return "bg-blue-50 text-blue-600 border border-blue-100"
      default:
        return "bg-gray-50 text-gray-600 border border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">Professional Certifications</h1>
                <p className="text-gray-600 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  SecurityEagles Learning Path
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-500 mb-1">Overall Progress</div>
                <div className="text-3xl font-semibold text-blue-600">55%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">1</div>
            <div className="text-sm font-medium text-gray-600">Completed</div>
            <div className="text-xs text-gray-500 mt-1">25% of total</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">2</div>
            <div className="text-sm font-medium text-gray-600">In Progress</div>
            <div className="text-xs text-gray-500 mt-1">60% average</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">1</div>
            <div className="text-sm font-medium text-gray-600">Planned</div>
            <div className="text-xs text-gray-500 mt-1">Starting soon</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">1,250</div>
            <div className="text-sm font-medium text-gray-600">Total Points</div>
            <div className="text-xs text-gray-500 mt-1">This quarter</div>
          </div>
        </div>

        {/* Certifications Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">Certification Progress</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Certification
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Provider
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Target Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {certifications.map((cert) => (
                  <tr key={cert.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-3">{getStatusIcon(cert.status)}</div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{cert.name}</div>
                          <div className="text-xs text-gray-500">{cert.examCode}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{cert.provider}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getLevelColor(cert.level)}`}
                      >
                        {cert.level}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getStatusColor(cert.status)}`}
                      >
                        {cert.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {cert.progress > 0 ? (
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${cert.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{cert.progress}%</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">Not started</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{cert.date}</div>
                      {cert.status === "Completed" && (
                        <div className="text-xs text-gray-500">Valid until {cert.validUntil}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Progress Summary</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  You're making excellent progress on your certification journey. Keep up the momentum to achieve your
                  professional development goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationsContent
