import React from "react";
import { useParams } from "react-router-dom";

const blogImages = [
  "https://lh3.googleusercontent.com/d/1lJtNQSWxJIcvDo8Woz9pygUui0YMHFim=w1200",
  "https://lh3.googleusercontent.com/d/1Gps_5UfVRQTiFPfXUNnqE7YQydgLRj4g=w1200",
  "https://lh3.googleusercontent.com/d/1A7ArmFRBI9zqaVxDyrCdY8p0hv2ZDe6j=w1200"
];

const blogDescriptions = [
  {
    title: "Crafting Culture: Story 1",
    description: "A vibrant display of artisans weaving traditional baskets. The image captures the intricate handwork and focus of the weaver, highlighting the skill and patience required to create each unique piece. This story explores the journey from raw straw to a finished, beautiful basket, celebrating the artistry and heritage of Bolgatanga craftsmanship."
  },
  {
    title: "Crafting Culture: Story 2",
    description: "A close-up of colorful, finished baskets stacked together. The photo showcases the variety of patterns and colors that make each Sirahat product special. This post delves into the creative process, from selecting natural dyes to weaving complex geometric designs, and the pride artisans feel in sharing their culture with the world."
  },
  {
    title: "Crafting Culture: Story 3",
    description: "An artisan smiling while presenting a completed basket at a local market. The image radiates joy and accomplishment, reflecting the positive impact of fair trade on the community. This story highlights the market day experience, the connection between maker and buyer, and how every purchase supports sustainable livelihoods."
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const index = parseInt(id) % blogImages.length;
  const { title, description } = blogDescriptions[index];
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <img src={blogImages[index]} alt={title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-sm leading-relaxed">{description}</p>
    </section>
  );
}
