import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1 className ="homeLandingMsg">Welcome</h1>
        <p className ="homeLandingMsg">
           Passenger Management System
        </p>
      </div>
    );
  }
});

export default Home;
