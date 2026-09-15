export default function AttendanceVisual() {
  return (
    <div className="mini-visual clock-visual" aria-hidden="true">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border)" strokeWidth="2" />
        <circle cx="60" cy="60" r="52" fill="none" stroke="var(--accent)" strokeWidth="2" className="clock-face-ring" />
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="60"
            y1="12"
            x2="60"
            y2="20"
            stroke="var(--text)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.35"
            transform={`rotate(${deg} 60 60)`}
          />
        ))}
        <line x1="60" y1="60" x2="60" y2="26" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="60" y1="60" x2="60" y2="26" className="clock-minute-hand" strokeWidth="3" strokeLinecap="round" />
        <circle cx="60" cy="60" r="4" fill="var(--accent)" />
      </svg>
      <div className="clock-visual-label">
        <span className="clock-visual-raw">9:07</span>
        <span className="clock-visual-arrow">→</span>
        <span className="clock-visual-rounded">9:15</span>
      </div>
    </div>
  );
}
