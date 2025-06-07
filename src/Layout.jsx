// Layout.jsx
import React from 'react';
import Header from './components/Header';
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <footer className="p-6 bg-gray-900 text-white text-sm text-center">&copy; {new Date().getFullYear()} SiraHat. All rights reserved.</footer>
    </div>
  );
}
