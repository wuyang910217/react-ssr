import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm this Home component</div>
      <button onClick={() => console.log('hi there!')}>Press me</button>
    </div>
  );
};

export default {
  component: Home
};
