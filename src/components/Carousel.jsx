import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import model1 from "../assets/Images/model1.jpg";
import model2 from "../assets/Images/model2.jpg";
import model3 from "../assets/Images/model3.jpg";
import model4 from "../assets/Images/model4.jpg";
import beachView from "../assets/Images/beach-view.jpg";
import friends from "../assets/Images/friends.jpg";
import ladyWeaving from "../assets/Images/lady_weaving.jpg";
import leatherStraw from "../assets/Images/learther-straw-hat.jpg";

const slides = [
  {
    image: model1,
    alt: "Model showcasing Sirahat products",
    title: "Elegant Style",
    description: "Discover our premium collection"
  },
  {
    image: model2,
    alt: "Model with straw hat",
    title: "Summer Collection",
    description: "Perfect for beach days"
  },
  {
    image: model3,
    alt: "Model with leather accessories",
    title: "Leather Craft",
    description: "Handcrafted with care"
  },
  {
    image: model4,
    alt: "Model with beach accessories",
    title: "Beach Essentials",
    description: "Your perfect beach companion"
  },
  {
    image: beachView,
    alt: "Beach view with Sirahat products",
    title: "Beach Lifestyle",
    description: "Embrace the coastal life"
  },
  {
    image: friends,
    alt: "Friends enjoying beach time",
    title: "Share Moments",
    description: "Create memories together"
  },
  {
    image: ladyWeaving,
    alt: "Traditional weaving process",
    title: "Artisan Craft",
    description: "Handmade with tradition"
  },
  {
    image: leatherStraw,
    alt: "Leather and straw combination",
    title: "Premium Materials",
    description: "Quality meets style"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      {/* Main Carousel */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg md:text-xl">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
