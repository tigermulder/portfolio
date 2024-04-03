import React from 'react';
import './topButton.css';

const TopButton = () => {

  window.addEventListener('scroll',function () {
    const scrollUp = document.querySelector('.topbutton')
    if(this.scrollY >= 560) scrollUp.classList.add('show-topbutton');
    else scrollUp.classList.remove('show-topbutton');
  })
  const topScroll = () => {
    window.scrollTo(0, 0);
  }
  return (
    <button className="topbutton" onClick={topScroll}>
      <i className="uil uil-arrow-up topbutton_icon"></i>
    </button>
  );
};

export default TopButton;
