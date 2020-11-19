import React from "react";

import { ReactComponent as Anime } from "../svgs/eyes.svg";

const Quote = () => {
  return (
    <div className="quote-anime-container">
      <Anime className="anime" />
      <div className="quote-container">
        <span className="quote">
          “look through the eyes of Dhamma, enlightment itself will come to you”
        </span>
      </div>
      <span className="quote-teller">-Lord Buddha</span>
      <div className="gallery-button-container">
        <a href="/">
          <button type="submit" className="gallery-button">
            View the Gallery
          </button>
        </a>
      </div>
    </div>
  );
};

export default Quote;