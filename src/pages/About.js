import React from 'react';
import { Shield, Users, BookOpen, Award, Target, Zap, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            About <span className="text-blue-400">Security Eagles</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation of cybersecurity professionals through innovative learning, 
            hands-on experience, and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize cybersecurity education and create a world where every organization 
                has access to skilled security professionals. We believe that cybersecurity is not 
                just a technical skill, but a fundamental aspect of our digital future.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through our comprehensive training programs, hands-on labs, and vibrant community, 
                we're building the next generation of cybersecurity experts who will protect our 
                digital infrastructure.
              </p>
            </div>
            <div className="bg-blue-900/30 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the leading platform for cybersecurity education, fostering a global 
                community of security professionals who are equipped to tackle the evolving 
                challenges of our digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Students Trained", icon: Users },
              { number: "500+", label: "Hands-on Labs", icon: BookOpen },
              { number: "95%", label: "Success Rate", icon: Award },
              { number: "50+", label: "Expert Instructors", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hands-on Labs",
                description: "Real-world cybersecurity scenarios in safe, controlled environments",
                icon: Zap,
                color: "text-yellow-400"
              },
              {
                title: "Expert Training",
                description: "Learn from industry professionals with years of experience",
                icon: Shield,
                color: "text-blue-400"
              },
              {
                title: "Community Support",
                description: "Join a vibrant community of cybersecurity enthusiasts",
                icon: Users,
                color: "text-green-400"
              },
              {
                title: "Certification Prep",
                description: "Prepare for industry-recognized cybersecurity certifications",
                icon: Award,
                color: "text-purple-400"
              },
              {
                title: "Latest Technology",
                description: "Stay current with cutting-edge security tools and techniques",
                icon: Globe,
                color: "text-cyan-400"
              },
              {
                title: "Career Guidance",
                description: "Get personalized advice for your cybersecurity career path",
                icon: Target,
                color: "text-red-400"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-colors">
                <div className={`w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                bio: "Former cybersecurity consultant with 15+ years of experience in enterprise security",
                image: "👨‍💼"
              },
              {
                name: "Sarah Johnson",
                role: "Head of Education",
                bio: "Certified instructor with expertise in penetration testing and ethical hacking",
                image: "👩‍🏫"
              },
              {
                name: "Mike Rodriguez",
                role: "Lead Security Engineer",
                bio: "Specialist in cloud security and incident response with Fortune 500 experience",
                image: "👨‍💻"
              },
              {
                name: "Emily Davis",
                role: "Community Manager",
                bio: "Passionate about building inclusive cybersecurity communities and mentorship programs",
                image: "👩‍💼"
              },
              {
                name: "David Kim",
                role: "Research Director",
                bio: "Leading research in emerging threats and developing cutting-edge security solutions",
                image: "👨‍🔬"
              },
              {
                name: "Lisa Wang",
                role: "Product Manager",
                bio: "Expert in user experience and product development for security platforms",
                image: "👩‍💼"
              }
            ].map((member, index) => (
              <div key={index} className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20 text-center">
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from our training programs to our community support.",
                icon: Award
              },
              {
                title: "Innovation",
                description: "We continuously innovate our teaching methods and stay ahead of emerging security threats.",
                icon: Zap
              },
              {
                title: "Community",
                description: "We believe in the power of community and collaboration in cybersecurity education.",
                icon: Heart
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of ethical behavior and professional integrity.",
                icon: Shield
              }
            ].map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-blue-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Cybersecurity Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have transformed their careers with SecurityEagles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 