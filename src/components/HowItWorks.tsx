
import { CircleDollarSign, Search, TrendingUp, BarChart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-fundr-600" />,
      title: "Discover Startups",
      description: "Browse through our curated list of innovative startups from various industries and regions."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-fundr-600" />,
      title: "Research & Analyze",
      description: "Review detailed profiles, business models, and growth projections to make informed decisions."
    },
    {
      icon: <CircleDollarSign className="h-10 w-10 text-fundr-600" />,
      title: "Invest Securely",
      description: "Choose your investment amount and complete the process through our secure payment system."
    },
    {
      icon: <BarChart className="h-10 w-10 text-fundr-600" />,
      title: "Track Performance",
      description: "Monitor your investments, receive updates, and watch your portfolio grow over time."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How StartupFundr Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            StartupFundr makes it easy for you to discover and invest in promising startups. Follow these simple steps to start your investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="h-20 w-20 rounded-full bg-fundr-50 flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-200"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
