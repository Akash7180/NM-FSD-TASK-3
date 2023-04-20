import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import React from 'react';

import react1 from "../assets/claudio-schwarz-i25aqE_YUZs-unsplash.jpg"
import react2 from "../assets/react-js-image.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>
               Im a aspiring engineer. I am exploring the technological world  
            </p>
            <Link to="/contact" >
                <button className="btn">contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack bottom">
                    <img src={react1}
                    className="img" alt="true" />
                </div>
                <div className="img-stack top">
                    <img src={react2}
                    className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;