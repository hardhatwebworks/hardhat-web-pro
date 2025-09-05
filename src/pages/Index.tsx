import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, CheckCircle, Star, Clock, Shield, Zap } from "lucide-react";

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
    <div className="min-h-screen bg-primary">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-foreground">
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
              className="border-foreground text-foreground hover:bg-foreground hover:text-primary text-lg px-8 py-4"
              asChild
            >
              <a href="tel:971-772-6943">
                <Phone className="w-5 h-5 mr-2" />
                Call 971-772-6943
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80 bg-foreground/10 rounded-full px-8 py-4 inline-flex">
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
            
            <Card className="p-8 bg-card text-card-foreground">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Website Revitalization</h3>
                <p className="text-muted-foreground mb-6">
                  Have a site already? We'll take your current website and transfer it to our platform, making it modern, credible, and mobile-friendly while striving to keep the same theme if desired.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Platform migration with theme preservation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Modern design updates</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Mobile responsiveness improvements</li>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Quick Call</h3>
              <p className="text-muted-foreground">Tell us your services and goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Questionnaire</h3>
              <p className="text-muted-foreground">We send you a detailed form to capture all the features, services, and information needed for your site.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Build</h3>
              <p className="text-muted-foreground">We write the words, design the pages, and set up the forms based on your questionnaire responses.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Launch</h3>
              <p className="text-muted-foreground">Connect your domain and Google Business Profile. Go live—often within 72 hours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Support</h3>
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
          
          <div className="bg-background/50 p-6 rounded-lg mb-8 border border-accent/20">
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-accent font-semibold">
                <Shield className="w-4 h-4" />
                30-day money-back guarantee
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2 text-accent font-semibold">
                <Clock className="w-4 h-4" />
                72-hour launch option available
              </span>
            </div>
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
                <p className="text-muted-foreground">No. We will take the form and make your additions to the website from that information.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold mb-3 text-primary">Can you work with my current site?</h3>
                <p className="text-muted-foreground">Yes. We will take the current website and transfer it to our website platform and make the modern, credible, and mobile-friendly upgrades while striving to keep the same theme, if desired.</p>
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

      <Footer />
    </div>
  );
};

export default Index;