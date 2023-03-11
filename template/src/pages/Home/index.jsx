import React from 'react'
import "./home.module.scss"
import TopBar from './TopBar'

function Home() {
  return (
    <div style={{backgroundColor: 'beige'}}>
      <TopBar />
      <h1>Welcome to my website!</h1>
      <p>This is the home page.</p>
      <p>Explore src folder to know more</p>
      <p>get details about folder structure in readme.md</p>
    </div>
  );
}

export default Home;
