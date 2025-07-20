import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - can integrate with Formspree or similar service
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            or just having a conversation about technology and engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:trinath.anantham@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    trinath.anantham@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+919542092091" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    +91 954 209 2091
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">KPHB, Hyderabad, India</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="font-medium mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/trinathanantham" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/trinath-anantham-045a19112/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://trinath.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    🌐
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                </div>
                <Input 
                  placeholder="Subject" 
                  required 
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  required 
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;