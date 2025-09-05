import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const scrollToQuote = () => {
    navigate('/#quote-form');
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-foreground">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Straightforward <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            No hidden fees, no surprises. Choose the package that fits your business needs.
          </p>
          
          <div className="inline-flex items-center bg-accent/20 text-accent px-6 py-3 rounded-full mb-8">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-semibold">30-day money-back guarantee</span>
            <span className="mx-3">•</span>
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-semibold">72-hour launch option available</span>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="p-8 bg-card text-card-foreground relative">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-accent">Starter</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for getting started online with a professional presence.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />One-page lead catcher</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Google Business Profile connection</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Contact form with email routing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Mobile-optimized design</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Basic SEO setup</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />30 days of support</li>
                </ul>
                <Button 
                  onClick={scrollToQuote} 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Get Quote for Starter
                </Button>
              </CardContent>
            </Card>

            {/* Pro Package */}
            <Card className="p-8 bg-card text-card-foreground relative border-2 border-accent">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                Most Popular
              </Badge>
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Pro</h3>
                <p className="text-muted-foreground mb-6">
                  Complete website solution for established contractors.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Multi-page website</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Services showcase pages</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Photo gallery integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Advanced contact forms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />FAQ section</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Service area mapping</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Professional copywriting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />30 days of support</li>
                </ul>
                <Button 
                  onClick={scrollToQuote} 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Get Quote for Pro
                </Button>
              </CardContent>
            </Card>

            {/* All-In Package */}
            <Card className="p-8 bg-card text-card-foreground relative">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-accent">All-In</h3>
                <p className="text-muted-foreground mb-6">
                  Everything you need to run your business online efficiently.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Everything in Pro package</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Advanced lead qualification forms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Online scheduling integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Invoice connection setup</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Customer portal access</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Advanced analytics setup</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Extended copywriting help</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />60 days of support</li>
                </ul>
                <Button 
                  onClick={scrollToQuote} 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Get Quote for All-In
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 text-primary">Not sure which package is right for you?</h3>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Every shop is different. Let us know what you need and we'll recommend the best solution for your business.
            </p>
            <Button 
              onClick={scrollToQuote} 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
            >
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;