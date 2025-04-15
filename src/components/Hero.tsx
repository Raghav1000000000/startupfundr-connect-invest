
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "StartupFundr helped me raise $2M in seed funding in just 3 weeks. The platform is intuitive and the investor network is impressive.",
      author: "Sarah Johnson",
      role: "Founder, TechSolutions Inc."
    },
    {
      quote: "As an investor, I've found some of my best performing investments through StartupFundr. The due diligence tools are fantastic.",
      author: "Michael Chen",
      role: "Angel Investor"
    },
    {
      quote: "The support from the StartupFundr team was instrumental in helping us refine our pitch and connect with the right investors.",
      author: "David Rodriguez",
      role: "CEO, EcoInnovate"
    }
  ];

  const handleScrollToFeatures = () => {
    const featuredStartups = document.getElementById('featured-startups');
    if (featuredStartups) {
      featuredStartups.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background pattern - visible in both light and dark modes */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-fundr-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 -right-24 w-96 h-96 bg-success-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-fundr-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="relative z-10 bg-white dark:bg-gray-900 transition-colors duration-300 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white dark:text-gray-900 lg:block transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 
                className={`text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-all duration-700 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="block">Invest in the</span>{" "}
                <span className="block gradient-text">future of innovation</span>
              </h1>
              <p 
                className={`mt-3 text-base text-gray-500 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 transition-all duration-700 delay-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                StartupFundr connects investors with promising startups. Discover, invest, and grow with the next generation of entrepreneurs and innovators.
              </p>
              
              <div 
                className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start transition-all duration-700 delay-500 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="rounded-md shadow">
                  <Link to="/startups">
                    <Button className="flex w-full items-center justify-center rounded-md border border-transparent bg-fundr-600 px-8 py-3 text-base font-medium text-white hover:bg-fundr-700 md:py-4 md:px-10 md:text-lg transition-transform duration-300 hover:scale-105">
                      Explore Startups
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/how-it-works">
                    <Button variant="outline" className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg transition-transform duration-300 hover:scale-105 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Scroll indicator */}
              <div className={`hidden md:flex justify-center lg:justify-start mt-12 transition-all duration-700 delay-700 transform ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                <button 
                  onClick={handleScrollToFeatures}
                  className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-fundr-600 dark:hover:text-fundr-400 transition-colors"
                >
                  <span className="text-sm mb-2">Scroll to explore</span>
                  <ChevronDown className="animate-bounce" size={20} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-r from-fundr-600/90 to-success-500/90 dark:from-fundr-800/90 dark:to-success-700/90 transition-colors duration-300 sm:h-72 lg:h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-white p-8">
            <div 
              className={`grid grid-cols-1 gap-8 md:grid-cols-3 max-w-3xl transition-all duration-700 delay-700 transform ${
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <TrendingUp className="h-12 w-12 mb-4 animate-bounce" style={{ animationDuration: '3s' }} />
                <h3 className="text-xl font-bold mb-2">Growth Potential</h3>
                <p className="text-white/90">Invest in early-stage startups with high growth potential</p>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <Shield className="h-12 w-12 mb-4 animate-pulse" style={{ animationDuration: '2s' }} />
                <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
                <p className="text-white/90">Thoroughly vetted startups and secure investment process</p>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <Users className="h-12 w-12 mb-4 animate-pulse" style={{ animationDuration: '2.5s' }} />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-white/90">Join a community of investors and entrepreneurs</p>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className={`mt-10 max-w-2xl transition-all duration-700 delay-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <div className="relative h-48">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`absolute w-full transition-all duration-500 transform ${
                      activeSlide === index 
                        ? "translate-x-0 opacity-100" 
                        : "translate-x-full opacity-0"
                    }`}
                  >
                    <blockquote className="text-center">
                      <p className="text-lg italic mb-4">{testimonial.quote}</p>
                      <footer>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-white/80">{testimonial.role}</p>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      activeSlide === index ? "bg-white" : "bg-white/40"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
