import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const handleAddPost = (data: PostProps) => {
    setPosts(prev => [...prev, data]);
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={() => setModalOpen(true)} style={{ marginBottom: '1rem' }}>
          Add New Post
        </button>
        <Card
          title="Welcome!"
          content="This is the home page of your Next.js project."
        />
        <Card
          title="About This Project"
          content="This project demonstrates how to use reusable components in Next.js.<br />"
        />
        <Card
          title="Get Started"
          content="This project demonstrates how to use reusable components in Next.js.<br />"
        />
        {posts.map((post, idx) => (
          <Card
            key={idx}
            title={post.title}
            content={post.content}
          />
        ))}
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
};

export default Home;