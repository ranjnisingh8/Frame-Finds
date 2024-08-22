import React from 'react';

const Hello = () => {
  // Replace with your actual data
  const artists = [
    { name: 'Taylor Swift', image: 'https://i.pinimg.com/736x/40/2e/af/402eaf597230dd3255f0e99ee4056269.jpg' },
    { name: 'Selena Gomez', image: 'https://i.pinimg.com/564x/db/07/5d/db075d40a29a8e0cefccc45a321f0f0f.jpg' },
    { name: 'Harry ', image: 'https://i.pinimg.com/736x/d8/3a/db/d83adb50e4e19664c6140c8ff337ccc5.jpg' },
  ];

  return (
    <div>
      <h2 className="text-center" style={{ fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '3em', fontWeight: 'bold', textShadow: '1px 1px 2px #aaa' }}>Top Products</h2>
      <br />
      <br />
      <div className="card-body" style={{ display: 'flex', justifyContent: 'space-around' }}>
        {artists.map((artist, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img src={artist.image} className="card-img-top" alt={artist.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{artist.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hello;