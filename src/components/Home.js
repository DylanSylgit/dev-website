import React from 'react';
import Vinyl from './Vinyl';

const Home = () => {
  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Example Vinyl Components */}
      
      {/* Instagram Vinyl */}
      <Vinyl
        externalLink="https://instagram.com/yourusername"
        title="Instagram"
        coverText="📷 Instagram"
        isImage={false}
      />

      {/* Twitter Vinyl */}
      <Vinyl
        externalLink="https://twitter.com/yourusername"
        title="Twitter"
        coverText="🐦 Twitter"
        isImage={false}
      />

      {/* GitHub Vinyl */}
      <Vinyl
        externalLink="https://github.com/yourusername"
        title="GitHub"
        coverText="💻 GitHub"
        isImage={false}
      />

      {/* LinkedIn Vinyl */}
      <Vinyl
        externalLink="https://linkedin.com/in/yourusername"
        title="LinkedIn"
        coverText="💼 LinkedIn"
        isImage={false}
      />
    </div>
  );
};

export default Home;
