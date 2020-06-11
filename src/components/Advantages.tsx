import React from 'react';

import './Advantages.scss';

const Advantages = () => (
  <section className="advantages">
    <div className="advantages__card card-1">
      <img src="./img/1.jpg" alt="trading" />
      <div className="advantages__card-description">
        <h4>BEST EXECUTION</h4>
        <p>
          All the Lorem Ipsum generators on the Internet
          tend to repeat predefined chunks as necessary,
          making this the first true generator on the Internet.
          It uses a dictionary of over 200 Latin words,
          combined with a handful of  model sentence structures,
          to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum is there fore always
          free from repetition, injected humour,
          or non-characteristic words etc.
        </p>
      </div>
    </div>
    <div className="advantages__card card-2">
      <img src="./img/2.jpg" alt="trading" />
      <div className="advantages__card-description">
        <h4>QUALITY OF LIQUIDITY</h4>
        <p>
          All the Lorem Ipsum generators on the Internet
          tend to repeat predefined chunks as necessary,
          making this the first true generator on the Internet.
          It uses a dictionary of over 200 Latin words,
          combined with a handful of  model sentence structures,
          to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum is there fore always
          free from repetition, injected humour,
          or non-characteristic words etc.
        </p>
      </div>
    </div>
  </section>
);

export default Advantages;
