import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Building2, Users, Award, Target, Heart, CheckCircle, Calendar, MapPin } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Abihomes Ltd
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Manchester's reliable property development partner since 2018, delivering quality homes 
              and accessible housing solutions that strengthen communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">Est. 2018</Badge>
              <Badge variant="secondary" className="text-sm">Manchester Based</Badge>
              <Badge variant="secondary" className="text-sm">ISO 9001 Certified</Badge>
              <Badge variant="secondary" className="text-sm">Pursuing Construction Line Gold</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2018, Abihomes Ltd emerged from a vision to create exceptional property 
                    developments that serve diverse communities across Manchester. What started as a 
                    commitment to quality construction has evolved into a comprehensive approach that 
                    balances commercial excellence with social responsibility.
                  </p>
                  <p>
                    Our journey began with a simple belief: that quality housing should be accessible 
                    to all members of our community. This philosophy has guided our growth from a 
                    boutique developer to a reliable specialist in accessible housing and 
                    commercial conversions.
                  </p>
                  <p>
                    Today, we're proud to be recognized not just for our construction quality, but for 
                    our thoughtful approach to inclusive design and our genuine commitment to creating 
                    homes that truly serve their communities.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Units Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
                    <div className="text-sm text-gray-600">Current Project Units</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project we undertake and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Uncompromising standards in construction, materials, and finishes ensure 
                  every project exceeds expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Social Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Genuine commitment to accessible housing and community benefit drives 
                  our approach to every development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Community Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Collaborative relationships with local authorities, housing associations, 
                  and community organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transparent communication, ethical practices, and reliable delivery 
                  in all our professional relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Accreditations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through industry-leading certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>ISO 9001 Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quality management systems certification ensuring consistent delivery 
                  of high-standard services and products.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Construction Line Gold</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Premier supplier status demonstrating financial stability, 
                  health & safety compliance, and technical competence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>NHBC Registered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  National House Building Council registration providing warranty 
                  protection and quality assurance for new homes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining technical excellence with innovative design and social responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Property Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Residential developments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Commercial conversions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Mixed-use projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Brownfield regeneration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Accessible Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    DDA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Wheelchair accessibility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Universal design principles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Inclusive living spaces
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  Social Housing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Housing association partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Local authority collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Affordable housing delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Community consultation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Based in Manchester</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Manchester, Greater Manchester</p>
                      <p className="text-gray-600">
                        Strategically located to serve the Greater Manchester area and beyond
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Established 2018</p>
                      <p className="text-gray-600">
                        Six years of proven track record in quality property development
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Our Commitment</h3>
                  <p className="text-gray-600">
                    "We believe quality housing should be accessible to all community members. 
                    Our expertise in DDA-compliant design and wheelchair accessibility, 
                    demonstrated through projects like Omega Apartments, positions us as 
                    Manchester's leading accessible housing developer."
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="bg-gray-300 h-64 rounded-lg mb-4 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-gray-500" />
                </div>
                <p className="text-sm text-gray-600">
                  Manchester - Our home and the heart of our operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

