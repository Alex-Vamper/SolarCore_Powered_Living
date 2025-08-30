import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Homeowner",
    location: "Lagos, Nigeria",
    rating: 5,
    quote: "SolarCore transformed our home into a smart, energy-efficient haven. The solar integration is seamless, and we've reduced our electricity bills by 80%.",
    image: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Executive", 
    location: "Abuja, Nigeria",
    rating: 5,
    quote: "The intelligent automation adapts to our lifestyle perfectly. Coming home to the perfect temperature and lighting every day feels like magic.",
    image: "MC"
  },
  {
    id: 3,
    name: "Amina Abdullahi",
    role: "Architect",
    location: "Kano, Nigeria",
    rating: 5,
    quote: "As an architect, I appreciate the elegant design and seamless integration. SolarCore doesn't just add technology; it enhances the living experience.",
    image: "AA"
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Business Owner",
    location: "Port Harcourt, Nigeria",
    rating: 5,
    quote: "The ROI on our SolarCore installation exceeded expectations. Smart energy management has revolutionized how we think about power consumption.",
    image: "DO"
  },
  {
    id: 5,
    name: "Dr. Fatima Al-Hassan",
    role: "Medical Professional",
    location: "Kaduna, Nigeria", 
    rating: 5,
    quote: "Reliability is crucial in my profession. SolarCore's backup systems ensure we never lose power, and the smart controls give us total peace of mind.",
    image: "FA"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their homes with SolarCore
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <div className="flex items-stretch justify-center space-x-6 min-h-[400px]">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${currentIndex}`}
                className={cn(
                  "transition-all duration-700 ease-in-out shadow-lg",
                  index === 1
                    ? "w-96 opacity-100 scale-105 z-10 shadow-elegant" // Center card
                    : "w-80 opacity-75 scale-95 z-0" // Side cards
                )}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="h-8 w-8 text-accent" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-center text-muted-foreground mb-6 flex-grow italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonial.image}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIndex === index 
                    ? "bg-primary scale-125" 
                    : "bg-border hover:bg-muted-foreground"
                )}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">₦850M+</div>
            <div className="text-muted-foreground">Energy Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5-Star</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;