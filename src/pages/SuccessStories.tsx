
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SuccessStories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-fundr-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
              <p className="text-lg md:text-xl text-gray-600">
                Discover how innovative startups achieved their funding goals and accelerated growth through StartupFundr.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Success Story 1 */}
              <div className="mb-16 border-b pb-16">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/5">
                    <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740" 
                        alt="EcoTech Solutions Team" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="flex items-center mb-4">
                      <span className="bg-success-100 text-success-700 text-sm font-medium px-3 py-1 rounded-full">Success Story</span>
                      <span className="ml-3 text-gray-500 text-sm">CleanTech</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">EcoTech Solutions: $2.5M Raised for Sustainable Energy Storage</h2>
                    <p className="text-gray-600 mb-6">
                      EcoTech Solutions developed an innovative battery technology that improves energy storage efficiency by 40%. 
                      Through StartupFundr, they connected with investors passionate about clean energy and raised $2.5M to scale production.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <span className="font-medium w-32">Founded:</span>
                        <span>2020</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Raised:</span>
                        <span>$2,500,000</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Investors:</span>
                        <span>87</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Campaign Length:</span>
                        <span>45 days</span>
                      </div>
                    </div>
                    <Button variant="outline" className="text-fundr-600 border-fundr-600 hover:bg-fundr-50">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="mb-16 border-b pb-16">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/5">
                    <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                        alt="MediSync Team" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="flex items-center mb-4">
                      <span className="bg-success-100 text-success-700 text-sm font-medium px-3 py-1 rounded-full">Success Story</span>
                      <span className="ml-3 text-gray-500 text-sm">HealthTech</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">MediSync: $1.8M to Revolutionize Patient Care Coordination</h2>
                    <p className="text-gray-600 mb-6">
                      MediSync created a platform that streamlines communication between healthcare providers for better patient outcomes. 
                      They raised $1.8M on StartupFundr to expand their team and accelerate hospital adoption nationwide.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <span className="font-medium w-32">Founded:</span>
                        <span>2021</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Raised:</span>
                        <span>$1,800,000</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Investors:</span>
                        <span>64</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Campaign Length:</span>
                        <span>60 days</span>
                      </div>
                    </div>
                    <Button variant="outline" className="text-fundr-600 border-fundr-600 hover:bg-fundr-50">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>

              {/* Success Story 3 */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/5">
                    <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                        alt="EduLearn Team" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="flex items-center mb-4">
                      <span className="bg-success-100 text-success-700 text-sm font-medium px-3 py-1 rounded-full">Success Story</span>
                      <span className="ml-3 text-gray-500 text-sm">EdTech</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">EduLearn: $3.2M for AI-Powered Learning Platform</h2>
                    <p className="text-gray-600 mb-6">
                      EduLearn developed an AI-powered platform that personalizes education for K-12 students. Their successful 
                      StartupFundr campaign raised $3.2M to enhance their technology and expand to international markets.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <span className="font-medium w-32">Founded:</span>
                        <span>2019</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Raised:</span>
                        <span>$3,200,000</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Investors:</span>
                        <span>112</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium w-32">Campaign Length:</span>
                        <span>30 days</span>
                      </div>
                    </div>
                    <Button variant="outline" className="text-fundr-600 border-fundr-600 hover:bg-fundr-50">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-fundr-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join the growing number of startups that have achieved their funding goals through our platform. 
                StartupFundr connects you with investors who believe in your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-fundr-600 hover:bg-fundr-700">
                  Apply Now
                </Button>
                <Button variant="outline" className="text-fundr-600 border-fundr-600 hover:bg-fundr-50">
                  Learn How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
