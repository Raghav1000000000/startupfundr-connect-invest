
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSuccessStories } from "@/hooks/use-success-stories";
import { Skeleton } from "@/components/ui/skeleton";

export default function SuccessStories() {
  const { data: successStories, isLoading, error } = useSuccessStories();
  
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
              {isLoading && (
                <>
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="mb-16 border-b pb-16">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-2/5">
                          <Skeleton className="h-64 w-full rounded-lg" />
                        </div>
                        <div className="md:w-3/5">
                          <Skeleton className="h-4 w-32 mb-4" />
                          <Skeleton className="h-8 w-full mb-4" />
                          <Skeleton className="h-20 w-full mb-6" />
                          <div className="space-y-3 mb-6">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="flex items-center">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-4 w-24 ml-4" />
                              </div>
                            ))}
                          </div>
                          <Skeleton className="h-10 w-32" />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              
              {error && (
                <div className="text-center py-10">
                  <p className="text-red-500">Failed to load success stories. Please try again later.</p>
                  <Button onClick={() => window.location.reload()} className="mt-4">
                    Retry
                  </Button>
                </div>
              )}

              {!isLoading && !error && successStories?.map((story, index) => (
                <div key={story.id} className={`mb-16 ${index < successStories.length - 1 ? 'border-b pb-16' : ''}`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/5">
                      <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                        <img 
                          src={story.imageUrl} 
                          alt={story.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/5">
                      <div className="flex items-center mb-4">
                        <span className="bg-success-100 text-success-700 text-sm font-medium px-3 py-1 rounded-full">Success Story</span>
                        <span className="ml-3 text-gray-500 text-sm">{story.industry}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
                      <p className="text-gray-600 mb-6">
                        {story.summary}
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <span className="font-medium w-32">Founded:</span>
                          <span>{story.foundedYear}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium w-32">Raised:</span>
                          <span>${story.raisedAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium w-32">Investors:</span>
                          <span>{story.investors}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium w-32">Campaign Length:</span>
                          <span>{story.campaignLength} days</span>
                        </div>
                      </div>
                      <Button variant="outline" className="text-fundr-600 border-fundr-600 hover:bg-fundr-50">
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {!isLoading && !error && successStories?.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500">No success stories found.</p>
                </div>
              )}
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
