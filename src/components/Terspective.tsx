import React from 'react';

import './Terspective.scss';

const Terspective = () => (
  <section className="terspective">
    <h2>That's Why Beginners Choose Us</h2>
    <h4>
      Even the most successful investors were once new.
      Interesting and capacious educational video
      materials will help you quickly learn
      all the secrets of financial markets.
    </h4>
    <div className="terspective__cards">
      <div className="terspective__card">
        <img src="./img/financing.svg" alt="financing" />
        <h3>
          Get your risk-free, no-obligation trial account with $ 100,000 worth simulation funding and experience the benefits of leveraged trading with the world’s known company.
        </h3>
      </div>
      <div className="terspective__card">
        <img src="./img/computing.svg" alt="computing" />
        <h3>
          Experience support from the world’s best traders delivered as daily trading signals right to your mail-box or messenger. If they could, you can earn it too!
        </h3>
      </div>
      <div className="terspective__card">
        <img src="./img/average.svg" alt="terspective" />
        <h3>
          You will have no headaches with the simplest dummy-friendly interface that allows you to quickly navigate through the platform and start earning immediately.
        </h3>
      </div>
    </div>
  </section>
);

export default Terspective;
