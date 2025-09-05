import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
            About <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Oregon-based team dedicated to helping contractors succeed online.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Who We Are</h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Hardhat Webworks is a small team in Tualatin, Oregon. We build and upgrade websites for contractors and trade businesses. We keep it simple: clear pages, fast load times, and easy ways for customers to reach you.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We are Mitch Palmer and Peter Linder—two Oregon State University grads who like straight talk and solid work. We understand the trades because we've worked alongside contractors and know what matters: getting the job done right, on time, and without unnecessary complications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6 bg-card text-card-foreground">
                <CardContent className="pt-0 flex items-center">
                  <MapPin className="w-12 h-12 text-accent mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Oregon-Based</h3>
                    <p className="text-muted-foreground">Located in Tualatin, serving contractors across the Pacific Northwest and beyond.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card text-card-foreground">
                <CardContent className="pt-0 flex items-center">
                  <Users className="w-12 h-12 text-secondary mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Small Team, Big Results</h3>
                    <p className="text-muted-foreground">Personal attention and direct communication with the people building your site.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card text-card-foreground">
                <CardContent className="pt-0 flex items-center">
                  <Award className="w-12 h-12 text-accent mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trade-Focused</h3>
                    <p className="text-muted-foreground">We specialize in websites for contractors, understanding your unique business needs.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Approach */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Simple & Clear</h3>
                <p className="text-foreground">No jargon, no confusion. We explain everything in plain language and deliver exactly what we promise.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Fast & Reliable</h3>
                <p className="text-foreground">Quick turnaround times without cutting corners. Most sites launch within 72 hours of getting your information.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Results-Focused</h3>
                <p className="text-foreground">Every decision is made with one goal: helping you get more qualified leads and grow your business.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToQuote} 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
            >
              Work with Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;