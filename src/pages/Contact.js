import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { User, Mail, MessageSquare } from "lucide-react"
import Logo from "../Image/Image1.jpg"
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
     

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Side - Illustration */}
        <div className="lg:w-1/2 flex items-center justify-center bg-white">
          <img
            src={Logo}
            alt="Contact illustration with envelopes and chat bubbles"
            className="object-cover max-w-xl w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">CONTACT US</h1>
              <p className="text-gray-600 leading-relaxed">
               Welcome To Security Eagles, We are here to help you with your queries and concerns.
              </p>
            </div>

            <form className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="pl-12 h-12 border-gray-200 focus:border-green-600 focus:ring-green-600"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Your Subject"
                  className="pl-12 h-12 border-gray-200 focus:border-green-600 focus:ring-green-600"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="pl-12 pt-4 border-gray-200 focus:border-purple-600 focus:ring-purple-600 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-green-400 to-green-800 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200"
              >
                START CHAT
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
