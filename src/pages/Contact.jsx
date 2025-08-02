import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { MapPin, Phone, Mail, Clock, Building2, Users, Accessibility, Heart } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Contact Abihomes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to discuss your development project? Whether you're looking for accessible housing 
              expertise, social housing partnerships, or premium residential development, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">Manchester Based</Badge>
              <Badge variant="secondary" className="text-sm">Free Consultations</Badge>
              <Badge variant="secondary" className="text-sm">Quick Response</Badge>
              <Badge variant="secondary" className="text-sm">Professional Service</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your project and we'll get back to you within 24 hours with 
                  initial thoughts and next steps.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Project Enquiry Form</CardTitle>
                    <CardDescription>
                      Please provide details about your development requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Your first name" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Your last name" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" />
                      </div>

                      <div>
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="Your organization (if applicable)" />
                      </div>

                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <select 
                          id="projectType" 
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select project type</option>
                          <option value="accessible-housing">Accessible Housing Development</option>
                          <option value="social-housing">Social Housing Partnership</option>
                          <option value="commercial-conversion">Commercial-to-Residential Conversion</option>
                          <option value="residential-development">Premium Residential Development</option>
                          <option value="brownfield-regeneration">Brownfield Regeneration</option>
                          <option value="consultation">General Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="location">Project Location</Label>
                        <Input id="location" placeholder="Manchester, Greater Manchester, etc." />
                      </div>

                      <div>
                        <Label htmlFor="timeline">Expected Timeline</Label>
                        <select 
                          id="timeline" 
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (0-3 months)</option>
                          <option value="short-term">Short-term (3-6 months)</option>
                          <option value="medium-term">Medium-term (6-12 months)</option>
                          <option value="long-term">Long-term (12+ months)</option>
                          <option value="planning">Planning stage</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="budget">Estimated Budget Range</Label>
                        <select 
                          id="budget" 
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-500k">Under £500k</option>
                          <option value="500k-1m">£500k - £1M</option>
                          <option value="1m-2m">£1M - £2M</option>
                          <option value="2m-5m">£2M - £5M</option>
                          <option value="over-5m">Over £5M</option>
                          <option value="tbd">To be determined</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your project requirements, including any specific accessibility needs, social housing elements, or government scheme considerations..."
                          rows={6}
                          required 
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="newsletter" className="rounded" />
                        <Label htmlFor="newsletter" className="text-sm">
                          I'd like to receive updates about Abihomes projects and industry insights
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit Enquiry
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        We'll respond within 24 hours. Your information is kept confidential and secure.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Based in Manchester, we serve clients across Greater Manchester and beyond. 
                  Get in touch to discuss your development needs.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Office Location</h3>
                          <p className="text-gray-600">
                            Manchester, Greater Manchester<br />
                            United Kingdom
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Serving Greater Manchester and surrounding areas
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Phone</h3>
                          <p className="text-gray-600">
                            Available on request
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Monday - Friday: 9:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-purple-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Email</h3>
                          <p className="text-gray-600">
                            info@abihomes.co.uk
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-orange-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Business Hours</h3>
                          <div className="text-gray-600 space-y-1">
                            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: By appointment</p>
                            <p>Sunday: Closed</p>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            Emergency contacts available for urgent matters
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a housing association, local authority, private developer, or community group, 
              we have the expertise to support your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Accessibility className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Accessible Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  DDA-compliant and wheelchair-accessible housing development with 
                  premium quality construction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Social Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Partnership opportunities with housing associations and local 
                  authorities for community benefit.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Commercial Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Expert transformation of commercial buildings into high-quality 
                  residential developments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Development Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Collaborative development opportunities for landowners, 
                  investors, and development partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about our services and approach
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What makes Abihomes different from other developers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We specialize in accessible housing and have a genuine commitment to social housing. 
                    Our combination of DDA compliance expertise, wheelchair accessibility specialization, 
                    and premium construction quality is unique in Manchester. We're also positioned for 
                    government scheme partnerships with our certifications and track record.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with government funding schemes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we're well-positioned for government funding schemes including the Affordable Homes 
                    Programme, Greater Manchester Housing Investment Fund, and Manchester Brownfield Fund. 
                    Our certifications, social housing commitment, and accessible housing expertise align 
                    perfectly with government priorities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What areas do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We're based in Manchester and primarily serve Greater Manchester and surrounding areas. 
                    However, we're open to discussing projects across the North West and beyond for the 
                    right opportunities, particularly those involving accessible housing or social housing partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can you start a project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Project timelines depend on complexity, planning requirements, and funding arrangements. 
                    We can typically begin initial consultations immediately and move to planning stages 
                    within 2-4 weeks. Our track record shows efficient project delivery once approvals are in place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From initial consultation to project completion, we're here to deliver exceptional results. 
            Contact us today to discuss how we can bring your development vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Call Us Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Email Us Now
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            Free initial consultations • Quick response guaranteed • Professional service
          </p>
        </div>
      </section>
    </div>
  )
}

