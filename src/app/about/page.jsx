'use client';
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Arpon Kundu",
      role: "Agricultural Expert",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "10+ years in sustainable farming practices"
    },
    {
      name: "Madhu Chandra",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Passionate about tech solutions for agriculture"
    },
    {
      name: "Sifa Reza",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Connecting farmers with modern solutions"
    }
  ];

  const features = [
    {
      icon: "🌱",
      title: "Sustainable Farming",
      description: "Promoting eco-friendly agricultural practices for a better tomorrow"
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Data-driven insights to optimize your farming operations"
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description: "Connect with fellow farmers and share knowledge"
    },
    {
      icon: "🚀",
      title: "Innovation First",
      description: "Leveraging technology to revolutionize agriculture"
    }
  ];

  const stats = [
    { number: "10K+", label: "Farmers Connected" },
    { number: "50K+", label: "Acres Managed" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-green-900 mb-6">
            About <span className="text-green-600">FarmFolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing agriculture through technology, community, and sustainable practices. 
            We're building the future of farming, one harvest at a time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-green-800 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-green-600 text-white shadow-2xl'
                    : 'bg-white text-green-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {activeTab === 'mission' && (
              <div className="text-center">
                <div className="text-6xl mb-6">🌾</div>
                <h3 className="text-4xl font-bold text-green-800 mb-6">Our Mission</h3>
                <p className="text-xl text-green-700 leading-relaxed max-w-4xl mx-auto">
                  To empower farmers with cutting-edge technology and data-driven insights that 
                  transform traditional agriculture into sustainable, profitable, and efficient 
                  operations. We believe in creating a world where farming is not just a livelihood 
                  but a thriving business that nourishes communities and preserves our planet.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center">
                <div className="text-6xl mb-6">🔭</div>
                <h3 className="text-4xl font-bold text-green-800 mb-6">Our Vision</h3>
                <p className="text-xl text-green-700 leading-relaxed max-w-4xl mx-auto">
                  A future where every farmer has access to smart agricultural tools, real-time 
                  market insights, and a supportive community. We envision a global agricultural 
                  network that is resilient, sustainable, and capable of feeding generations to come 
                  while respecting our Earth's resources.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="text-center">
                <div className="text-6xl mb-6">💚</div>
                <h3 className="text-4xl font-bold text-green-800 mb-6">Our Values</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="text-left">
                    <h4 className="text-2xl font-semibold text-green-700 mb-3">Sustainability First</h4>
                    <p className="text-green-600">We prioritize eco-friendly practices that protect our environment.</p>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-semibold text-green-700 mb-3">Farmer Centric</h4>
                    <p className="text-green-600">Everything we do is designed with farmers' needs in mind.</p>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-semibold text-green-700 mb-3">Innovation Driven</h4>
                    <p className="text-green-600">We constantly seek new ways to improve agricultural practices.</p>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-semibold text-green-700 mb-3">Community Focused</h4>
                    <p className="text-green-600">We believe in the power of shared knowledge and collaboration.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why Choose FarmFolio?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">{feature.title}</h3>
                <p className="text-green-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-green-700 text-center mb-16 max-w-2xl mx-auto">
            Passionate individuals dedicated to transforming agriculture through innovation and expertise.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center group transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-green-200 group-hover:border-green-400 transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{member.name}</h3>
                <div className="text-green-600 font-semibold mb-3">{member.role}</div>
                <p className="text-green-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Farming Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using FarmFolio to optimize their operations and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Started Free
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}