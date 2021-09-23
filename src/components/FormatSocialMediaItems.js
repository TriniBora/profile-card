import React from 'react';

export default function FormatSocialMediaItems({ item}) {
    function handleClick(event) {
      event.preventDefault();
      window.open(item.url);
    }

    return (
      <li className="social-media-item">
        <button
          onClick={handleClick}>
          <i className={item.icon}></i>
        </button>
      </li>
    );
  }