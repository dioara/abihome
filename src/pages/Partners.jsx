import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Award, Building2, CheckCircle, Users, Handshake, Shield, Star, ArrowRight } from 'lucide-react'

export default function Partners() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600">Professional Excellence</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Partners & Certifications
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our commitment to excellence is recognized through industry-leading certifications 
              and strategic partnerships that enhance our capability to deliver exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">ISO 9001 Certified</Badge>
              <Badge variant="secondary" className="text-sm">Pursuing Construction Line Gold</Badge>
              <Badge variant="secondary" className="text-sm">Pursuing NHBC Registration</Badge>
              <Badge variant="secondary" className="text-sm">Pursuing FMB Membership</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and professional standards is demonstrated through 
              industry-leading certifications and accreditations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-lg">ISO 9001 Certified</CardTitle>
                <CardDescription>Quality Management Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  International standard for quality management systems ensuring consistent 
                  delivery of high-standard services and products.
                </p>
                <Badge variant="outline" className="text-xs">Certified 2023</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Construction Line Gold</CardTitle>
                <CardDescription>Premier Supplier Status</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Gold membership demonstrating financial stability, health & safety compliance, 
                  and technical competence for public sector contracts.
                </p>
                <Badge variant="outline" className="text-xs">Application In Progress</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg">NHBC Registration</CardTitle>
                <CardDescription>New Home Warranty Protection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  National House Building Council registration providing warranty protection 
                  and quality assurance for new homes and conversions.
                </p>
                <Badge variant="outline" className="text-xs">Application In Progress</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Federation of Master Builders</CardTitle>
                <CardDescription>Professional Trade Association</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Membership of the UK's largest trade association for construction professionals, 
                  ensuring high standards and professional conduct.
                </p>
                <Badge variant="outline" className="text-xs">Application In Progress</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading professionals to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Studio Tashkeel</CardTitle>
                <CardDescription>Architects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Leading architectural practice specializing in residential and commercial design. 
                  Principal architects for Omega House project.
                </p>
                <Badge variant="outline" className="text-xs">Omega House</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg">Innov8ds</CardTitle>
                <CardDescription>Quantity Surveyors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Professional quantity surveying services ensuring accurate cost management 
                  and project financial control.
                </p>
                <Badge variant="outline" className="text-xs">Cost Management</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Edge CE</CardTitle>
                <CardDescription>Structural Engineers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Structural engineering expertise ensuring safe, compliant, and innovative 
                  construction solutions.
                </p>
                <Badge variant="outline" className="text-xs">Structural Design</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-lg">BFCE</CardTitle>
                <CardDescription>Consulting Engineers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive engineering consultancy providing MEP services and 
                  technical expertise across all project phases.
                </p>
                <Badge variant="outline" className="text-xs">MEP Services</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative relationships that enhance our capability and extend our reach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Handshake className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Housing Association Partners</CardTitle>
                <CardDescription>Social housing collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategic partnerships with housing associations across Greater Manchester, 
                  enabling delivery of affordable housing projects that combine social purpose 
                  with construction excellence.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Affordable housing delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Community consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Long-term partnerships
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Local Authority Relationships</CardTitle>
                <CardDescription>Municipal collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strong working relationships with Manchester City Council and Greater Manchester 
                  Combined Authority, supporting local housing strategies and regeneration objectives.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Planning collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Regeneration projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Policy alignment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Professional Networks</CardTitle>
                <CardDescription>Industry collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Active participation in professional networks and industry associations, 
                  ensuring access to best practices, innovation, and collaborative opportunities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Industry best practices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Innovation access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Professional development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Partnerships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Government Partnership Readiness</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Positioned for successful collaboration with government agencies and funding bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Homes England Alignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our certifications, track record, and social housing commitment position us 
                  as an ideal partner for Homes England funding schemes and initiatives.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">✓</div>
                    <p className="text-xs text-gray-600">Financial Stability</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">✓</div>
                    <p className="text-xs text-gray-600">Delivery Track Record</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">✓</div>
                    <p className="text-xs text-gray-600">Social Housing Focus</p>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">✓</div>
                    <p className="text-xs text-gray-600">Quality Standards</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/accessible-housing">View Our Capabilities <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-green-600" />
                  Public Sector Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Construction Line Gold membership and comprehensive certifications ensure 
                  we meet all requirements for public sector contracts and partnerships.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Public sector contract eligibility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Health & safety compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Financial stability verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Technical competence assessment
                  </li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/social-housing">Partnership Opportunities <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quality Assurance Framework</h2>
              <p className="text-xl text-gray-600">
                Comprehensive quality management ensuring consistent excellence in every project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    ISO 9001 Quality Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our ISO 9001 certification ensures systematic quality management across 
                    all aspects of our operations, from initial design through to project completion.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Documented quality procedures
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Regular quality audits
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Continuous improvement processes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Customer satisfaction monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    NHBC Warranty Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    NHBC registration provides comprehensive warranty protection for our developments, 
                    giving clients confidence in the long-term quality and performance of their investment.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      10-year structural warranty
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Independent quality inspections
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Building standards compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Consumer protection
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Excellence?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our certifications, partnerships, and proven track record position us as the ideal 
            partner for your development needs. Let's discuss how we can work together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/contact">Explore Partnership Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/projects">View Our Track Record</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

