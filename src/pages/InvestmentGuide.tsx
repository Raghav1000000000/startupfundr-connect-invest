
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function InvestmentGuide() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-fundr-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Startup Investment Guide</h1>
              <p className="text-lg md:text-xl text-gray-600">
                Your comprehensive resource for understanding the startup investment landscape and making informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-fundr-50 rounded-lg p-8 mb-16">
                <h2 className="text-2xl font-bold mb-4">For New Investors</h2>
                <p className="text-lg mb-6">
                  If you're new to startup investing, this guide will walk you through the essentials of evaluating opportunities, understanding risks, and building a balanced portfolio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-fundr-600 hover:bg-fundr-700">Get Started</Button>
                  <Button variant="outline" className="text-fundr-600 border-fundr-600 hover:bg-fundr-50">
                    Watch Tutorial
                  </Button>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Understanding Startup Investments</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What is Startup Investing?</h3>
                    <p className="text-gray-600">
                      Startup investing involves providing capital to early-stage companies in exchange for equity or ownership. Unlike investing in public companies, startup investments are typically made in private companies that are still developing their products, finding their market fit, and scaling their operations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Types of Startup Investments</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6 border">
                        <h4 className="font-semibold mb-2">Equity Investments</h4>
                        <p className="text-gray-600 text-sm">
                          Direct ownership stake in the company. As the company grows, so does the value of your equity.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border">
                        <h4 className="font-semibold mb-2">Convertible Notes</h4>
                        <p className="text-gray-600 text-sm">
                          A loan that converts to equity during a future funding round, usually with a discount.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border">
                        <h4 className="font-semibold mb-2">SAFE (Simple Agreement for Future Equity)</h4>
                        <p className="text-gray-600 text-sm">
                          Similar to convertible notes but without debt components or maturity dates.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border">
                        <h4 className="font-semibold mb-2">Revenue Share Agreements</h4>
                        <p className="text-gray-600 text-sm">
                          Investors receive a percentage of the company's revenue until they achieve a set return.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Investment Stages</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase border">Stage</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase border">Description</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase border">Typical Investment</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase border">Risk Level</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-6 py-4 border">Pre-seed</td>
                            <td className="px-6 py-4 border">Idea or early prototype stage</td>
                            <td className="px-6 py-4 border">$10K - $500K</td>
                            <td className="px-6 py-4 border">Very High</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 border">Seed</td>
                            <td className="px-6 py-4 border">Working product with some traction</td>
                            <td className="px-6 py-4 border">$500K - $2M</td>
                            <td className="px-6 py-4 border">High</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 border">Series A</td>
                            <td className="px-6 py-4 border">Product-market fit with revenue growth</td>
                            <td className="px-6 py-4 border">$2M - $15M</td>
                            <td className="px-6 py-4 border">Moderate-High</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 border">Series B</td>
                            <td className="px-6 py-4 border">Scaling business with proven model</td>
                            <td className="px-6 py-4 border">$15M - $50M</td>
                            <td className="px-6 py-4 border">Moderate</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 border">Series C+</td>
                            <td className="px-6 py-4 border">Expansion and growth acceleration</td>
                            <td className="px-6 py-4 border">$50M+</td>
                            <td className="px-6 py-4 border">Moderate-Low</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Evaluating Startup Opportunities</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Team Assessment</h3>
                    <p className="text-gray-600">
                      Evaluate the founders and key team members. Look for relevant experience, track record, complementary skills, and their ability to execute the vision.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                    <p className="text-gray-600">
                      Analyze the target market size, growth potential, competition, and the startup's unique position within that market.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Financial Health</h3>
                    <p className="text-gray-600">
                      Review revenue, growth rates, burn rate, and financial projections. Consider the path to profitability and future funding needs.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Product & Technology</h3>
                    <p className="text-gray-600">
                      Assess the product's uniqueness, competitive advantages, technology stack, and intellectual property protection.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border mb-8">
                  <h3 className="text-xl font-semibold mb-4">Due Diligence Checklist</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Founding team background and experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Business model viability</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Market size and growth potential</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Competitive landscape analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Financial statements and projections</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Legal documents and contracts</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Intellectual property status</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fundr-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Customer acquisition strategy</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Red Flags to Watch For</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Unrealistic valuation or financial projections</li>
                    <li>Lack of transparency about challenges or competition</li>
                    <li>Founder disagreements or high team turnover</li>
                    <li>No clear path to revenue or profitability</li>
                    <li>Regulatory or legal uncertainties</li>
                    <li>Excessive spending or high burn rate</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Building Your Investment Portfolio</h2>
                
                <p className="text-gray-600 mb-6">
                  Successful startup investing typically involves building a diversified portfolio rather than betting on a single company. Here's how to approach portfolio construction:
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white rounded-lg p-6 border">
                    <h3 className="text-xl font-semibold mb-3">Diversification Strategies</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li><span className="font-medium">Sector diversification:</span> Invest across different industries to reduce sector-specific risks.</li>
                      <li><span className="font-medium">Stage diversification:</span> Spread investments across different funding stages from pre-seed to later stages.</li>
                      <li><span className="font-medium">Geography diversification:</span> Consider startups from different regions to capture various market opportunities.</li>
                      <li><span className="font-medium">Time diversification:</span> Invest gradually over time rather than all at once.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border">
                    <h3 className="text-xl font-semibold mb-3">Portfolio Construction Models</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Conservative</h4>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>20-30 investments</li>
                          <li>Later-stage focus</li>
                          <li>Established markets</li>
                          <li>5-10% of investment capital</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Balanced</h4>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>15-20 investments</li>
                          <li>Mix of stages</li>
                          <li>Diverse sectors</li>
                          <li>10-15% of investment capital</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Aggressive</h4>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>10-15 investments</li>
                          <li>Early-stage focus</li>
                          <li>Emerging markets</li>
                          <li>15-20% of investment capital</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What returns can I expect from startup investments?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-2">
                        Startup investing follows a "power law" distribution where most returns come from a small percentage of investments. Typically:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                        <li>50-70% of startups will fail or return less than the invested capital</li>
                        <li>20-30% will return 1-5x the investment</li>
                        <li>5-10% will return 5-20x the investment</li>
                        <li>1-2% may return 20x+ (these "home runs" drive overall portfolio returns)</li>
                      </ul>
                      <p className="text-gray-600">
                        Professional angel investors typically target a 20-25% annual portfolio return, but results vary widely based on investment selection, timing, and market conditions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How long should I expect to wait for returns?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">
                        Startup investments are highly illiquid with typical holding periods of 5-10 years before an exit event (acquisition or IPO). In some cases, returns may come earlier through secondary sales or later through extended growth periods. Be prepared for a long-term investment horizon with no short-term liquidity.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How much should I allocate to startup investments?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">
                        Financial advisors typically recommend allocating no more than 5-10% of your total investment portfolio to alternative investments like startups. This allocation should be money you can afford to lose completely without affecting your financial wellbeing or lifestyle. Never invest emergency funds or money needed for near-term expenses.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">Ready to Start Investing?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Put your knowledge to work by exploring curated investment opportunities on our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-fundr-600 hover:bg-fundr-700">
                    <Link to="/startups">Browse Startups</Link>
                  </Button>
                  <Button variant="outline" className="text-fundr-600 border-fundr-600 hover:bg-fundr-50">
                    <Link to="/faq">Read FAQs</Link>
                  </Button>
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
