import React, { useState } from 'react';
import ReactResizeDetector from 'react-resize-detector';

import './Carousel.scss';

const Carousel = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const moveToPrev = () => {
    if (itemIndex === 0) {
      setItemIndex(4);
    } else {
      setItemIndex(itemIndex - 1);
    }
  };

  const moveToNext = () => {
    if (itemIndex === 4) {
      setItemIndex(0);
    } else {
      setItemIndex(itemIndex + 1);
    }
  };

  const onResize = (width: number) => {
    if (width >= 1200) {
      setItemWidth(1000);
    } else if (width >= 760) {
      setItemWidth(600);
    } else if (width < 760) {
      setItemWidth(300);
    }
  };

  return (
    <>
      <ReactResizeDetector handleWidth onResize={onResize} />
      <div className="carousel__buttons">
        <button type="button" className="carousel__button carousel__button-prev" onClick={moveToPrev}>
          <img src="./img/ArrowRightActive.svg" alt="arrow" />
        </button>
        <button type="button" className="carousel__button carousel__button-next" onClick={moveToNext}>
          <img src="./img/ArrowRightActive.svg" alt="arrow" />
        </button>
      </div>
      <div className="carousel">
        <div className="carousel__block">
          <ul
            className="carousel__list"
            style={{
              transform: `translateX(-${itemIndex * itemWidth}px)`,
            }}
          >

            <li className="reviews__card">
              <img src="./img/rev1.jpg" alt="testimonials client" />
              <p>“Everything is simple and clear. I didn’t have to master the platform for a long time to earn the first money!”</p>
              <h5>Brian Stone</h5>
            </li>

            <li className="reviews__card">
              <img src="./img/rev2.jpeg" alt="testimonials client" />
              <p>“I learned a lot about financial markets by working with this company. Now I can invest and make money on it.”</p>
              <h5>Clark Welsh</h5>
            </li>

            <li className="reviews__card">
              <img src="./img/rev3.png" alt="testimonials client" />
              <p>“Good customer support. I was pleasantly surprised by their speed of response since on another platform I had to wait for hours.”</p>
              <h5>Amanda Cooper</h5>
            </li>

            <li className="reviews__card">
              <img src="./img/rev4.jpg" alt="testimonials client" />
              <p>“I like to communicate with other investors and share experiences. It is always interesting to know what colleagues think.”</p>
              <h5>Andrew Lijis</h5>
            </li>

            <li className="reviews__card">
              <img src="./img/rev5.png" alt="testimonials client" />
              <p>“I don’t know whether it depends on the platform or on my knowledge, but when I came here, I got much more profitable deals!”</p>
              <h5>Samantha Gilbert</h5>
            </li>

          </ul>
        </div>
      </div>

    </>
  );
};

export default Carousel;
