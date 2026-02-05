import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, TrendingUp, Target, Zap, BarChart3 } from "lucide-react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-display text-primary">RV Audit</div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm font-medium hover:text-primary transition">How It Works</a>
            <a href="#roi" className="text-sm font-medium hover:text-primary transition">ROI</a>
            <Button className="cta-button" onClick={() => setIsContactOpen(true)}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-blue-50 to-background pt-20 pb-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display text-primary leading-tight">
                Unlock Hidden Pipeline Value
              </h1>
              <p className="text-xl text-gray-700 font-body leading-relaxed max-w-lg">
                Transform your service department data into actionable sales opportunities. 
                Identify trade-ins, expiring warranties, and missed upsells in minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button text-lg" onClick={() => setIsContactOpen(true)}>
                Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="text-lg" onClick={() => setIsLearnMoreOpen(true)}>
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-accent">$100K+</div>
                <p className="text-sm text-gray-600">Pipeline Value Uncovered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">20x</div>
                <p className="text-sm text-gray-600">Return on Investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-primary mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process transforms your service data into actionable sales leads in three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-border hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display text-primary mb-3">1. Data Collection</h3>
              <p className="text-gray-700 font-body">
                We securely access your service department records through your DMS.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display text-primary mb-3">2. Analysis</h3>
              <p className="text-gray-700 font-body">
                Our algorithms identify trade-in candidates, expiring warranties, and missed upsells.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display text-primary mb-3">3. Action</h3>
              <p className="text-gray-700 font-body">
                Receive a comprehensive report with prioritized leads and outreach strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-primary mb-4">Proven ROI</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our clients see measurable results.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-display text-primary mb-4">Investment</h3>
                <div className="text-5xl font-bold text-accent mb-2">$5,000</div>
                <p className="text-gray-700">One-time audit engagement</p>
              </div>
              <div>
                <h3 className="text-2xl font-display text-primary mb-4">Return</h3>
                <div className="text-5xl font-bold text-accent mb-2">$100K+</div>
                <p className="text-gray-700">Hidden pipeline value identified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display">Ready to Unlock Your Hidden Pipeline?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get a free consultation and discover how much value is hiding in your service department data.
          </p>
          <Button 
            className="bg-accent text-accent-foreground hover:bg-amber-600 text-lg px-8 py-3" 
            onClick={() => setIsContactOpen(true)}
          >
            Schedule Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container text-center text-sm">
          <p>© 2026 RV Service-to-Sales Audit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
