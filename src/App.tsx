import React from 'react';
import './App.css';

import Header from './components/Header';
import FormWrap from './components/FormWrap';
import Terspective from './components/Terspective';
import Advantages from './components/Advantages';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <FormWrap />
    <Terspective />
    <Advantages />
    <WhyChooseUs />
    <Reviews />
    <Footer />
  </div>
);

export default App;
