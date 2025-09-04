import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageWithDescription from "./imageWithDescription.jsx";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

let array = [
  {
    title: "Cozy Istanbul Cafe with Outdoor Seating",
    description:
      "A beautiful cafe with outdoor seating perfect for relaxation.",
    detailedDescription:
      "This charming Istanbul cafe offers the perfect blend of traditional Turkish hospitality and modern comfort. The outdoor seating area provides an intimate atmosphere where guests can enjoy freshly brewed Turkish coffee while watching the bustling city life pass by. With its warm lighting and comfortable furnishings, this cafe serves as an ideal retreat for both locals and tourists seeking an authentic cultural experience.",
    imgUrl:
      "https://images.pexels.com/photos/33491755/pexels-photo-33491755.jpeg",
  },
  {
    title: "Coastal Pathway with Ocean View at Sunset",
    description: "Stunning coastal views with breathtaking sunset scenery.",
    detailedDescription:
      "This scenic coastal pathway offers one of the most spectacular sunset viewing experiences along the shoreline. The wooden walkway extends gracefully over the crystal-clear waters, providing visitors with unobstructed panoramic views of the horizon. As the golden hour approaches, the sky transforms into a canvas of vibrant oranges and pinks, creating the perfect backdrop for evening strolls and romantic moments.",
    imgUrl:
      "https://images.pexels.com/photos/33609752/pexels-photo-33609752.jpeg",
  },
  {
    title: "Elegant Display of Tarot Cards and Healing Crystals",
    description: "Mystical collection of tarot cards and healing crystals.",
    detailedDescription:
      "This carefully curated collection showcases the ancient art of divination through beautifully illustrated tarot cards paired with powerful healing crystals. Each crystal has been selected for its unique metaphysical properties, from amethyst for spiritual clarity to rose quartz for emotional healing. The artistic arrangement creates a sacred space that invites contemplation and connects practitioners with centuries-old wisdom traditions.",
    imgUrl:
      "https://images.pexels.com/photos/33609814/pexels-photo-33609814.jpeg",
  },
  {
    title: "Birds Eye View of Waterfalls",
    description: "Spectacular aerial view of cascading waterfalls.",
    detailedDescription:
      "This breathtaking aerial perspective captures the raw power and natural beauty of cascading waterfalls from high above. The rushing water creates mesmerizing patterns as it flows over ancient rock formations, carving its path through the landscape over thousands of years. Surrounded by lush vegetation and pristine wilderness, these falls represent one of nature's most magnificent displays of force and serenity combined.",
    imgUrl:
      "https://images.pexels.com/photos/16160483/pexels-photo-16160483.jpeg",
  },
  {
    title: "Delicious & Creative Food",
    description: "Artistic and delicious culinary creations.",
    detailedDescription:
      "This exquisite culinary presentation demonstrates the perfect marriage of artistic plating and exceptional flavor profiles. Each element on the plate has been carefully crafted and positioned to create a visual masterpiece that tantalizes the senses before the first bite. The chef's innovative approach combines traditional cooking techniques with modern presentation styles, resulting in a dining experience that satisfies both the palate and the eye.",
    imgUrl:
      "https://images.pexels.com/photos/27670199/pexels-photo-27670199.jpeg",
  },
];



return (
  <>
    <div>
      {/* Logos */}
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>

    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>

    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      {array.map((item, index) => (
        <ImageWithDescription
          key={index}
          title={item.title}
          description={item.description}
          detailedDescription={item.detailedDescription}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  </>
);
}

export default App;
