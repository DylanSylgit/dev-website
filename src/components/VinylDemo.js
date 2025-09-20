import React from 'react';
import Vinyl from './Vinyl';

const VinylDemo = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Example 1: Instagram Link */}
      <Vinyl
        albumCover="/images/instagram-logo.png" // You'll need to add this image
        externalLink="https://instagram.com/yourusername"
        title="Instagram"
        isImage={true}
      />

      {/* Example 2: Twitter Link */}
      <Vinyl
        albumCover="/images/twitter-logo.png" // You'll need to add this image
        externalLink="https://twitter.com/yourusername"
        title="Twitter"
        isImage={true}
      />

      {/* Example 3: Text-based vinyl */}
      <Vinyl
        externalLink="https://github.com/yourusername"
        title="GitHub"
        coverText="GitHub"
        isImage={false}
      />

      {/* Example 4: LinkedIn */}
      <Vinyl
        externalLink="https://linkedin.com/in/yourusername"
        title="LinkedIn"
        coverText="LinkedIn"
        isImage={false}
      />
    </div>
  );
};

export default VinylDemo;
