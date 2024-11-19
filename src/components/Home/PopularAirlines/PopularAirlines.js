import React from "react";
import "./PopularAirlines.css";
import airindia from '../../../image/india.png';
import singapore from '../../../image/singapore.jfif'
import qater from '../../../image/qatar.png'
import delta from '../../../image/delta.png'
import emi from '../../../image/emirates.png'

const airlinesData = [
  {
    name: "Emirates",
    logo: emi,
    description: "Known for luxury and premium services, connecting major cities worldwide.",
    rating: "★★★★★",
  },
  {
    name: "Qatar Airways",
    logo: qater,
    description: "Award-winning airline providing excellent in-flight experiences.",
    rating: "★★★★★",
  },
  {
    name: "Delta Airlines",
    logo: delta,
    description: "Top US airline with a global network and outstanding customer service.",
    rating: "★★★★☆",
  },
  {
    name: "Singapore Airlines",
    logo: singapore,
    description: "One of the best airlines globally with renowned hospitality and service.",
    rating: "★★★★★",
  },
  {
    name: "air india",
    logo: airindia,
    description: "Germany’s largest airline with high-quality service and reliability.",
    rating: "★★★★☆",
  },
];

const PopularAirlines = () => {
  return (
    <div className="popular-airlines">
      <h2>Most Popular Airlines</h2>
      <div className="airlines-container">
        {airlinesData.map((airline, index) => (
          <div key={index} className="airline-card">
            <img src={airline.logo} alt={`${airline.name} Logo`} className="airline-logo" />
            <h3>{airline.name}</h3>
            <p>{airline.description}</p>
            <p className="rating">Rating: {airline.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAirlines;
