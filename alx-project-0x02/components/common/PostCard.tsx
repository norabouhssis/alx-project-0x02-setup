import React from 'react';
import { PostCardProps } from '@/interfaces';

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem auto',
    maxWidth: '400px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }}>
    <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
    <div style={{ marginBottom: '0.5rem' }}>{content}</div>
    <div style={{ fontSize: '0.9rem', color: '#888' }}>User ID: {userId}</div>
  </div>
);

export default PostCard;