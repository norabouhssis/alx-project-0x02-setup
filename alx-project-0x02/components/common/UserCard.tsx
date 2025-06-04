import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem auto',
    maxWidth: '400px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }}>
    <h2 style={{ marginBottom: '0.5rem' }}>{name}</h2>
    <div style={{ marginBottom: '0.5rem' }}>
      <strong>Email:</strong> {email}
    </div>
    <div>
      <strong>Address:</strong><br />
      {address.street}, {address.suite}<br />
      {address.city}, {address.zipcode}
    </div>
  </div>
);

export default UserCard;