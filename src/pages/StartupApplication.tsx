
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StartupApplication() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-fundr-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Startup Application</h1>
              <p className="text-lg text-gray-600 mb-6">
                Complete this application to begin your fundraising journey with StartupFundr.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
              <form className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold border-b pb-2">Company Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name *</Label>
                      <Input id="company-name" placeholder="Your company name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website *</Label>
                      <Input id="website" placeholder="https://your-company.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline *</Label>
                    <Input id="tagline" placeholder="Short description of your company (max 100 characters)" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="software">Software & SaaS</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="fintech">Fintech</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="ai">AI & Machine Learning</SelectItem>
                          <SelectItem value="cleantech">CleanTech</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Company Stage *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idea">Idea/Concept</SelectItem>
                          <SelectItem value="mvp">MVP</SelectItem>
                          <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="series-a">Series A</SelectItem>
                          <SelectItem value="series-b">Series B</SelectItem>
                          <SelectItem value="growth">Growth</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="founded-year">Founded Year *</Label>
                      <Input id="founded-year" type="number" min="1900" max="2025" placeholder="Year founded" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees *</Label>
                      <Input id="employees" type="number" min="1" placeholder="Current team size" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Company Description *</Label>
                    <Textarea id="description" placeholder="Detailed description of your company, product, and market (max 500 words)" className="h-32" required />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold border-b pb-2">Founder Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="founder-name">Founder Name *</Label>
                      <Input id="founder-name" placeholder="Full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founder-email">Email *</Label>
                      <Input id="founder-email" type="email" placeholder="email@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="founder-bio">Founder Bio *</Label>
                    <Textarea id="founder-bio" placeholder="Brief background and relevant experience" className="h-24" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <Input id="linkedin" placeholder="LinkedIn URL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="co-founders">Number of Co-founders</Label>
                      <Input id="co-founders" type="number" min="0" placeholder="Number of co-founders" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold border-b pb-2">Funding Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="seeking-amount">Amount Seeking *</Label>
                      <Input id="seeking-amount" type="number" min="10000" placeholder="USD" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="equity-offering">Equity Offering (%) *</Label>
                      <Input id="equity-offering" type="number" min="0.1" max="100" step="0.1" placeholder="Percentage of equity" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="previous-funding">Previous Funding</Label>
                    <Textarea id="previous-funding" placeholder="Details of any previous funding rounds (investors, amounts, dates)" className="h-24" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="use-of-funds">Use of Funds *</Label>
                    <Textarea id="use-of-funds" placeholder="How will the raised capital be used? Be specific." className="h-24" required />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold border-b pb-2">Additional Information</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pitch-deck">Pitch Deck URL (Google Drive, Dropbox, etc.)</Label>
                    <Input id="pitch-deck" placeholder="URL to your pitch deck" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea id="additional-info" placeholder="Any other information you'd like to share with our team" className="h-24" />
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button type="submit" className="bg-fundr-600 hover:bg-fundr-700 text-lg px-8 py-3 h-auto">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
