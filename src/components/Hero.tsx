
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
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
                className={`mt-3 text-base text-gray-500 dark:text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 transition-all duration-700 delay-300 transform ${
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
                    <Button variant="outline" className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg transition-transform duration-300 hover:scale-105">
                      How It Works
                    </Button>
                  </Link>
                </div>
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
              <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <TrendingUp className="h-12 w-12 mb-4 animate-bounce" style={{ animationDuration: '3s' }} />
                <h3 className="text-xl font-bold mb-2">Growth Potential</h3>
                <p className="text-white/80">Invest in early-stage startups with high growth potential</p>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <Shield className="h-12 w-12 mb-4 animate-pulse" style={{ animationDuration: '2s' }} />
                <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
                <p className="text-white/80">Thoroughly vetted startups and secure investment process</p>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <Users className="h-12 w-12 mb-4 animate-pulse" style={{ animationDuration: '2.5s' }} />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-white/80">Join a community of investors and entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
