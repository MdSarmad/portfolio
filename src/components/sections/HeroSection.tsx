import { motion } from "framer-motion"
import { Button } from "../ui/button";
import { Download, Mail, Code2, Database } from "lucide-react";
import { TypingEffect } from "../TypingEffect";
import { ImageWithFallback } from "../fallback/ImageWithFallback";
import { typingTexts } from "../../data/portfolio-data";

interface HeroSectionProps {
  onGetResume: () => void;
}

export function HeroSection({ onGetResume }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-primary/20 shadow-xl"
          />
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl mb-4">
          Hi, I'm <span className="text-primary">MD Sarmad</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
          <TypingEffect texts={typingTexts} />
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate full-stack developer with 5+ years of experience creating innovative web solutions. 
          I specialize in React, Node.js, and modern web technologies to bring ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={onGetResume}>
            <Download className="mr-2 h-5 w-5" />
            Get My Resume
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="mr-2 h-5 w-5" />
            Let's Talk
          </Button>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 opacity-20"
      >
        <Code2 className="h-12 w-12" />
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 opacity-20"
      >
        <Database className="h-12 w-12" />
      </motion.div>
    </section>
  );
}