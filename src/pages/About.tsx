
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-fundr-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connecting innovative startups with forward-thinking investors to build the future together.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  StartupFundr was founded in 2022 with a simple idea: make startup investment accessible to everyone, not just venture capitalists and angel investors.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team of entrepreneurs, investors, and tech enthusiasts recognized that there was an incredible amount of innovation happening in startups across the globe, but limited access to funding for many promising ventures.
                </p>
                <p className="text-lg text-muted-foreground mb-0">
                  We built StartupFundr to democratize access to startup investment opportunities and help the next generation of world-changing companies find the capital they need to succeed.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070"
                  alt="Team working together at a modern office"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-fundr-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-xl font-bold mb-1">Founded 2022</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do at StartupFundr
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-fundr-100 text-fundr-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency with our investors and startups. Clear communication, honest evaluations, and open access to information.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-fundr-100 text-fundr-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Startup investment should be accessible to everyone. We're breaking down barriers to entry and democratizing access to opportunities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-fundr-100 text-fundr-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We support founders who are solving real problems with innovative solutions. We're constantly improving our platform to better serve them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the passionate people behind StartupFundr
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Jordan Chen",
                  role: "CEO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=1470",
                  bio: "Former VP at a leading VC firm with 12+ years of startup investment experience."
                },
                {
                  name: "Maya Rodriguez",
                  role: "CTO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1587",
                  bio: "Serial tech entrepreneur who has built and sold two fintech startups."
                },
                {
                  name: "Alex Washington",
                  role: "Head of Operations",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1587",
                  bio: "MBA with experience scaling operations at high-growth startups."
                },
                {
                  name: "Taylor Kim",
                  role: "Head of Startup Relations",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1587",
                  bio: "Former startup founder who has raised over $20M in venture funding."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-fundr-600 font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-fundr-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're a startup looking for funding or an investor seeking opportunities, StartupFundr is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/startups">Browse Startups</Link>
              </Button>
              <Button size="lg" className="bg-white text-fundr-600 hover:bg-gray-100" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
