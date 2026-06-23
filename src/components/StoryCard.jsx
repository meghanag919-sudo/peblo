function StoryCard({ title, story, readStory, loading, videoUrl, showVideo, onVideoReady }) {
  return (
    <div className="story-card">
      <h2 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>{title}</h2>
      <div style={{ fontSize: 20, lineHeight: 1.5, color: '#073b4c', marginBottom: 16 }}>
        {story}
      </div>

      <button className="read-btn" onClick={readStory} disabled={loading}>
        {loading ? 'Reading...' : 'Read Me a Story'}
      </button>

      {loading && <p className="status-msg">Preparing story...</p>}

      {videoUrl && (
        <div className="video-card">
          <video
            className="story-video"
            src={videoUrl}
            controls
            preload="auto"
            playsInline
            crossOrigin="anonymous"
            onCanPlay={() => onVideoReady && onVideoReady()}
          />
        </div>
      )}
    </div>
  )
}

export default StoryCard;