
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Invest in the</span>{" "}
                <span className="block gradient-text">future of innovation</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                StartupFundr connects investors with promising startups. Discover, invest, and grow with the next generation of entrepreneurs and innovators.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/startups">
                    <Button className="flex w-full items-center justify-center rounded-md border border-transparent bg-fundr-600 px-8 py-3 text-base font-medium text-white hover:bg-fundr-700 md:py-4 md:px-10 md:text-lg">
                      Explore Startups
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/how-it-works">
                    <Button variant="outline" className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg">
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
        <div className="h-56 w-full bg-gradient-to-r from-fundr-600/90 to-success-500/90 sm:h-72 lg:h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-white p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-3xl">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Growth Potential</h3>
                <p className="text-white/80">Invest in early-stage startups with high growth potential</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
                <p className="text-white/80">Thoroughly vetted startups and secure investment process</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4" />
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
