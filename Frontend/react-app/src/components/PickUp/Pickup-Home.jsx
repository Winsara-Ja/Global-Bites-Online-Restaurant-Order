import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Pickup Management System</h1>
      <div>
        <h2>Are you an Admin or User?</h2>
        <Link to="/pickups">
          <button>Admin</button>
        </Link>
        <Link to="/add">
          <button>User</button>
        </Link>
      </div>
    </div>
  );
}
