import React from 'react';

import './WhyChooseUs.scss';

const WhyChooseUs = () => (
  <section className="why-choose-us">
    <h3>WHY CHOOSE US?</h3>
    <h4>Investing is not always easy. We try to make your task easier by simplifying work tools and fully preserving their functionality.</h4>
    <div className="why-choose-us__cards">
      <div className="why-choose-us__card">
        <div className="why-choose-us__card-num">1</div>
        <p>
          Get all the important news right on the platform and make smart investments.
        </p>
      </div>
      <div className="why-choose-us__card">
        <div className="why-choose-us__card-num">2</div>
        <p>
          Use a large selection of technical analysis indicators.
        </p>
      </div>
      <div className="why-choose-us__card">
        <div className="why-choose-us__card-num">3</div>
        <p>
          Quick withdrawal of funds, a large selection of payment systems.
        </p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
