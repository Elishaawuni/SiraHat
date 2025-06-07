import React from "react";
import { Heart, Globe, Leaf, Users, ShoppingBag, Star, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const missionPoints = [
    {
      icon: <Users className="w-8 h-8 text-green-700" />,
      title: "Artisan Empowerment",
      description: "Fair wages, access to training, and sustainable livelihoods for weaving communities."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-700" />,
      title: "Cultural Preservation",
      description: "Protecting and celebrating Bolgatanga's weaving heritage, ensuring these ancient techniques flourish for years to come."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-700" />,
      title: "Environmental Stewardship",
      description: "Utilizing eco-friendly materials, non‑toxic dyes, and responsible packaging to minimize our footprint."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-700" />,
      title: "Global Collaboration",
      description: "Building bridges between rural artisans and customers worldwide, fostering cross‑cultural understanding and mutual respect."
    }
  ];

  const collectionItems = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-700" />,
      title: "Market Baskets",
      description: "Spacious, sturdy, and beautifully patterned—perfect for farmers' markets, grocery runs, or everyday storage."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-700" />,
      title: "Tote & Shoulder Bags",
      description: "Versatile styles for work, school, or leisure, each lined with durable fabric and finished with hand‑stitched leather accents."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-700" />,
      title: "Home Décor & Storage",
      description: "Decorative bowls, planters, and storage baskets that add warmth and texture to any living space."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-700" />,
      title: "Special Editions & Collaborations",
      description: "Limited‑run collections featuring contemporary designs, artist partnerships, and seasonal colorways."
    }
  ];

  const whySirahatsPoints = [
    {
      icon: <Award className="w-8 h-8 text-green-700" />,
      title: "Unwavering Quality",
      description: "We maintain rigorous standards at every stage—from straw selection and dyeing to weaving and finishing."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-700" />,
      title: "Ethical Transparency",
      description: "We openly share our pricing, production costs, and profit margins so you can see exactly how your purchase supports our artisans."
    },
    {
      icon: <Users className="w-8 h-8 text-green-700" />,
      title: "Community Impact",
      description: "A percentage of every sale is reinvested into local weaving communities—funding apprenticeship programs, health initiatives, and educational scholarships."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-green-700" />,
      title: "Distinctive Design",
      description: "Authentic Bolgatanga patterns adapted for modern lifestyles. Our baskets are statements of style as well as symbols of cultural heritage."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SiraHat
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              SiraHat celebrates African craftsmanship. We offer high-quality, handwoven straw and leather products 
              that combine tradition with modern design, creating pieces that tell stories of heritage and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Mission
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Our Collection
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {collectionItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              Every Sirahats basket is both functional and artistic: the deep, spacious bases handle heavy loads, 
              while the intricate geometric patterns reflect Bolgatanga's signature aesthetic. Whether you're carrying 
              produce to market or styling your home, each piece is designed to last for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sirahats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Sirahats?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whySirahatsPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Join Us in Global Transformation
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-green-50">
              By choosing Sirahats, you're not just buying a basket—you're championing a movement. You become a partner 
              in uplifting rural Ghanaian communities, preserving time-honored weaving arts, and promoting an ethical, 
              sustainable approach to global commerce.
            </p>
            <p className="text-lg leading-relaxed mb-12 text-green-50">
              Explore our collections, learn about our artisans, and see how ethical, beautiful baskets can transform 
              everyday life—one weave at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <button className="bg-white text-green-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-50 transition-colors duration-300">
                  Explore Collections
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
            <p className="mt-12 text-xl font-semibold text-green-50">
              Sirahats | Elevating Tradition • Empowering Communities • Connecting the World
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
