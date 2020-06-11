import React from 'react';

import './Terspective.scss';

const Terspective = () => (
  <section className="terspective">
    <h2>EXPAND YOUR TERSPECTIVE</h2>
    <h3>LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING</h3>
    <div className="terspective__cards">
      <div className="terspective__card">
        <img src="./img/financing.svg" alt="financing" />
        <h3>
          MAKE SMARTER
          <br />
          TRADING DECISION
        </h3>
        <p>
          Lorem ipsum is simply dummy text of
          the printing and typesetting
        </p>
      </div>
      <div className="terspective__card">
        <img src="./img/computing.svg" alt="computing" />
        <h3>
          SPOT TRENDS QUICKLY
          <br />
          {' '}
          ON YOUR CHARTS
        </h3>
        <p>
          Lorem ipsum is simply dummy text of
          the printing and typesetting
        </p>
      </div>
      <div className="terspective__card">
        <img src="./img/average.svg" alt="terspective" />
        <h3>
          INTEGRATES WITH STRATEGIES
          <br />
          YOU ALREADY USE
        </h3>
        <p>
          Lorem ipsum is simply dummy text of
          the printing and typesetting
        </p>
      </div>
    </div>
  </section>
);

export default Terspective;
