import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Heart, ShoppingCart, Eye, X } from "lucide-react";

// Product data with Google Drive images
export const products = [
  {
    id: 1,
    name: "Classic Straw Basket",
    price: "$45.00",
    image: "https://drive.google.com/thumbnail?id=1FGwLGgnudvlbmCBAK8Y0ZwjIuYaj86ct&sz=w800",
    category: "Baskets",
    description: "Handwoven straw basket, perfect for beach days and picnics"
  },
  {
    id: 2,
    name: "Hand Woven Straw Hat",
    price: "$65.00",
    image: "https://drive.google.com/thumbnail?id=1zOiHgredrP4gEcjm3qYpT7Gj1Ybhnt6e&sz=w800",
    category: "Hats",
    description: "Elegant eco friendly straw hat. Multi-purpose hat for all occasions"
  },
  {
    id: 3,
    name: "Round Beach Basket",
    price: "$55.00",
    image: "https://drive.google.com/thumbnail?id=1RDoYL6w5upW0bKr1fceTPgdqeuUvruNu&sz=w800",
    category: "Baskets",
    description: "Perfect companion for your beach adventures"
  },
  {
    id: 4,
    name: "Premium Leather Bag",
    price: "$120.00",
    image: "https://drive.google.com/thumbnail?id=1Pjkyee6D-mtSR6y6qRYG05YkucPZGsB_&sz=w800",
    category: "Bags",
    description: "Handcrafted leather bag with premium finish"
  },
  {
    id: 5,
    name: "Designer Hand Bag",
    price: "$150.00",
    image: "https://drive.google.com/thumbnail?id=1LXAjx3OD4Br4XtiNmWSP-k8hQAF0DHuF&sz=w800",
    category: "Bags",
    description: "Elegant leather handbag for any occasion"
  },
  {
    id: 6,
    name: "Eco Straw Basket",
    price: "$35.00",
    image: "https://drive.google.com/thumbnail?id=1EXHeWvZv-6Ln1jVjak3uQsTYyIplNmWv&sz=w800",
    category: "Baskets",
    description: "Sustainable straw basket for everyday use"
  },
  {
    id: 7,
    name: "Stylish Jute Tote",
    price: "$40.00",
    image: "https://drive.google.com/thumbnail?id=1nrJlHv4sxzCpcrzpXj1E0wv8bH5XlF81&sz=w800",
    category: "Bags",
    description: "Versatile jute tote bag with modern design"
  },
  {
    id: 8,
    name: "Elegant Purse",
    price: "$85.00",
    image: "https://drive.google.com/thumbnail?id=1zqg6VrmBWBMCCy6NEVJxBYIJ6E2FO_Z3&sz=w800",
    category: "Accessories",
    description: "Sophisticated white purse for special occasions"
  },
  {
    id: 9,
    name: "Multi-coloured Basket",
    price: "$95.00",
    image: "https://drive.google.com/thumbnail?id=1B0JkNdstnbwDPMbYqxI6lS-b2sDy5dvg&sz=w800",
    category: "Baskets",
    description: "Luxurious Multi-coloured Basketwith premium details"
  },
  {
    id: 10,
    name: "Storage Basket Set",
    price: "$75.00",
    image: "https://drive.google.com/thumbnail?id=1_GrICZrcQ5YFxd3bXlrRYlZz5recsnla&sz=w800",
    category: "Baskets",
    description: "Set of matching storage baskets for home organization"
  },
  {
    id: 11,
    name: "Premium Laundry Basket",
    price: "$85.00",
    image: "https://drive.google.com/thumbnail?id=1A7ArmFRBI9zqaVxDyrCdY8p0hv2ZDe6j&sz=w800",
    category: "Baskets",
    description: "Large, sturdy laundry basket with comfortable handles"
  },
  {
    id: 12,
    name: "Designer Tablet Bag",
    price: "$110.00",
    image: "https://drive.google.com/thumbnail?id=1LToea525_rF3428RtJRlc67GVfXA06tM&sz=w800",
    category: "Bags",
    description: "Stylish and protective bag for your tablet or laptop"
  },
  {
    id: 13,
    name: "Vea Vintage Basket",
    price: "$95.00",
    image: "https://drive.google.com/thumbnail?id=1XrYJ7qBnGXgczBri1GeX7SyjWTnlKkhH&sz=w800",
    category: "Baskets",
    description: "Sleek and Vintage Basket for your home and mini shopping activities"
  },
  {
    id: 14,
    name: "Luxury Leather Bag",
    price: "$180.00",
    image: "https://drive.google.com/thumbnail?id=1lCmL7tjBZEu8o2FyIz51tzoZpGVkw_ke&sz=w800",
    category: "Bags",
    description: "Premium leather bag with exquisite craftsmanship"
  },
  {
    id: 15,
    name: "Classic Leather Tote",
    price: "$160.00",
    image: "https://drive.google.com/thumbnail?id=1ldGgQX5NEEstLXJmFdwxM5C0BCVtNNDN&sz=w800",
    category: "Bags",
    description: "Timeless leather tote bag for everyday elegance"
  },
  {
    id: 16,
    name: "Premium Gift Basket",
    price: "$90.00",
    image: "https://drive.google.com/thumbnail?id=17XjtHX3q4IWLgofmtd3B1VD_OanC8br9&sz=w800",
    category: "Baskets",
    description: "Beautiful gift basket perfect for special occasions"
  },
  {
    id: 17,
    name: "Artisan Storage Basket",
    price: "$70.00",
    image: "https://drive.google.com/thumbnail?id=1dP25IALcmKmerHv07XQHkuM5PFIGFHCd&sz=w800",
    category: "Baskets",
    description: "Handcrafted storage basket with traditional patterns"
  },
  {
    id: 18,
    name: "Basket Gift Set",
    price: "$120.00",
    image: "https://drive.google.com/thumbnail?id=1Ox9_1_MuE53TfgaW2hsWVeNKjJTCIglc&sz=w800",
    category: "Baskets",
    description: "Set of three matching baskets for home organization"
  }
];

