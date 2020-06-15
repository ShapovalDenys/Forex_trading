import React from 'react';

import './Reviews.scss';

import Carousel from './Carousel';

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>What our clients think about us</h2>
      <h4>More than 50,000 investors around the world trust us</h4>
      <Carousel />
      <h3>Discover new earning opportunities!</h3>
    </section>
  );
};

export default Reviews;
