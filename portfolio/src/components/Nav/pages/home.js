import React from "react";
import resume from "../../../assets/resume/me.jpg"
const Home = () => (
  <div>
    <h1 className='home'>This is Me!</h1>
    <img className= 'home-image' src={resume}  />
  </div>
);

export default Home;