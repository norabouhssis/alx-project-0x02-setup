import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { ApiPost } from '@/interfaces';


const Posts = () => {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Posts</h1>
        {loading && <p>Loading...</p>}
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;