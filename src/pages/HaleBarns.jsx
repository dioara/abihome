import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Home, Users, Car, Wifi, Shield, CheckCircle, Phone, Mail, Globe, ArrowRight } from 'lucide-react'

export default function HaleBarns() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/1000382409.jpg')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            Residential Transformation
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hale Barns Conversion</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A remarkable 3-bedroom bungalow to 6-bedroom house conversion in Hale Barns, Cheshire, Greater Manchester. 
            Showcasing our expertise in residential transformation while respecting neighborhood character.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2</div>
              <div className="text-sm text-slate-300">Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
              <div className="text-sm text-slate-300">Bedrooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-slate-300">Value Enhanced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">2023</div>
              <div className="text-sm text-slate-300">Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Transformation Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From a modest 1960s bungalow to a stunning contemporary family home. 
              See how we transformed this property while preserving its garden setting and neighborhood character.
            </p>
          </div>

          {/* Rear Elevation Comparison */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Rear Elevation Transformation</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src="/1000382436.jpg" 
                  alt="Hale Barns Property Before - Rear View" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Original 1960s Bungalow</h4>
                  <p className="text-slate-600">Single-story brick construction with dormer window and mature garden setting.</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/1000382409.jpg" 
                  alt="Hale Barns Property After - Rear View" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Contemporary Family Home</h4>
                  <p className="text-slate-600">Stunning two-story extension with large glazed areas and modern white render finish.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Front Elevation Comparison */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Front Elevation & Entrance</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src="/1000382430.jpg" 
                  alt="Hale Barns Property Before - Front View" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Traditional Bungalow</h4>
                  <p className="text-slate-600">Modest scale with single garage and period architectural features.</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/1000382406.jpg" 
                  alt="Hale Barns Property After - Street View" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Enhanced Street Presence</h4>
                  <p className="text-slate-600">Contemporary design that enhances neighborhood character with quality materials.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Views */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="/1000382407.jpg" 
                alt="Modern Driveway and Entrance" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Modern Driveway & Entrance</h4>
              <p className="text-slate-600">Professional resin-bound driveway with contemporary entrance design and integrated garage solution.</p>
            </div>
            <div>
              <img 
                src="/1000382408.jpg" 
                alt="Garden Integration" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Garden Integration</h4>
              <p className="text-slate-600">Careful preservation of mature landscaping and trees with seamless integration of new construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Project Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              This transformation demonstrates our expertise in creating contemporary family homes 
              that enhance property value while respecting existing character and environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Scale Enhancement</h3>
              <p className="text-slate-600">
                Transformed single-story bungalow into impressive two-story family home while maintaining garden space and neighborhood harmony.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Contemporary Design</h3>
              <p className="text-slate-600">
                Modern architectural language with large glazed areas, white render finish, and black window frames creating striking visual impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Quality Materials</h3>
              <p className="text-slate-600">
                High-end finishes including premium render, glazing systems, and professional landscaping with resin-bound driveway.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Garden Integration</h3>
              <p className="text-slate-600">
                Careful preservation of mature trees and landscaping, seamlessly integrating new construction with existing garden features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Neighborhood Sensitivity</h3>
              <p className="text-slate-600">
                Design that enhances rather than dominates the streetscape, respecting local character while adding contemporary appeal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Value Enhancement</h3>
              <p className="text-slate-600">
                Significant property value increase through quality development, creating a premium family home with market appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Technical Excellence</h2>
              <p className="text-xl text-slate-600 mb-8">
                This project showcases our expertise in complex residential transformations, 
                combining structural engineering excellence with contemporary design innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Structural Integration</h3>
                    <p className="text-slate-600">Seamless connection between existing structure and new two-story extension.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Glazing Systems</h3>
                    <p className="text-slate-600">Large-format windows with contemporary black frames maximizing natural light.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">External Finishes</h3>
                    <p className="text-slate-600">High-quality render and brick combination with professional weatherproofing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Landscaping Integration</h3>
                    <p className="text-slate-600">Professional hard and soft landscaping with modern drainage solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/Media.jpeg" 
                alt="Hale Barns Technical Excellence" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let us help you unlock your property's potential with our expertise in residential transformation 
            and contemporary design. Contact us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/projects" 
              className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  )
}

