import React from 'react';

const VideoEmbed = ({ videoId, title, description, color = "var(--primary)" }) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto 40px auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: color,
        border: '4px solid var(--black)',
        borderRadius: '12px',
        boxShadow: '6px 6px 0px var(--black)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0 }}
        ></iframe>
      </div>
      {(title || description) && (
        <div style={{
          backgroundColor: 'var(--white)',
          border: '4px solid var(--black)',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '4px 4px 0px var(--black)'
        }}>
          {title && <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>{title}</h3>}
          {description && <p style={{ margin: 0, color: 'var(--textSecondary)', fontSize: '15px', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{description}</p>}
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;
