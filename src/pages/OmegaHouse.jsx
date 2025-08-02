import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Home, Users, Car, Wifi, Shield, Accessibility, CheckCircle, Phone, Mail, Globe } from 'lucide-react'

export default function OmegaHouse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/omega-house-exterior.jpg')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            Featured Project
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Omega House</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Manchester's premier accessible housing development. A transformative 24-apartment project showcasing our 
            expertise in commercial conversion and inclusive design.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24</div>
              <div className="text-sm text-slate-300">Apartments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">4</div>
              <div className="text-sm text-slate-300">Floors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">Ground Floor</div>
              <div className="text-sm text-slate-300">DDA Accessible</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">Nov/Dec 2025</div>
              <div className="text-sm text-slate-300">Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Apartment Floor Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Thoughtfully designed layouts combining accessibility excellence with contemporary living. 
              Ground floor apartments feature full DDA compliance and wheelchair accessibility. 
              Floor plans shown are examples - full building plans available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1 Bedroom */}
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/1_Bed_Apartment.jpg" 
                alt="1 Bedroom Apartment Floor Plan" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">1 Bedroom Apartment</h3>
                <ul className="space-y-2 text-slate-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Open-plan living/kitchen</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Curved bay window feature</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Built-in storage solutions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fully accessible design</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Modern bathroom</li>
                </ul>
                <div className="text-sm text-slate-500">
                  <p><strong>Accessibility:</strong> Wide doorways, open layout, level access</p>
                </div>
              </div>
            </div>

            {/* 2 Bedroom */}
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/2_Bed_Apartment.jpg" 
                alt="2 Bedroom Apartment Floor Plan" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">2 Bedroom Apartment</h3>
                <ul className="space-y-2 text-slate-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Two separate bedrooms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Two bathrooms (one en-suite)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Spacious living area</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Modern kitchen with island</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Wide corridors throughout</li>
                </ul>
                <div className="text-sm text-slate-500">
                  <p><strong>Accessibility:</strong> Wide corridors, accessible bathrooms, level access</p>
                </div>
              </div>
            </div>

            {/* 3 Bedroom */}
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/3_Bed_Apartment.jpg" 
                alt="3 Bedroom Apartment Floor Plan" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">3 Bedroom Apartment</h3>
                <ul className="space-y-2 text-slate-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Three separate bedrooms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Large curved bay window</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Spacious living/dining area</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Two bathrooms (one en-suite)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Balcony access</li>
                </ul>
                <div className="text-sm text-slate-500">
                  <p><strong>Accessibility:</strong> Universal design principles, wheelchair accessible</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Accessibility Excellence</h3>
              <p className="text-slate-600 mb-4">
                All floor plans demonstrate our commitment to inclusive design. Ground floor apartments are fully DDA compliant 
                for wheelchair users, while first floor apartments are well-suited for part-time wheelchair users.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-blue-600 mr-2" />
                  <span>DDA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Wide Doorways</span>
                </div>
                <div className="flex items-center justify-center">
                  <Home className="w-5 h-5 text-purple-600 mr-2" />
                  <span>Level Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Project Overview</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Omega House represents a landmark achievement in accessible housing development. This project demonstrates 
              our capability to deliver on multiple government priorities simultaneously - brownfield regeneration, 
              accessible housing provision, urban revitalization, and quality construction standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">1 Peel Cross Road, Salford, M5 4SE</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Completion</h3>
                  <p className="text-slate-600">2024</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Home className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Development Type</h3>
                  <p className="text-slate-600">Commercial-to-Residential Conversion</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Accessibility className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Accessibility</h3>
                  <p className="text-slate-600">Full DDA Compliance & Wheelchair Accessibility</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/omega-house-exterior.jpg" 
                alt="Omega House - Exterior View"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium text-slate-900">Exterior View</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Apartment Selection</h2>
            <p className="text-lg text-slate-600">
              Contemporary residential development designed for modern city living with a selection of one, two, and three bedroom apartments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1 Bedroom */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <Home className="h-16 w-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">1 Bedroom Apartments</h3>
                <p className="text-slate-600 mb-4">Modern new apartments in Salford's prime location. Ideal for professionals and singles.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    1 Bedroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    1 Bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Modern Open Plan Living
                  </li>
                </ul>
              </div>
            </div>

            {/* 2 Bedroom */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <Home className="h-16 w-16 text-green-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">2 Bedroom Apartments</h3>
                <p className="text-slate-600 mb-4">Spacious apartments perfect for couples or small families with premium finishes.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    2 Bedrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    1-2 Bathrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Open Plan Living
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 Bedroom */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <Home className="h-16 w-16 text-purple-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">3 Bedroom Apartments</h3>
                <p className="text-slate-600 mb-4">Generously sized for families with premium finishes and perfect blend of style, comfort and functionality.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    3 Bedrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    2 Bathrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Modern Open Plan Living
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Accessibility Excellence</h2>
            <p className="text-lg text-slate-600">
              Leading Manchester in DDA-compliant and wheelchair-accessible housing provision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ground Floor DDA Compliance</h3>
                <p className="text-slate-600 mb-4">
                  Full DDA compliance throughout ground floor apartments with accessible entrance and premium finishes designed for wheelchair users.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Level access entrances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Wheelchair-accessible bathrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Accessible kitchen design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Wide doorways and corridors
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">First Floor Wheelchair Accessibility</h3>
                <p className="text-slate-600 mb-4">
                  Wheelchair-accessible design throughout first floor with accessible lift access and adapted living spaces for part-time wheelchair users.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Accessible lift to all floors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Adapted living spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Flexible accessibility features
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Emergency accessibility provisions
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Universal Design Principles</h3>
              <p className="text-slate-600 mb-6">
                Inclusive design benefits all residents with seamless integration of accessibility features that enhance the living experience for everyone.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg mb-2">
                    <Accessibility className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium">Inclusive Design</p>
                  <p className="text-xs text-slate-600">Benefits all residents</p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg mb-2">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium">Quality Standards</p>
                  <p className="text-xs text-slate-600">Premium finishes throughout</p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg mb-2">
                    <Users className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium">Community Focus</p>
                  <p className="text-xs text-slate-600">Accessible to all</p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg mb-2">
                    <Car className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium">Parking</p>
                  <p className="text-xs text-slate-600">Up to 2 spaces per apartment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Project Impact</h2>
            <p className="text-lg text-slate-600">
              Omega House demonstrates our capability to deliver on multiple priorities simultaneously
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg mb-4">
                <Home className="h-12 w-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Brownfield Regeneration</h3>
              <p className="text-sm text-slate-600">Transforming underused commercial space into thriving residential community</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <Accessibility className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Accessible Housing</h3>
              <p className="text-sm text-slate-600">Leading Manchester in DDA-compliant and wheelchair-accessible housing provision</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <Users className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Community Benefit</h3>
              <p className="text-sm text-slate-600">Creating inclusive housing that serves diverse community needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-lg mb-4">
                <Shield className="h-12 w-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Quality Standards</h3>
              <p className="text-sm text-slate-600">Premium construction quality with accessibility seamlessly integrated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in Similar Development?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Omega House showcases our expertise in accessible housing, commercial conversions, and quality construction. 
            Let's discuss how we can bring similar excellence to your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Enquire About Similar Projects
            </Link>
            <Link 
              to="/accessible-housing" 
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Accessible Housing Expertise
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(+44) 0161 711 1876</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>www.abihome.co.uk</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@abihome.co.uk</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

