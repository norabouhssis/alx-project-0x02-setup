import React, { useState } from 'react';
import { PostModalProps } from '@/interfaces';

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        minWidth: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }}>
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>
              Content:
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
                rows={4}
                required
              />
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" onClick={onClose} style={{ marginRight: '1rem' }}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;