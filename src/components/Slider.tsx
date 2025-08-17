import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  showNavigation?: boolean;
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

export function Slider({ 
  children, 
  className = "", 
  itemClassName = "",
  showNavigation = true,
  autoScroll = false,
  autoScrollInterval = 5000
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const updateScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current && children[index]) {
      const slider = sliderRef.current;
      const firstChild = slider.firstElementChild as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 24; // Include gap
        slider.scrollTo({
          left: index * itemWidth,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const firstChild = slider.firstElementChild as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 24; // Include gap
        slider.scrollBy({
          left: -itemWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const firstChild = slider.firstElementChild as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 24; // Include gap
        slider.scrollBy({
          left: itemWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      updateScrollButtons();
      slider.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      return () => {
        slider.removeEventListener('scroll', updateScrollButtons);
        window.removeEventListener('resize', updateScrollButtons);
      };
    }
  }, []);

  useEffect(() => {
    if (autoScroll && children.length > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % children.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, autoScrollInterval);

      return () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      };
    }
  }, [autoScroll, autoScrollInterval, children.length]);

  const handleMouseEnter = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoScroll && children.length > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % children.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, autoScrollInterval);
    }
  };

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      {showNavigation && !autoScroll && (
        <>
          <Button
            variant="outline"
            size="sm"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0 bg-background/80 backdrop-blur-sm transition-opacity ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } group-hover:opacity-100`}
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0 bg-background/80 backdrop-blur-sm transition-opacity ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } group-hover:opacity-100`}
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`flex-shrink-0 snap-start ${itemClassName}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots Indicator - Only show for auto-scroll */}
      {autoScroll && children.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}