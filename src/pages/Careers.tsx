
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-fundr-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Help us transform the way startups raise capital and investors discover opportunities.
              </p>
              <Button className="bg-fundr-600 hover:bg-fundr-700 text-lg px-6 py-3 h-auto">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Flexible Schedule</h3>
                  <p className="text-gray-600">
                    We understand that work is just one part of your life. Our flexible work policy allows you to optimize your schedule.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                  <p className="text-gray-600">
                    We invest in your professional development through mentorship, learning resources, and career advancement.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Remote-First</h3>
                  <p className="text-gray-600">
                    Work from anywhere with our remote-first culture, supporting team members across different time zones.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Diverse & Inclusive</h3>
                  <p className="text-gray-600">
                    We value diverse perspectives and foster an inclusive workplace where everyone feels welcome and respected.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
              
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Senior Full Stack Developer</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="bg-gray-100">Remote</Badge>
                          <Badge variant="outline" className="bg-gray-100">Full-time</Badge>
                          <Badge variant="outline" className="bg-gray-100">Engineering</Badge>
                        </div>
                        <p className="text-gray-600 mb-4 md:mb-0">
                          Build and maintain our platform's core features using React, Node.js, and PostgreSQL.
                        </p>
                      </div>
                      <Button className="bg-fundr-600 hover:bg-fundr-700 mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Product Manager</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="bg-gray-100">Remote</Badge>
                          <Badge variant="outline" className="bg-gray-100">Full-time</Badge>
                          <Badge variant="outline" className="bg-gray-100">Product</Badge>
                        </div>
                        <p className="text-gray-600 mb-4 md:mb-0">
                          Lead product development initiatives from conception to launch, working closely with design and engineering teams.
                        </p>
                      </div>
                      <Button className="bg-fundr-600 hover:bg-fundr-700 mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Investment Analyst</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="bg-gray-100">Remote</Badge>
                          <Badge variant="outline" className="bg-gray-100">Full-time</Badge>
                          <Badge variant="outline" className="bg-gray-100">Investments</Badge>
                        </div>
                        <p className="text-gray-600 mb-4 md:mb-0">
                          Evaluate startup applications and provide insights to help curate high-quality investment opportunities.
                        </p>
                      </div>
                      <Button className="bg-fundr-600 hover:bg-fundr-700 mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Marketing Specialist</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="bg-gray-100">Remote</Badge>
                          <Badge variant="outline" className="bg-gray-100">Full-time</Badge>
                          <Badge variant="outline" className="bg-gray-100">Marketing</Badge>
                        </div>
                        <p className="text-gray-600 mb-4 md:mb-0">
                          Create and execute marketing campaigns to attract startups and investors to our platform.
                        </p>
                      </div>
                      <Button className="bg-fundr-600 hover:bg-fundr-700 mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg mb-6">Don't see a position that fits your skills?</p>
                <Button variant="outline" className="border-fundr-600 text-fundr-600 hover:bg-fundr-50">
                  Send Open Application
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-fundr-600 rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Application Review</h3>
                    <p className="text-gray-600">
                      Our team reviews your application, resume, and portfolio. This typically takes 1-2 weeks.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-fundr-600 rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Interview</h3>
                    <p className="text-gray-600">
                      If selected, you'll have a 30-minute video call with our recruiting team to discuss your experience and interest.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-fundr-600 rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Skills Assessment</h3>
                    <p className="text-gray-600">
                      Depending on the role, you may be asked to complete a practical assessment or case study to demonstrate your skills.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-fundr-600 rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Team Interviews</h3>
                    <p className="text-gray-600">
                      Meet with potential teammates and stakeholders to assess cultural fit and collaboration style.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-fundr-600 rounded-full flex items-center justify-center text-white text-xl font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-600">
                      If selected, you'll receive an offer and begin our comprehensive onboarding process to set you up for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
