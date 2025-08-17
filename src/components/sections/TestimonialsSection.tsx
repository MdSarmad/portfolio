import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../fallback/ImageWithFallback";
import { Star, Quote } from "lucide-react";
import { Slider } from "../Slider";
import { testimonials } from "../../data/portfolio-data";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

function TestimonialCard({ name, role, company, content, avatar, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <div className="relative mb-6 flex-1">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
          <p className="text-muted-foreground italic pl-6 leading-relaxed">
            "{content}"
          </p>
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          <ImageWithFallback
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-primary/20"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
            <p className="text-sm text-primary">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="lg:hidden">
            {/* Mobile/Tablet: Auto-scrolling slider */}
            <Slider
              autoScroll={true}
              autoScrollInterval={4000}
              itemClassName="w-full"
              className="px-4"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:block">
            {/* Desktop: Manual navigation slider */}
            <Slider
              showNavigation={true}
              itemClassName="w-80"
              className="px-12"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-80">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
}