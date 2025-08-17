"use client";

import { Heart, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl mb-4">MD Sarmad</h3>
          <p className="text-muted-foreground mb-6">
            Full Stack Developer • React Specialist • Problem Solver
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-amber-500" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2024 MD Sarmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}