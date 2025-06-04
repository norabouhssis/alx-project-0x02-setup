import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1rem', textAlign: 'center' }}>
      <nav>
        <Link href="/home" style={{ margin: '0 1rem' }}>Home</Link>
        <Link href="/about" style={{ margin: '0 1rem' }}>About</Link>
        <Link href="/posts" style={{ margin: '0 1rem' }}>Posts</Link>
        <Link href="/users" style={{ margin: '0 1rem' }}>Users</Link>
      </nav>
    </header>
  );
};

export default Header;