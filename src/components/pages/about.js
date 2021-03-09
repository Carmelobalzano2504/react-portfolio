import React from "react";
import profilePicture from "../../../static/assets/images/bio/Headshot.jpg"

export default function() {
    return (
    <div className="content-page-wrapper">
        <div 
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        />
        <div className="right-column">
        My name is Carmelo Balzano and I am an aspiring Software Developer.  I have recently completed a 
        Coding Bootcamp and have learned many valuable skills.  I have an extensive background in the 
        Service Industry, from which I have flourished as a leader in the workplace.  Looking to get my 
        foot in the door as a Software Engineer and continue to self-train in my time off.  I have worked 
        with React, Python, MySQL, Javascript, CSS/SCSS, HTML, and other miscellaneous frameworks. 
        Looking Forward to continuing this Journey and becoming a great Developer.
        </div>
    </div>
    );
}