function Buddy() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 72,
        height: 72,
        borderRadius: 36,
        background: 'linear-gradient(135deg,#FFD54F,#FF8A65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 36,
        boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
      }}>🤖</div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700 }}>AI Story Buddy</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>Tap to listen & play</div>
      </div>
    </div>
  );
}

export default Buddy;