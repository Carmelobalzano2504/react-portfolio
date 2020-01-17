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
                          555-555-5555
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                          <FontAwesomeIcon icon="at" />
                        </div>

                        <div className="text">
                          myEmail@gmail.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                          <FontAwesomeIcon icon="map-pin" />
                        </div>

                        <div className="text">
                          My address 12345, Florida
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}