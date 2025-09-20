import React, { useState } from 'react';

const Vinyl = ({ 
  albumCover, 
  externalLink, 
  title, 
  isImage = false,
  coverText 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="vinyl-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        position: 'relative',
        width: '250px',
        height: '250px',
        cursor: externalLink ? 'pointer' : 'default',
        margin: '20px',
      }}
    >
      {/* Album Cover */}
      <div 
        className="album-cover"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '250px',
          height: '250px',
          overflow: 'hidden',
          backgroundColor: '#2a2a2a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
      >
        {isImage ? (
          <img 
            src={albumCover}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div 
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '20px',
            }}
          >
            {coverText || title}
          </div>
        )}
      </div>

      {/* Vinyl Record */}
      <div 
        className="vinyl-record"
        style={{
          position: 'absolute',
          top: '25px',
          left: '25px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: '#1a1a1a',
          zIndex: 1,
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'translateX(125px)' : 'translateX(0)',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, 
              #333 0%, 
              #1a1a1a 15%, 
              #333 16%, 
              #1a1a1a 18%, 
              #333 19%, 
              #1a1a1a 21%, 
              #333 22%, 
              #1a1a1a 24%, 
              #333 25%, 
              #1a1a1a 27%, 
              #333 28%, 
              #1a1a1a 30%, 
              #333 31%, 
              #1a1a1a 33%, 
              #333 34%, 
              #1a1a1a 36%, 
              #333 37%, 
              #1a1a1a 39%, 
              #333 40%, 
              #1a1a1a 42%, 
              #333 43%, 
              #1a1a1a 45%, 
              #333 46%, 
              #1a1a1a 48%, 
              #333 49%, 
              #1a1a1a 51%, 
              #333 52%, 
              #1a1a1a 54%, 
              #333 55%, 
              #1a1a1a 57%, 
              #333 58%, 
              #1a1a1a 60%, 
              #333 61%, 
              #1a1a1a 63%, 
              #333 64%, 
              #1a1a1a 66%, 
              #333 67%, 
              #1a1a1a 69%, 
              #333 70%, 
              #1a1a1a 72%, 
              #333 73%, 
              #1a1a1a 75%, 
              #333 76%, 
              #1a1a1a 78%, 
              #333 79%, 
              #1a1a1a 81%, 
              #333 82%, 
              #1a1a1a 84%, 
              #333 85%, 
              #1a1a1a 87%, 
              #333 88%, 
              #1a1a1a 90%, 
              #333 91%, 
              #1a1a1a 93%, 
              #333 94%, 
              #1a1a1a 96%, 
              #333 97%, 
              #1a1a1a 99%, 
              #333 100%
            )
          `,
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.3)',
          border: '2px solid #333',
        }}
      >
        {/* Center Hole */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#000',
            transform: 'translate(-50%, -50%)',
            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.8)',
          }}
        />
        
        {/* Vinyl Label */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#4a4a4a',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '10px',
            fontWeight: 'bold',
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Vinyl;
