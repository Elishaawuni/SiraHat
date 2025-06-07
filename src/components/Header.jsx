import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import logo from '../assets/Images/Sirahat_logo_new.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-28">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Sirahat Logo" 
              className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28 xl:h-32 transition-all duration-300"
            />
            {/* <h1 className="text-2xl font-bold text-green-700">Sirahat</h1> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-green-700 border-b-2 border-green-700'
                    : 'text-gray-600 hover:text-green-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-green-700">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-green-700">
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-green-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-medium px-2 py-1 rounded ${
                    isActive(path)
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex space-x-4 pt-2 border-t">
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="w-6 h-6" />
                </Link>
                <Link
                  to="/account"
                  className="text-gray-600 hover:text-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-6 h-6" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}