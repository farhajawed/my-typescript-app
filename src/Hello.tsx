// src/Hello.tsx
import React from 'react';

interface HelloProps {
  name: string; // Define the shape of the props that the Hello component will accept
  greeting: string; // Add the new prop to the interface
  children?: React.ReactNode; // Add children to the props interface
}

// Define the Hello component as a constant
const Hello: React.FC<HelloProps> = ({ name, greeting, children }) => {
  return (
    <div>
      <h1>{greeting}, {name}!</h1>
      {children}
    </div>
  );
};

export default Hello;
