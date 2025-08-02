import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Building2, Home, Users, Accessibility, CheckCircle, ArrowRight, Calendar, MapPin } from 'lucide-react'

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our portfolio of quality developments, from accessible housing 
              innovations to contemporary residential projects across Manchester.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">25+ Units Delivered</Badge>
              <Badge variant="secondary" className="text-sm">Accessible Design</Badge>
              <Badge variant="secondary" className="text-sm">Quality Construction</Badge>
              <Badge variant="secondary" className="text-sm">Community Focused</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Omega Apartments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Project</Badge>
              <h2 className="text-3xl font-bold mb-4">Omega House</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our flagship development showcasing expertise in accessible design, 
                commercial conversion, and quality construction standards.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                    <p className="text-gray-600">
                      A transformative 24-apartment development created through the conversion 
                      of a 4-storey commercial building. This project demonstrates our capability 
                      in brownfield regeneration, accessible housing provision, urban revitalization, 
                      and quality construction standards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Accessibility Features</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Ground floor: Full DDA compliance for wheelchair users</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>First floor: Wheelchair accessible design</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Accessible entrances and quality finishes throughout</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>6 apartments per floor with lift access</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-600">Total Apartments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">4</div>
                      <div className="text-sm text-gray-600">Floors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Ground Floor</div>
                      <div className="text-sm text-gray-600">DDA Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">Nov/Dec 2025</div>
                      <div className="text-sm text-gray-600">Completion</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="bg-gray-300 h-64 rounded-lg mb-4 flex items-center justify-center">
                    <Building2 className="h-16 w-16 text-gray-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Omega Apartments - Exterior View
                  </p>
                </div>
                
                <Button size="lg" className="w-full" asChild>
                  <Link to="/omega-house">
                    Explore Full Project Details <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Completed Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record of successful developments demonstrates our commitment 
              to quality and community benefit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Omega Apartments Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Building2 className="h-12 w-12 text-gray-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Omega Apartments</CardTitle>
                    <CardDescription>Manchester</CardDescription>
                  </div>
                  <Badge>Featured</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Home className="h-4 w-4" />
                    24 Apartments
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Accessibility className="h-4 w-4" />
                    DDA Compliant
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    Completed 2024
                  </div>
                  <p className="text-sm text-gray-600">
                    Commercial-to-residential conversion with full accessibility features.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/omega-apartments">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hale Barns Transformation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-gray-200 h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/1000382409.jpg" 
                    alt="Hale Barns Transformation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Hale Barns Conversion</CardTitle>
                    <CardDescription>Hale Barns, Cheshire, Greater Manchester</CardDescription>
                  </div>
                  <Badge variant="secondary">Residential</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Home className="h-4 w-4" />
                    3-bed to 6-bedroom conversion
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    Contemporary Design
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    Completed 2023
                  </div>
                  <p className="text-sm text-gray-600">
                    Stunning transformation from 1960s bungalow to contemporary family home.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/hale-barns">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stretford Development */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-gray-200 h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/stretford_construction_3_edited.jpg" 
                    alt="Stretford Development" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Stretford Development</CardTitle>
                    <CardDescription>Stretford, Manchester</CardDescription>
                  </div>
                  <Badge variant="secondary">New Build</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Home className="h-4 w-4" />
                    5-Bedroom Family Home
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    Land Purchase + New Build
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    Completed November 2023
                  </div>
                  <p className="text-sm text-gray-600">
                    Complete development from land acquisition to finished family home.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/stretford">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Development Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio demonstrates capability across multiple development types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Commercial Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Expert transformation of commercial buildings into high-quality residential developments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Accessibility className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Accessible Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  DDA-compliant and wheelchair-accessible homes that combine quality with inclusive design.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Premium Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  High-specification family homes and apartments with premium finishes and modern amenities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Social Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Partnership developments with housing associations and local authorities for community benefit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Development Opportunity?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're looking for a development partner, have a site to develop, 
            or need accessible housing expertise, we'd love to discuss your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

