import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About = () => {
  return (
    <>
    <Header />
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to the About Page!</h1>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Button
          label="Small Rounded"
          size="small"
          shape="rounded-sm"
          onClick={() => alert('Small Rounded Button')}
        />
        <Button
          label="Medium Pill"
          size="medium"
          shape="rounded-full"
          onClick={() => alert('Medium Pill Button')}
        />
        <Button
          label="Large Rounded"
          size="large"
          shape="rounded-md"
          onClick={() => alert('Large Rounded Button')}
        />
      </div>
    </div>
    </>
  );
};

export default About;