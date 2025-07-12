import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { MapPin, Briefcase, Calendar, CheckCircle } from "lucide-react"
import { Link, useParams } from "react-router-dom"

export default function InternshipDetailPage() {
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
