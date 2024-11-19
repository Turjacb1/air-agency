import React, { useState } from "react";
import "./DestinationOptions.css";
import chi from '../../../image/chitt.jpg'
import sylhet from '../../../image/sylhet (1).jpg'
import cox from '../../../image/cox.jpg'
import paris from '../../../image/paris (1).jpg'
import london from '../../../image/london.jpg'

const destinations = [
  {
    id: 1,
    category: "International",
    name: "Paris, France",
    description: "Explore the romantic city of Paris with iconic landmarks like the Eiffel Tower.",
    image: paris,
    link: "/paris-details",
  },
  {
    id: 2,
    category: "International",
    name: "Tokyo, Japan",
    description: "Visit the vibrant and modern city of Tokyo, known for its culture and technology.",
    image: london,
    link: "/tokyo-details",
  },
  {
    id: 3,
    category: "Domestic",
    name: "Cox's Bazar",
    description: "Relax at the world's longest sea beach and enjoy breathtaking sunsets.",
    image: cox, // Local image imported above
    link: "/cox-details",
  },
  {
    id: 4,
    category: "Domestic",
    name: "Chittagong",
    description: "Discover the hill tracts and picturesque landscapes of Chittagong.",
    image: chi, // Local image imported above
    link: "/chittagong-details",
  },
  {
    id: 5,
    category: "Domestic",
    name: "Sylhet",
    description: "Enjoy the lush green tea gardens and scenic natural beauty of Sylhet.",
    image: sylhet, // Local image imported above
    link: "/sylhet-details",
  },
];

const DestinationOptions = () => {
  const [selectedCategory, setSelectedCategory] = useState("International");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredDestinations = destinations.filter(
    (dest) => dest.category === selectedCategory
  );

  return (
    <div className="destination-options">
      <h2>Destinations</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button
          onClick={() => handleCategoryChange("International")}
          className={selectedCategory === "International" ? "active" : ""}
        >
          International
        </button>
        <button
          onClick={() => handleCategoryChange("Domestic")}
          className={selectedCategory === "Domestic" ? "active" : ""}
        >
          Domestic
        </button>
      </div>

      {/* Display Destinations */}
      <div className="category">
        <h3>{selectedCategory} Destinations</h3>
        <div className="destinations-list">
          {filteredDestinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <img src={dest.image} alt={dest.name} />
              <div className="destination-details">
                <h4>{dest.name}</h4>
                <p>{dest.description}</p>
                <a href={dest.link} className="details-link">
                  More Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationOptions;
