import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { ApiPost } from '@/interfaces';

interface PostsProps {
  posts: ApiPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => (
  <>
    <Header />
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Posts</h1>
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

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
