import React, { useState, useEffect } from 'react';

const FlatsList = () => {
  const [flatsData, setFlatsData] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then((response) => response.json())
      .then((data) => setFlatsData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flats-section">
      <h1>Amazing Views</h1>
      <div className="flat-container">
        {flatsData.map((item) => (
          <div key={item.id} className="flat">
            <div className="flat-picture">
              <img src={item.imageUrl} alt="Flat" />
            </div>
            <div className="flat-details">
              <h2 className="flat-title">{item.name}</h2>
              <p className="flat-price">$ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }

export default FlatsList;
