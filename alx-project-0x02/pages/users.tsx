import React, { useEffect, useState } from 'react';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Users</h1>
        {loading && <p>Loading...</p>}
        {users.map(user => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </>
  );
};

export default Users;