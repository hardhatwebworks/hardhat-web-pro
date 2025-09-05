import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, CheckCircle, Star, Clock, Shield, Zap } from "lucide-react";

const LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEX//ev/+uf+9uT78+D68eD58eD58uX59OT79+r/9e7/8+v/9/D/9/P/9fH/8ej/8Ob97+H97N/86tv86dr85db84c/83c383Mz829X728v72sT72MP71r/70rX7zqf7yZz7x5P7xI/7wov7wIj7v4P7vHf7ulr7t1n7sVD7rk/7qz/7qTP7pS/7ow/7nQb7mAT7lAL7kQH7jQH7igD7hQD7gQD7fgD7egD7dwD7cwD7bgD7aQD7ZQD7YAD7XAD7WAD7VgD7UwD7TgD7SgD7RwD7QgD7PwD7OAD7NQD7MAD7LQD7KgD7JQD7IAD7HgD7GgD7FQD7EAD7DAD7CgD7BQD7AAD6/v76+vr6+Pn6+Pf6+PX6+PL6+PD59/f59/b59/X59/L59/H58+z58ur58ej58Ob58OX58OL57+H57N/56tv56dr55db54c/53c3529X528v52sT52MP51r/50rX5zqf5yZz5x5P5xI/5wov5wIj5v4P5vHf5ulr5t1n5sVD5rk/5qz/5qTP5pS/5ow/5nQb5mAT5lAL5kQH5jQH5igD5hQD5gQD5fgD5egD5dwD5cwD5bgD5aQD5ZQD5YAD5XAD5WAD5VgD5UwD5TgD5SgD5RwD5QgD5PwD5OAD5NQD5MAD5LQD5KgD5JQD5IAD5HgD5GgD5FQD5EAD5DAD5CgD5BQD5AAD49/f49/b49/X49/L49/H48+z48ur48ej48Ob48OX48OL47+H47N/46tv46dr45db44c/43c3429X428v42sT42MP41r/40rX4zqf4yZz4x5P4xI/4wov4wIj4v4P4vHf4ulr4t1n4sVD4rk/4qz/4qTP4pS/4ow/4nQb4mAT4lAL4kQH4jQH4igD4hQD4gQD4fgD4egD4dwD4cwD4bgD4aQD4ZQD4YAD4XAD4WAD4VgD4UwD4TgD4SgD4RwD4QgD4PwD4OAD4NQD4MAD4LQD4KgD4JQD4IAD4HgD4GgD4FQD4EAD4DAD4CgD4BQD4AAD3/Pz3+/v39/f39/b39/X39/L39/H38+z38ur38ej38Ob38OX38OL37+H37N/36tv36dr35db34c/33c3229X328v32sT32MP31r/30rX3zqf3yZz3x5P3xI/3wov3wIj3v4P3vHf3ulr3t1n3sVD3rk/3qz/3qTP3pS/3ow/3nQb3mAT3lAL3kQH3jQH3igD3hQD3gQD3fgD3egD3dwD3cwD3bgD3aQD3ZQD3YAD3XAD3WAD3VgD3UwD3TgD3SgD3RwD3QgD3PwD3OAD3NQD3MAD3LQD3KgD3JQD3IAD3HgD3GgD3FQD3EAD3DAD3CgD3BQD3AAD2+vr2+Pn2+Pf2+PX2+PL2+PD29/f29/b29/X29/L29/H28+z28ur28ej28Ob28OX28OL27+H27N/26tv26dr25db24c/23c3229X228v22sT22MP21r/20rX2zqf2yZz2x5P2xI/2wov2wIj2v4P2vHf2ulr2t1n2sVD2rk/2qz/2qTP2pS/2ow/2nQb2mAT2lAL2kQH2jQH2igD2hQD2gQD2fgD2egD2dwD2cwD2bgD2aQD2ZQD2YAD2XAD2WAD2VgD2UwD2TgD2SgD2RwD2QgD2PwD2OAD2NQD2MAD2LQD2KgD2JQD2IAD2HgD2GgD2FQD2EAD2DAD2CgD2BQD2AAD1/Pz1+/v19/f19/b19/X19/L19/H18+z18ur18ej18Ob18OX18OL17+H17N/16tv16dr15db14c/13c311AAA";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    tradeType: '',
    serviceAreas: '',
    needType: '',
    goals: '',
    timeline: '',
    message: '',
    privacyConsent: false,
    captcha: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaAnswer] = useState(Math.floor(Math.random() * 10) + 1);
  const [captchaQuestion] = useState(Math.floor(Math.random() * 10) + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(formData.captcha) === captchaAnswer + captchaQuestion) {
      setIsSubmitted(true);
    } else {
      alert('Please solve the math problem correctly.');
    }
  };

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={LOGO_DATA_URI} 
              alt="Hardhat Webworks logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-primary">Hardhat Webworks</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-foreground hover:text-secondary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-secondary transition-colors">About</a>
            <a href="#pricing" className="text-foreground hover:text-secondary transition-colors">Pricing</a>
            <div className="flex items-center space-x-3">
              <a href="tel:971-772-6943" className="text-primary hover:text-secondary transition-colors font-medium">
                <Phone className="inline w-4 h-4 mr-1" />971-772-6943
              </a>
              <Button onClick={scrollToQuote} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Get a Free Quote
              </Button>
            </div>
          </nav>

          <div className="md:hidden">
            <Button onClick={scrollToQuote} size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            <Clock className="w-4 h-4 mr-1" />
            Launch in as fast as 72 hours
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Websites Built for Trades.<br />
            <span className="text-accent">Time Back for You.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We build contractor websites that bring in better leads, link to your Google Business Profile, and cut down on phone tag and paperwork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToQuote}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
            >
              Get a Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
              asChild
            >
              <a href="tel:971-772-6943">
                <Phone className="w-5 h-5 mr-2" />
                Call 971-772-6943
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />24/7 support
            </span>
            <span className="flex items-center">
              <Shield className="w-4 h-4 mr-1" />30-day money-back guarantee
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />Oregon-based team
            </span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background" id="benefits">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">What You Get</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">More Quality Leads</h3>
                <p className="text-muted-foreground">More calls and form leads from people who are ready to book.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
                <p className="text-muted-foreground">A clean site that's easy to use on a phone.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Simple Tools</h3>
                <p className="text-muted-foreground">Simple tools for requests, estimates, and invoices.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">We Handle Tech</h3>
                <p className="text-muted-foreground">We handle the tech. You focus on paid work.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={scrollToQuote} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted" id="about">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hardhat Webworks is a small team in Tualatin, Oregon. We build and upgrade websites for contractors and trade businesses. We keep it simple: clear pages, fast load times, and easy ways for customers to reach you. We are Mitch Palmer and Peter Linder—two Oregon State University grads who like straight talk and solid work.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background" id="services">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Services</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-primary">New Websites</h3>
                <p className="text-muted-foreground mb-6">
                  A professional site that shows your services, photos, licenses, service areas, and how to contact you. Built to work with your Google Business Profile.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Professional design</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Mobile optimized</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Google Business integration</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Website Upgrades</h3>
                <p className="text-muted-foreground mb-6">
                  Have a site already? We make it look current, load fast, and work great on phones. We fix broken pages, clean up wording, and improve credibility.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Modern design updates</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Speed optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Content improvements</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-accent">Time-Saver Setup</h3>
                <p className="text-muted-foreground mb-6">
                  Forms that route to your email or spreadsheet, optional scheduling links, and basic estimate/invoice workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Smart contact forms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Scheduling integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Workflow automation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={scrollToQuote} size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">How It Works</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Quick Call</h3>
              <p className="text-muted-foreground">Tell us your services and goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Build</h3>
              <p className="text-muted-foreground">We write the words, design the pages, and set up the forms.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Launch</h3>
              <p className="text-muted-foreground">Connect your domain and Google Business Profile. Go live—often within 72 hours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-muted-foreground">30 days of edits and clear advice on next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">What Contractors Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Leads picked up fast and the new site is easy for customers."
                </p>
                <p className="text-sm font-semibold">Mike R., General Contractor</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Our phones ring less because the form sends us clear job info."
                </p>
                <p className="text-sm font-semibold">Sarah T., Electrician</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Looks professional on a phone and we book more bids."
                </p>
                <p className="text-sm font-semibold">Tom B., Landscaper</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Straightforward, fast, and no tech talk."
                </p>
                <p className="text-sm font-semibold">Ana L., Plumbing Owner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted" id="pricing">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Straightforward Pricing</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every shop is different. Most projects fit one of these:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold mb-3 text-primary">Starter</h3>
                <p className="text-sm text-muted-foreground">One-page lead catcher connected to Google Business Profile.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-accent border-2">
              <CardContent className="pt-0">
                <Badge className="mb-3 bg-accent text-accent-foreground">Most Popular</Badge>
                <h3 className="text-xl font-bold mb-3 text-secondary">Pro</h3>
                <p className="text-sm text-muted-foreground">Multi-page services, photo gallery, FAQs, and lead forms.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold mb-3 text-accent">All-In</h3>
                <p className="text-sm text-muted-foreground">Advanced forms, scheduling, invoice connections, copywriting help.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-background p-6 rounded-lg mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              30-day money-back guarantee • 72-hour launch option available
            </p>
          </div>
          
          <Button onClick={scrollToQuote} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-primary">How soon can you launch?</h3>
                <p className="text-muted-foreground">Many sites are live in 72 hours after we get your info.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-primary">Do I need to write the words?</h3>
                <p className="text-muted-foreground">No. We can write them for you in plain language.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-primary">Can you work with my current site?</h3>
                <p className="text-muted-foreground">Yes. We do upgrades to make it modern, credible, and mobile-friendly.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-primary">Do you host and maintain?</h3>
                <p className="text-muted-foreground">We can handle it for you or hand it off with instructions.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-primary">What if I'm not happy?</h3>
                <p className="text-muted-foreground">30-day money-back satisfaction guarantee.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={scrollToQuote} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-accent/10" id="quote-form">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Request a Free Quote</h2>
            <p className="text-lg text-muted-foreground">
              Tell us what you do and what you need. We'll reply within 24 hours.
            </p>
          </div>
          
          {!isSubmitted ? (
            <Card className="p-8">
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                      <Input 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Business Name</label>
                      <Input 
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                      <Input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone *</label>
                      <Input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Trade Type</label>
                    <Select value={formData.tradeType} onValueChange={(value) => setFormData({...formData, tradeType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your trade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general-contractor">General Contractor</SelectItem>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                        <SelectItem value="roofing">Roofing</SelectItem>
                        <SelectItem value="landscaping">Landscaping</SelectItem>
                        <SelectItem value="painting">Painting</SelectItem>
                        <SelectItem value="flooring">Flooring</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Areas</label>
                    <Input 
                      placeholder="Cities or regions you serve"
                      value={formData.serviceAreas}
                      onChange={(e) => setFormData({...formData, serviceAreas: e.target.value})}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">What do you need?</label>
                    <Select value={formData.needType} onValueChange={(value) => setFormData({...formData, needType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="New site or upgrade?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-site">New Site</SelectItem>
                        <SelectItem value="upgrade">Upgrade Existing Site</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Goals</label>
                    <Textarea 
                      placeholder="What do you want your website to accomplish?"
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      className="w-full"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">How fast do you need it?</label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="72-hours">72 hours</SelectItem>
                        <SelectItem value="1-week">1 week</SelectItem>
                        <SelectItem value="2-weeks">2+ weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Additional Message</label>
                    <Textarea 
                      placeholder="Anything else we should know?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full"
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="privacy"
                      checked={formData.privacyConsent}
                      onCheckedChange={(checked) => setFormData({...formData, privacyConsent: checked as boolean})}
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to be contacted about my project and consent to privacy policy *
                    </label>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Simple Math: What is {captchaQuestion} + {captchaAnswer}? *
                    </label>
                    <Input 
                      type="number"
                      required
                      value={formData.captcha}
                      onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                      className="w-32"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-4"
                  >
                    Get My Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="p-8 text-center">
              <CardContent className="pt-0">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Thanks!</h3>
                <p className="text-lg text-muted-foreground">
                  We'll contact you within 24 hours.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background" id="contact">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Contact</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <a 
              href="tel:971-772-6943" 
              className="flex items-center space-x-2 text-lg text-primary hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call 971-772-6943</span>
            </a>
            
            <a 
              href="mailto:hardhatwebworks@gmail.com" 
              className="flex items-center space-x-2 text-lg text-primary hover:text-secondary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email hardhatwebworks@gmail.com</span>
            </a>
            
            <div className="flex items-center space-x-2 text-lg text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Tualatin, OR</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8">24/7 support</p>
          
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <a href="tel:971-772-6943">Call Now</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:hardhatwebworks@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-3">
              <img 
                src={LOGO_DATA_URI} 
                alt="Hardhat Webworks logo" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-lg font-bold">Hardhat Webworks</div>
                <div className="text-sm opacity-80">Websites built for trades</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2 md:items-end">
              <div className="flex items-center space-x-4">
                <a href="tel:971-772-6943" className="hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 inline mr-1" />971-772-6943
                </a>
                <a href="mailto:hardhatwebworks@gmail.com" className="hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 inline mr-1" />hardhatwebworks@gmail.com
                </a>
              </div>
              <div className="flex space-x-4 text-xs opacity-60">
                <a href="#" className="hover:opacity-100">Privacy</a>
                <a href="#" className="hover:opacity-100">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;