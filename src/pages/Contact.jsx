import React from "react";
import { Instagram, Music, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <p className="text-lg text-gray-600 mb-12">
            Follow us on social media to stay updated with our latest products, 
            behind-the-scenes content, and artisan stories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/sirahats_ghana?igsh=MWdodGF3MXozaWx0eg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-4 rounded-full">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Instagram</h3>
                <p className="text-gray-600">@sirahats_ghana</p>
                <span className="text-green-700 font-medium group-hover:underline">
                  Follow us on Instagram →
                </span>
              </div>
            </a>

            {/* TikTok Link */}
            <a 
              href="https://www.tiktok.com/@sirahatsgh?_t=ZM-8wtvubfcjry&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-black p-4 rounded-full">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">TikTok</h3>
                <p className="text-gray-600">@sirahatsgh</p>
                <span className="text-green-700 font-medium group-hover:underline">
                  Follow us on TikTok →
                </span>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/c/233508617510"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-green-500 p-4 rounded-full">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">+233 50 861 7510</p>
                <span className="text-green-700 font-medium group-hover:underline">
                  Chat with us →
                </span>
              </div>
            </a>
          </div>

          <p className="mt-12 text-gray-600">
            We regularly share updates about our products, artisan stories, and behind-the-scenes content.
            Follow us to stay connected with the SiraHats community!
          </p>
        </div>
      </div>
    </section>
  );
}
