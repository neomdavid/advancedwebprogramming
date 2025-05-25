import article1 from "./assets/article1.webp";
import article2 from "./assets/article2.jpg";
import article3 from "./assets/article3.jpg";
import article4 from "./assets/article4.jpg";

export const articles = [
  {
    id: 1,
    title: "2025 Fashion Forecast",
    excerpt: "Explore the upcoming fashion trends...",
    image: article1,
    author: "By Fashion Insights Team",
    date: "March 15, 2025",
    content: [
      {
        type: "paragraph",
        text: "The 2025 fashion landscape is shaping up to be a fascinating blend of retro nostalgia and futuristic innovation. Designers are revisiting the bold patterns of the 70s while incorporating cutting-edge sustainable materials.",
      },
      {
        type: "heading",
        text: "Key Trends to Watch",
      },
      {
        type: "list",
        items: [
          "Eco-tech fabrics: Self-cleaning and temperature-regulating materials",
          "Neo-vintage: Reimagined classic silhouettes with modern twists",
          "Digital-physical fusion: Clothing designed for both virtual and real-world wear",
          "Bold botanicals: Oversized floral and leaf patterns in vibrant colors",
          "Modular design: Interchangeable components for customizable looks",
        ],
      },
      {
        type: "paragraph",
        text: "Leading designers predict a shift toward more personalized, adaptable clothing that grows with the wearer's style evolution. The Paris and Milan fashion weeks have already showcased several of these emerging trends.",
      },
      {
        type: "image",
        src: article1,
        alt: "2025 fashion trends collage",
      },
    ],
  },
  {
    id: 2,
    title: "Building a Capsule Wardrobe",
    excerpt: "Learn how to create a versatile wardrobe...",
    image: article2,
    author: "By Wardrobe Consultant",
    date: "February 28, 2025",
    content: [
      {
        type: "paragraph",
        text: "A capsule wardrobe isn't just about having fewer clothes—it's about having the right clothes. This guide will help you build a collection of 30-40 versatile pieces that can be mixed and matched to create hundreds of outfits.",
      },
      {
        type: "heading",
        text: "Essential Components",
      },
      {
        type: "list",
        items: [
          "Foundation pieces: 2-3 quality bottoms in neutral colors",
          "Top layers: Jackets and cardigans that complement your basics",
          "Statement items: A few pieces that express your personal style",
          "Seasonal rotations: 5-7 pieces to swap for weather changes",
          "Accessory anchors: Belts, scarves and jewelry to vary looks",
        ],
      },
      {
        type: "paragraph",
        text: "Remember, the goal is quality over quantity. Each piece should fit perfectly and make you feel confident. Start by auditing your current wardrobe and identifying gaps before making new purchases.",
      },
      {
        type: "image",
        src: article2,
        alt: "Capsule wardrobe examples",
      },
    ],
  },
  {
    id: 3,
    title: "Sustainable Style Guide",
    excerpt: "A guide to shopping consciously...",
    image: article3,
    author: "By Eco Fashion Advocate",
    date: "April 2, 2025",
    content: [
      {
        type: "paragraph",
        text: "Sustainable fashion is no longer a niche—it's a necessity. This comprehensive guide will help you navigate the world of eco-conscious clothing without sacrificing style or breaking the bank.",
      },
      {
        type: "heading",
        text: "Shopping Strategies",
      },
      {
        type: "list",
        items: [
          "Material matters: Look for organic cotton, Tencel, and recycled fabrics",
          "Brand transparency: Support companies with ethical supply chains",
          "Circular fashion: Explore rental and secondhand options",
          "Local makers: Reduce carbon footprint by buying locally produced items",
          "Care longevity: Learn proper garment care to extend clothing life",
        ],
      },
      {
        type: "paragraph",
        text: "The average garment is worn just 7 times before being discarded. By building a sustainable wardrobe, you can reduce textile waste while developing a more meaningful relationship with your clothing.",
      },
      {
        type: "image",
        src: article3,
        alt: "Sustainable fashion materials",
      },
    ],
  },
  {
    id: 4,
    title: "Mastering Layering Techniques",
    excerpt: "From chilly mornings to warm afternoons...",
    image: article4,
    author: "By Style Editor",
    date: "January 18, 2025",
    content: [
      {
        type: "paragraph",
        text: "Layering is both an art and a practical solution for variable weather. Done right, it can add depth to your outfits while keeping you comfortable throughout temperature changes.",
      },
      {
        type: "heading",
        text: "Layering Principles",
      },
      {
        type: "list",
        items: [
          "The 3-layer rule: Base (thin), middle (insulating), outer (protective)",
          "Texture play: Combine different fabrics for visual interest",
          "Proportion balance: Pair fitted with oversized layers",
          "Color coordination: Use a cohesive palette for harmony",
          "Transition tricks: Pieces that work from day to night",
        ],
      },
      {
        type: "paragraph",
        text: "The key to successful layering is starting with lightweight base layers and building up. Remember that each layer should be able to stand on its own as part of an outfit when temperatures rise.",
      },
      {
        type: "image",
        src: article4,
        alt: "Layered outfit examples",
      },
    ],
  },
];
