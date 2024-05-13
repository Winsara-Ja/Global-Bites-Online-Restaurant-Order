import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Delivery Management System</h1>
      <div>
        <h2>Are you an Admin or User?</h2>
        <Link to="/deliveries">
          <button>Admin</button>
        </Link>
        <Link to="/add-delivery">
          <button>User</button>
        </Link>
      </div>
    </div>
  );
}
