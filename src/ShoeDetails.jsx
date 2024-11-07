// ShoeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ShoeDetails = () => {
  const { id } = useParams(); // Get the shoe ID from the URL
  
  return (
    <div>
      <h1>Shoe Details for Shoe {id}</h1>
      <p>Here you can show detailed information for shoe {id}.</p>
    </div>
  );
};

export default ShoeDetails;