// QuickView Modal Component
function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in purchasing the ${product.name} (${product.price}).`;
    const whatsappUrl = `https://wa.me/c/233508617510?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-green-700 text-xl font-semibold mb-4">{product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Category</h3>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Handcrafted with premium materials</li>
                    <li>Durable and long-lasting</li>
                    <li>Eco-friendly production</li>
                    <li>Unique design elements</li>
                  </ul>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Buy on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleQuickView = () => {
    setShowQuickView(true);
    if (onQuickView) onQuickView(product);
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in purchasing the ${product.name} (${product.price}).`;
    const whatsappUrl = `https://wa.me/c/233508617510?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Card 
        className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            
            {/* Quick Actions Overlay */}
            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <button 
                onClick={handleQuickView}
                className="p-2 bg-white rounded-full hover:bg-green-50 transition-colors"
                aria-label="Quick view"
              >
                <Eye className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="p-2 bg-white rounded-full hover:bg-green-50 transition-colors"
                aria-label="Buy on WhatsApp"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition-colors ${
                  isFavorite ? 'bg-red-500' : 'bg-white hover:bg-green-50'
                }`}
                aria-label="Add to favorites"
              >
                <Heart 
                  className={`w-5 h-5 ${
                    isFavorite ? 'text-white' : 'text-gray-700'
                  }`} 
                  fill={isFavorite ? 'white' : 'none'}
                />
              </button>
            </div>

            {/* Category Tag */}
            <div className="absolute top-2 left-2">
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-green-700 font-semibold">{product.price}</span>
              <button 
                onClick={handleWhatsAppClick}
                className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
              >
                <ShoppingCart className="w-4 h-4" />
                Buy Now
              </button>
            </div>
          </div>
      </CardContent>
    </Card>

      {/* QuickView Modal */}
      {showQuickView && (
        <QuickViewModal
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  );
}
