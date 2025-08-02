import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Home, Users, Car, Wifi, Shield, CheckCircle, Phone, Mail, Globe, ArrowRight } from 'lucide-react'

export default function Stretford() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/stretford_construction_3_edited.jpg')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            New Build Development
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Stretford Development</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A complete land purchase and new build development project in Stretford, Manchester. 
            Showcasing our expertise in ground-up construction and contemporary family home design.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">5</div>
              <div className="text-sm text-slate-300">Bedrooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-sm text-slate-300">Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">New Build</div>
              <div className="text-sm text-slate-300">From Scratch</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">Nov 2023</div>
              <div className="text-sm text-slate-300">Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">Complete Development Solution</h3>
                  <p className="text-slate-600 leading-relaxed">
                    The Stretford project represents our comprehensive development capabilities, from initial 
                    land acquisition through to completed family home delivery. This ground-up construction 
                    project demonstrates our expertise in new build development and project management.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">Contemporary Family Living</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Designed as a spacious 5-bedroom family home, this development showcases our ability 
                    to create contemporary living spaces that meet modern family needs while maintaining 
                    quality construction standards throughout.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">Project Delivery Excellence</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Completed in November 2023, this project demonstrates our reliable project delivery 
                    capabilities, from planning and construction through to successful completion within 
                    planned timescales.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-slate-800">Location</div>
                      <div className="text-slate-600">Stretford, Manchester</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium text-slate-800">Property Type</div>
                      <div className="text-slate-600">5-Bedroom Family Home</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium text-slate-800">Completion</div>
                      <div className="text-slate-600">November 2023</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-medium text-slate-800">Development Type</div>
                      <div className="text-slate-600">Land Purchase + New Build</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Key Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700">Complete land acquisition and development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700">Ground-up new build construction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700">Contemporary architectural design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700">Quality construction standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700">On-time project delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Progress Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Construction Progress</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional construction management and quality building practices throughout the development process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Construction Phase 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/stretford_construction_1_edited.jpg" 
                alt="Stretford Construction Phase 1" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Foundation & Structure</h3>
                <p className="text-slate-600 mb-4">
                  Professional foundation work and structural development showcasing quality construction 
                  practices and attention to building standards.
                </p>
                <div className="text-sm text-slate-500">
                  <p><strong>Focus:</strong> Structural integrity and foundation excellence</p>
                </div>
              </div>
            </div>

            {/* Construction Phase 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/stretford_construction_2_edited.jpg" 
                alt="Stretford Construction Phase 2" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Brick Work & Framework</h3>
                <p className="text-slate-600 mb-4">
                  Quality brickwork and roof framework construction demonstrating skilled craftsmanship 
                  and attention to architectural detail.
                </p>
                <div className="text-sm text-slate-500">
                  <p><strong>Focus:</strong> Architectural detail and craftsmanship</p>
                </div>
              </div>
            </div>

            {/* Construction Phase 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/stretford_construction_3_edited.jpg" 
                alt="Stretford Construction Phase 3" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Site Management</h3>
                <p className="text-slate-600 mb-4">
                  Well-organized construction site with proper safety measures and professional 
                  project management throughout the development process.
                </p>
                <div className="text-sm text-slate-500">
                  <p><strong>Focus:</strong> Safety standards and project management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Development Capabilities Demonstrated</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The Stretford project showcases our comprehensive development capabilities across all project phases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Land Acquisition</h3>
              <p className="text-slate-600 text-sm">
                Strategic site identification and successful land purchase for development opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">New Build Construction</h3>
              <p className="text-slate-600 text-sm">
                Ground-up construction expertise with quality building practices and modern techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Project Management</h3>
              <p className="text-slate-600 text-sm">
                Comprehensive project delivery from planning through to successful completion.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
              <p className="text-slate-600 text-sm">
                Reliable project completion within planned timescales and quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              to="/projects" 
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Link>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Interested in Our Development Services?</h3>
              <p className="text-slate-300 mb-4">
                Contact us to discuss your next development project
              </p>
            </div>

            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

