import React from "react";
import { useParams } from "react-router-dom";

const blogImages = [
  "https://lh3.googleusercontent.com/d/1lJtNQSWxJIcvDo8Woz9pygUui0YMHFim=w1200",
  "https://lh3.googleusercontent.com/d/1Gps_5UfVRQTiFPfXUNnqE7YQydgLRj4g=w1200",
  "https://lh3.googleusercontent.com/d/1A7ArmFRBI9zqaVxDyrCdY8p0hv2ZDe6j=w1200"
];

export default function BlogPost() {
  const { id } = useParams();
  const imageIndex = parseInt(id) % blogImages.length;
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crafting Culture: Story {parseInt(id) + 1}</h2>
      <img src={blogImages[imageIndex]} alt={`Blog ${parseInt(id) + 1}`} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-sm leading-relaxed">This is a detailed story of how our artisans meticulously handcraft every item with love and precision.</p>
    </section>
  );
}
