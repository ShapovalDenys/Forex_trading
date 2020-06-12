import React from 'react';

import './FormWrap.scss';

const FormWrap = () => (
  <section className="form-section">
    <div className="form-section__wrap">
      <div className="form-section__description">
        <h2>GAIN MAXIMAL PROFIT WITH</h2>
        <h3>LOW CAPITAL</h3>
      </div>
      <div className="form-section__form" id="form">
        <h2>GET HELP & SUPPORT</h2>
        <h3>PLEASE FILL OUT THE FORM BELOW</h3>
        <form method="POST" action="#">
          <div className="form-input__initials">
            <input className="form-input__name" type="name" name="name" placeholder="First name" maxLength={20} required/>
            <input className="form-input__lastName" type="lastName" name="lastName" placeholder="Last name" maxLength={20} required/>
          </div>
          <input type="email" name="email" placeholder="Email" className="form-input__email" maxLength={20} required/>
          <input type="phone" name="phone" placeholder="Cell phone number" className="form-input__phone" maxLength={20} required/>
          <textarea name="message" placeholder="WHAT`S YOUR QUESTION, COMMENT OR ISUUE?" className="form-input__textarea" maxLength={80} />
          <button type="submit" className="form-input__button">SEND THIS MESSAGE</button>
        </form>
      </div>
    </div>
  </section>
);

export default FormWrap;
