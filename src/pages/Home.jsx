import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 max-w-xl">
              <h2 className="text-5xl font-bold leading-tight text-gray-900">
                Celebrate Craftsmanship with{" "}
                <span className="text-green-700">SiraHat</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Discover unique, handwoven straw and leather goods that bring elegance and utility together.
                </p>
                <p className="text-lg">
                  Sirahats is your premier gateway to the finest Bolgatanga market baskets available.
                  Rooted in centuries-old weaving traditions, every Sirahats basket is handwoven by skilled artisans 
                  from northern Ghana, embodying rich cultural heritage, impeccable craftsmanship, and enduring functionality.
                </p>
              </div>
              <div className="pt-4">
          <Link to="/products">
                  <button className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Shop Now
                  </button>
          </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-green-200 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative w-full h-full max-w-lg">
                <img 
                  src="https://lh3.googleusercontent.com/d/1mj4s8ao_GCsFnuJ1weL4nRiWFimNlFxo=w800"
                  alt="SiraHat Product" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <Carousel />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose SiraHat?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Handwoven Quality", description: "Each piece is meticulously crafted by skilled artisans" },
              { title: "Durable Leather Finishing", description: "Premium materials ensure long-lasting beauty" },
              { title: "Eco-friendly & Sustainable", description: "Environmentally conscious production methods" },
              { title: "Unique Designs", description: "One-of-a-kind pieces that tell a story" }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold mb-3 text-green-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Products</h3>
          <div className="text-center">
            <Link 
              to="/products" 
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition-colors duration-300"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">From Our Blog</h3>
          <div className="text-center">
            <Link 
              to="/blog" 
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition-colors duration-300"
            >
              Read Our Stories
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">About SiraHat</h3>
          <div className="text-center">
            <Link 
              to="/about" 
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
