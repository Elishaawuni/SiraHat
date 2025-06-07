import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crafting Culture: Story {id}</h2>
      <img src={`/images/blog-${(parseInt(id) % 3) + 1}.png`} alt="Blog" className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-sm leading-relaxed">This is a detailed story of how our artisans meticulously handcraft every item with love and precision.</p>
    </section>
  );
}
