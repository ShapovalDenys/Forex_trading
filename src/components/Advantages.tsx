import React from 'react';

import './Advantages.scss';

const Advantages = () => (
  <section className="advantages">
    <h2>Instant Investment Anytime, Anywhere</h2>
    <h4>
      Investing has never been so easy.
      This is all that you will ever need
      from an investment platform - on the device you choose.
    </h4>
    <div className="advantages__card card-1">
      <img src="./img/1.jpg" alt="trading" />
      <div className="advantages__card-description">
        <h4>The opportunity to earn from anywhere</h4>
        <p>
          Work as a trader combines great independence and freedom. The profession of a trader does not require him to work anywhere in the office. A true professional does not depend on a specific place; he can work calmly from any corner of the world where there is access to the Internet. Imagine a workday on the ocean! Working hours, a trader can also choose and trade not the entire trading session, but any of its periods.
        </p>
      </div>
    </div>
    <div className="advantages__card card-2">
      <img src="./img/2.jpg" alt="trading" />
      <div className="advantages__card-description">
        <h4>The Prestige and Authority of being a trader</h4>
        <p>
          The advantage of working as a trader is also the lack of a boss - no one is above the soul, does not control, and does not require anything. The entire workflow, trading plan, and decisions are made and organized by the trader independently. The owner of this wonderful profession needs to be a purposeful, stress-resistant, responsible, organized, and independent person. All these qualities will make it possible to receive the desired income from trading and become the best among the best traders.
        </p>
      </div>
    </div>
  </section>
);

export default Advantages;
