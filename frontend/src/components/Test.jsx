import React from 'react';

const TopArtists = () => {
  // Replace with your actual data
  const artists = [
    { name: 'Kanye West', image: 'https://i.pinimg.com/564x/3a/47/93/3a479347a7ef22efeaa9d67a2c6aebc5.jpg' },
    { name: 'Travis Scott', image: 'https://i.pinimg.com/564x/44/2e/cf/442ecf6d4f93ae415cf0e68cb6b88bda.jpg' },
    { name: 'Shawn Mendes', image: 'https://i.pinimg.com/564x/6b/0f/90/6b0f90434be62ec79ad084d106d14222.jpg' },
  ];

  return (
    <div>
      <h2 className="text-center" style={{ fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '3em', fontWeight: 'bold', textShadow: '1px 1px 2px #aaa' }}>Top Artists</h2>
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

export default TopArtists;