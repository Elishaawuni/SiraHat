import React from "react";
import { Link } from "react-router-dom";

const blogImages = [
  "https://lh3.googleusercontent.com/d/1lJtNQSWxJIcvDo8Woz9pygUui0YMHFim=w1200",
  "https://lh3.googleusercontent.com/d/1Gps_5UfVRQTiFPfXUNnqE7YQydgLRj4g=w1200",
  "https://lh3.googleusercontent.com/d/1A7ArmFRBI9zqaVxDyrCdY8p0hv2ZDe6j=w1200"
];

export default function Blog() {
  return (
    <section className="p-10">
      <h3 className="text-2xl font-semibold mb-6 text-center">Our Blog</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Link to={`/blog/${i}`} key={i}>
            <div className="bg-white rounded shadow p-4 hover:shadow-lg">
              <img src={blogImages[i]} alt={`Blog ${i+1}`} className="w-full h-32 object-cover mb-4" />
              <h4 className="text-sm font-semibold mb-2">Crafting Culture: Story {i + 1}</h4>
              <p className="text-xs text-gray-600">Discover how our artisans bring each piece to life using time-honored techniques.</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
