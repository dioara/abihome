import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Building2, CheckCircle, ArrowRight, Handshake, Home, Target } from 'lucide-react'

export default function SocialHousing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600">Social Purpose</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Social Housing Partnerships
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Genuine commitment to affordable housing and community benefit. We partner with 
              housing associations and local authorities to deliver quality homes that serve 
              Manchester's diverse communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">Housing Association Partners</Badge>
              <Badge variant="secondary" className="text-sm">Local Authority Collaboration</Badge>
              <Badge variant="secondary" className="text-sm">Community Focused</Badge>
              <Badge variant="secondary" className="text-sm">Quality Affordable Housing</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Heart for Social Housing</h2>
                <p className="text-xl text-gray-600 mb-6">
                  At Abihomes, we believe quality housing should be accessible to all members 
                  of our community. This isn't just business for us - it's a genuine commitment 
                  to creating inclusive communities where everyone can thrive.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium">Genuine Social Purpose</p>
                      <p className="text-gray-600">
                        Our commitment to social housing stems from authentic values, not just commercial opportunity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Community Partnership</p>
                      <p className="text-gray-600">
                        Collaborative approach with housing associations, local authorities, and community groups.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Building2 className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Quality Without Compromise</p>
                      <p className="text-gray-600">
                        Affordable housing doesn't mean compromising on construction quality or design excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="bg-gray-300 h-64 rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-gray-500" />
                </div>
                <p className="text-sm text-gray-600">
                  Building Communities, Creating Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative relationships that deliver exceptional outcomes for communities and partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Handshake className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Housing Association Partnerships</CardTitle>
                <CardDescription>Long-term collaborative relationships</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Strategic partnership development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Shared values and objectives
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Quality affordable housing delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Community consultation integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Local Authority Collaboration</CardTitle>
                <CardDescription>Supporting municipal housing objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Local housing strategy alignment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Planning policy compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Community benefit delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Regeneration project support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Community Engagement</CardTitle>
                <CardDescription>Inclusive development process</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Community consultation processes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Local stakeholder engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Resident feedback integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Long-term community relationships
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Scheme Alignment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Government Funding Alignment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our social housing commitment directly supports major government funding schemes and priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-blue-600" />
                  Affordable Homes Programme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our genuine commitment to social housing and proven delivery capability positions 
                  us as an ideal partner for the £11.5 billion Affordable Homes Programme.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Authentic social housing mission
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Proven delivery track record
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Quality construction standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Partnership-ready approach
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">£11.5 Billion Available</p>
                  <p className="text-xs text-blue-600">Up to £100,000 per affordable home</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-green-600" />
                  Social Value Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our social housing focus demonstrates clear social value and community benefit, 
                  essential for government contracts and public sector partnerships.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Measurable community impact
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Local employment opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Skills development support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Long-term community sustainability
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Social Value Delivery</p>
                  <p className="text-xs text-green-600">Measurable community benefit</p>
                </div>
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
              <h2 className="text-3xl font-bold mb-4">Our Social Housing Approach</h2>
              <p className="text-xl text-gray-600">
                Comprehensive methodology ensuring social value delivery without compromising quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    Values-Driven Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our social housing commitment is rooted in genuine values, not just commercial 
                    opportunity. This authentic approach creates stronger partnerships and better 
                    outcomes for communities.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Authentic social mission
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Long-term community commitment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Sustainable partnership approach
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    Quality Affordable Housing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We believe affordable housing should never mean compromising on quality. Our 
                    approach delivers homes that residents are proud to live in and communities 
                    are proud to have.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Premium construction standards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Accessible design integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Energy-efficient systems
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate on social housing projects that deliver exceptional community value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Housing Associations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Partner with us for affordable housing developments that combine social purpose 
                  with construction excellence and accessibility expertise.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Explore Partnership</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Local Authorities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Collaborate on regeneration projects and housing strategy delivery with our 
                  proven track record in accessible and affordable housing.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Discuss Collaboration</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Community Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Engage with us on community-led housing initiatives that prioritize local 
                  needs and inclusive design principles.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Start Conversation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Social Housing Excellence?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Partner with a developer who shares your commitment to community benefit. Our genuine 
            social housing values, combined with proven delivery capability, create exceptional outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-red-900 hover:bg-gray-100">
              <Link to="/contact">Discuss Partnership Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-red-900">
              <Link to="/accessible-housing">Our Accessible Housing Expertise</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

