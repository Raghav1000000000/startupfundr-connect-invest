
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Sarah has 15 years of experience in venture capital and previously led investments at a top Silicon Valley firm.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael brings extensive technical expertise from his previous roles at fintech startups and major tech companies.",
      image: "/placeholder.svg"
    },
    {
      name: "Priya Patel",
      role: "Head of Startup Relations",
      bio: "Priya has worked with over 100 startups, helping them secure funding and scale their operations efficiently.",
      image: "/placeholder.svg"
    },
    {
      name: "David Wilson",
      role: "Chief Investment Officer",
      bio: "David has a background in financial analysis and has successfully managed investment portfolios worth over $50M.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-fundr-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About StartupFundr</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize startup investing and help innovative 
              companies get the funding they need to change the world.
            </p>
          </div>
        </section>

        {/* Our story section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p>
                    StartupFundr was founded in 2022 with a simple idea: make startup investing 
                    accessible to everyone, not just wealthy individuals and institutions.
                  </p>
                  <p>
                    We noticed that while there was tremendous innovation happening in startups 
                    across the country, funding was still concentrated among a small group of 
                    investors in major tech hubs.
                  </p>
                  <p>
                    By leveraging technology and regulatory changes that allow for equity 
                    crowdfunding, we built a platform that connects promising startups with 
                    investors of all backgrounds and financial capacities.
                  </p>
                  <p>
                    Today, we've helped hundreds of startups raise the capital they need, while 
                    giving thousands of investors the opportunity to be part of the next big thing.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-fundr-100 rounded-lg p-6 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2">Our Impact</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-fundr-200 text-fundr-800 rounded-full p-1 mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <div>
                          <span className="font-bold">$50M+</span>
                          <p className="text-sm text-muted-foreground">Total funding facilitated for startups</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-fundr-200 text-fundr-800 rounded-full p-1 mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <div>
                          <span className="font-bold">250+</span>
                          <p className="text-sm text-muted-foreground">Startups successfully funded</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-fundr-200 text-fundr-800 rounded-full p-1 mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <div>
                          <span className="font-bold">15,000+</span>
                          <p className="text-sm text-muted-foreground">Active investors on our platform</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-fundr-200 text-fundr-800 rounded-full p-1 mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <div>
                          <span className="font-bold">30+</span>
                          <p className="text-sm text-muted-foreground">Industries represented</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-fundr-600 rounded-lg hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-8">
                  <div className="h-12 w-12 bg-fundr-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Accessibility</h3>
                  <p className="text-center text-muted-foreground">
                    We believe everyone should have the opportunity to invest in 
                    startups they believe in, regardless of their financial background.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="h-12 w-12 bg-fundr-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Transparency</h3>
                  <p className="text-center text-muted-foreground">
                    We provide clear information about startups, their business models, 
                    and the risks involved for informed investment decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="h-12 w-12 bg-fundr-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
                  <p className="text-center text-muted-foreground">
                    We're constantly improving our platform and processes to make 
                    startup investing easier, more efficient, and more rewarding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-fundr-600 mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
