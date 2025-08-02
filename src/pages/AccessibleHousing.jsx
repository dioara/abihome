import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Accessibility, CheckCircle, Users, Building2, Heart, ArrowRight, Shield, Home } from 'lucide-react'

export default function AccessibleHousing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-600">Accessibility Excellence</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Accessible Housing Specialists
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Manchester's leading experts in DDA-compliant and wheelchair-accessible housing. 
              We create inclusive homes that combine accessibility with premium quality and design excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">DDA Compliant</Badge>
              <Badge variant="secondary" className="text-sm">Wheelchair Accessible</Badge>
              <Badge variant="secondary" className="text-sm">Universal Design</Badge>
              <Badge variant="secondary" className="text-sm">Premium Quality</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Accessible Housing Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record in delivering accessible housing that meets the highest standards 
              while maintaining design excellence and construction quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Accessibility className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>DDA Compliance</CardTitle>
                <CardDescription>Full compliance with Disability Discrimination Act requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Level access entrances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Accessible bathroom design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Wide doorways and corridors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Accessible kitchen layouts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Wheelchair Accessibility</CardTitle>
                <CardDescription>Specialized design for wheelchair users</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Full wheelchair access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Part-time wheelchair user design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Accessible lift systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Emergency accessibility provisions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Universal Design</CardTitle>
                <CardDescription>Inclusive design principles benefiting all residents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Inclusive design principles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Seamless accessibility integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Future-proofed design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Enhanced usability for all
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Omega Apartments Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Case Study</Badge>
              <h2 className="text-3xl font-bold mb-4">Omega Apartments: Accessibility Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our flagship accessible housing project demonstrates how DDA compliance and 
                wheelchair accessibility can be seamlessly integrated with premium quality construction.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Accessibility Features</h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Accessibility className="h-5 w-5 text-green-600" />
                        Ground Floor DDA Compliance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Full DDA compliance throughout ground floor apartments with accessible 
                        entrance and premium finishes designed specifically for wheelchair users.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Users className="h-5 w-5 text-blue-600" />
                        First Floor Wheelchair Access
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Wheelchair-accessible design throughout first floor with accessible lift 
                        access and adapted living spaces for part-time wheelchair users.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">24</div>
                      <div className="text-sm text-gray-600">Accessible Units</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-gray-600">DDA Compliant</div>
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
                    Omega Apartments - Accessible Housing Excellence
                  </p>
                </div>
                
                <Button size="lg" className="w-full" asChild>
                  <Link to="/omega-apartments">
                    Explore Full Project Details <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Alignment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Government Scheme Alignment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our accessible housing expertise directly supports key government priorities and funding schemes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Affordable Homes Programme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Our accessible housing expertise enhances applications for the £11.5 billion 
                  Affordable Homes Programme, providing additional value through inclusive design.
                </p>
                <Badge variant="outline">£11.5B Available</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Manchester Housing Investment Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Local fund prioritizing accessibility and social value - our expertise 
                  directly addresses their key criteria for Manchester developments.
                </p>
                <Badge variant="outline">Local Priority</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Social Value Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Accessible housing delivery demonstrates clear social value and community 
                  benefit, essential for government contract and funding success.
                </p>
                <Badge variant="outline">Social Impact</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Accessible Housing Approach</h2>
              <p className="text-xl text-gray-600">
                Comprehensive methodology ensuring accessibility excellence without compromising quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Design Philosophy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We believe accessibility should be seamlessly integrated, not added as an afterthought. 
                    Our universal design approach creates homes that are beautiful, functional, and 
                    accessible to all community members.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Accessibility from initial design stage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Premium quality maintained throughout
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Future-proofed for changing needs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our accessible housing creates inclusive communities where all residents can 
                    thrive. This approach delivers genuine social value while meeting commercial 
                    objectives and government priorities.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Inclusive community creation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Enhanced quality of life for all
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Long-term community sustainability
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Accessible Housing Excellence?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Partner with Manchester's leading accessible housing specialists. Our expertise in DDA compliance 
            and wheelchair accessibility, combined with premium construction quality, delivers exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-green-900 hover:bg-gray-100">
              <Link to="/contact">Discuss Your Accessible Housing Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-900">
              <Link to="/omega-apartments">View Our Accessible Housing Showcase</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

