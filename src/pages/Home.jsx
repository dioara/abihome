import { Link } from 'react-router-dom'
import { ArrowRight, Building2, CheckCircle, Users, Accessibility, Shield, Home as HomeIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Omega House exterior image */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/omega-house-exterior.jpg')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quality Property Development<br />
            <span className="text-blue-400">& Accessible Housing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Manchester's reliable property developers delivering quality residential and commercial projects. 
            From contemporary developments to accessible housing partnerships, we build for every community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Projects
            </Link>
            <Link to="/omega-house" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Omega House
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Building2 className="h-8 w-8 text-blue-300 mb-2 mx-auto" />
              <p className="text-sm font-medium">Quality Development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Accessibility className="h-8 w-8 text-green-300 mb-2 mx-auto" />
              <p className="text-sm font-medium">Accessible Housing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Users className="h-8 w-8 text-purple-300 mb-2 mx-auto" />
              <p className="text-sm font-medium">Social Housing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Shield className="h-8 w-8 text-orange-300 mb-2 mx-auto" />
              <p className="text-sm font-medium">Quality Assured</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Abihomes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold">About Abihomes</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
                Building Excellence Since 2018
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                We are a reliable Manchester property development company, specializing in quality construction, 
                accessible housing, and commercial-to-residential conversions. Our commitment to excellence 
                extends from contemporary developments to social housing partnerships.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>ISO 9001 Quality Management certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Pursuing Federation of Master Builders membership</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Pursuing Construction Line Gold accreditation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>DDA compliance and accessibility specialists</span>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-80 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-blue-600" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium text-slate-900">Quality construction since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Our Expertise</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Comprehensive Development Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial Development</h3>
              <p className="text-slate-600 mb-4">
                Premium commercial and residential developments with focus on quality construction and market value.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Accessibility className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Accessible Housing</h3>
              <p className="text-slate-600 mb-4">
                DDA-compliant and wheelchair-accessible housing solutions that meet government standards and community needs.
              </p>
              <Link to="/accessible-housing" className="text-green-600 hover:text-green-700 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Social Housing</h3>
              <p className="text-slate-600 mb-4">
                Partnership-focused social housing development supporting government schemes and community benefit.
              </p>
              <Link to="/social-housing" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Omega House */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Featured Project</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Omega House</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                A transformative 24-apartment development showcasing our expertise in accessible design, 
                commercial-to-residential conversion, and premium quality construction.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>DDA-compliant ground floor apartments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Wheelchair-accessible first floor units</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Commercial building conversion expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Premium finishes throughout</span>
                </div>
              </div>
              
              <Link 
                to="/omega-house" 
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Omega House
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="/omega-house-exterior.jpg" 
                alt="Omega House - Modern accessible living in Manchester"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium text-slate-900">Omega House - Modern Accessible Living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Whether you're looking for premium development, accessible housing solutions, or social housing partnerships, 
            we have the expertise and commitment to deliver exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
            <Link 
              to="/projects" 
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

