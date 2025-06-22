import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Helper function to get Google Drive image URL using direct Googleusercontent format
const getGoogleDriveImageUrl = (fileId) => {
  // Use direct Googleusercontent URL format for better reliability
  return `https://lh3.googleusercontent.com/d/${fileId}=w1200`;
};

const slides = [
  {
    image: getGoogleDriveImageUrl("1yV_Nt0hfTTk2QxGQVtQrUCdE6Zjj9fsk"),
    alt: "Model showcasing Sirahat products",
    title: "Elegant Style",
    description: "Discover our premium collection"
  },
  {
    image: getGoogleDriveImageUrl("1ETS1teZeENTItKzLomaVZYZcyEViwqvJ"),
    alt: "Model with straw hat",
    title: "Summer Collection",
    description: "Perfect for beach days"
  },
  {
    image: getGoogleDriveImageUrl("1UgVBQ8rqhWpd_NONZUTOtWKTFKQEvfn5"),
    alt: "Model with leather accessories",
    title: "Leather Craft",
    description: "Handcrafted with care"
  },
  {
    image: getGoogleDriveImageUrl("15FHmS5shL5YZ5CAGFgT5OsZ_BuyRSLfS"),
    alt: "Model with beach accessories",
    title: "Beach Essentials",
    description: "Your perfect beach companion"
  },
  {
    image: getGoogleDriveImageUrl("1N8-A1_IdWTdzg_PEugdp1iaRz2LhtTjp"),
    alt: "Beach view with Sirahat products",
    title: "Beach Lifestyle",
    description: "Embrace the coastal life"
  },
  {
    image: getGoogleDriveImageUrl("19m16Eh_dCBsU2AodfGAzH5CFJgesYLca"),
    alt: "Friends enjoying beach time",
    title: "Share Moments",
    description: "Create memories together"
  },
  {
    image: getGoogleDriveImageUrl("1F43btTyVALlzt9CY5dI-xlOaHO6tuiDw"),
    alt: "Traditional weaving process",
    title: "Artisan Craft",
    description: "Handmade with tradition"
  },
  {
    image: getGoogleDriveImageUrl("1DwM0pT57QZM4vP78yXFc0ylGDw00DzdM"),
    alt: "Leather and straw combination",
    title: "Premium Materials",
    description: "Quality meets style"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

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

  const handleImageError = (index, imageUrl) => {
    console.error(`Carousel image ${index} failed to load:`, imageUrl);
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index) => {
    console.log(`Carousel image ${index} loaded successfully`);
  };

  const getImageUrl = (slide, index) => {
    if (imageErrors[index]) {
      // Fallback to thumbnail format if direct Googleusercontent fails
      const fileId = slide.image.split('d/')[1].split('=')[0];
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
    }
    return slide.image;
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
              src={getImageUrl(slide, index)}
              alt={slide.alt}
              className="w-full h-full object-cover"
              onError={() => handleImageError(index, slide.image)}
              onLoad={() => handleImageLoad(index)}
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
