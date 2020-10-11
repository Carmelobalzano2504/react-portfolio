import React from 'react';
import contactPicture from "../../../static/assets/images/contactImage/BincImage2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
                style={{
                    background: "url(" + contactPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                          <FontAwesomeIcon icon="mobile-alt" />
                        </div>

                        <div className="text">
                          1-985-710-6349
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                          <FontAwesomeIcon icon="at" />
                        </div>

                        <div className="text">
                          balzanoitaliano@gmail.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                          <FontAwesomeIcon icon="map-pin" />
                        </div>

                        <div className="text">
                          Saint Petersburg, Florida
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}