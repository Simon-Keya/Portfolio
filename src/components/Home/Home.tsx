import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.scss';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <p className="subtitle">Welcome to my portfolio website!</p>
      <img className="image" src="/path/to/image.jpg" alt="Home" />
    </div>
  );
}

export default Home;
