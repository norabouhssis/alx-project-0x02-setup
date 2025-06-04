import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem auto',
    maxWidth: '400px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }}>
    <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
    <div>{content}</div>
  </div>
);

export default Card;
