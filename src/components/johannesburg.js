import React from "react";
import hotelExteriorView from "../assets/images/hotel-exterior-view.jpg"; // Assuming this is the correct path to your image

const data = [
  { id: 1, image: hotelExteriorView, title: "Cape Town" },
  { id: 2, image: hotelExteriorView, title: "Another Location" },
  // Add more objects as needed
];

const Johannesburg = () => {
  return (
    <div className="flat-container">
      {data.map((item) => (
        <div key={item.id} className="flat">
          <div className="flat-picture">
            <img src={item.image} alt="Hotel Exterior View" />
          </div>
          <div className="flat-title">
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Johannesburg;
