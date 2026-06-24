import React, { useEffect, useRef } from 'react';
import Button from './Button';

function StoryCard({ title, story, readStory, loading, videoUrl, imageUrl, showVideo, onVideoReady, emoji, color, accent }) {
  const style = { 
    '--card-color': color || 'transparent', 
    '--accent': accent || 'transparent' 
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoUrl]);
  
  return (
    <div className="story-card card" style={style} data-emoji={emoji}>
      <div className="story-card-header">
        <div className="story-emoji-badge" style={{ backgroundColor: color }}>
          {emoji}
        </div>
        <h2 className="story-title">{title}</h2>
      </div>

      {imageUrl && (
        <div className="story-thumbnail">
          <img src={imageUrl} alt={title} />
        </div>
      )}

      <div className="story-body">{story}</div>

      <div className="story-actions">
        <Button 
          variant="primary" 
          className="read-btn" 
          onClick={readStory} 
          disabled={loading}
        >
          {loading ? '📖 Reading...' : '✨ Play Quiz'}
        </Button>
        {loading && <p className="status-msg">Preparing story voice...</p>}
      </div>

      {videoUrl && (
        <div className="video-card-container">
          <div className="video-header">
            <span className="video-icon">🎬</span>
            <span>Watch {title}'s Adventure Video</span>
          </div>
          <div className="video-card">
            <video
              ref={videoRef}
              key={title}
              className="story-video"
              src={videoUrl}
              controls
              preload="auto"
              playsInline
              crossOrigin="anonymous"
              onCanPlay={() => onVideoReady && onVideoReady()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryCard;