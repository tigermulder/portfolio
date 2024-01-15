import React from 'react';
import './topButton.css';

const TopButton = () => {
  window.addEventListener('scroll',function () {
    const scrollUp = document.querySelector('.topbutton')
    if(this.scrollY >= 560) scrollUp.classList.add('show-topbutton');
    else scrollUp.classList.remove('show-topbutton');
  })
  return (
    <a href="#" className="topbutton">
      <i className="uil uil-arrow-up topbutton_icon"></i>
    </a>
  );
};

export default TopButton;
