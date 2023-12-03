import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import ContactPhoto from '../imgs/ContactPhoto.jpg'

const Contact = () => {
    const [copyClick, setCopyClick] = useState(false);

    useEffect(() => {
        document.title = 'Bug Karplus - Contact';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <hr />

            <div className="page-title">
                <h3>Contact Info</h3>
            </div>

            <main>
                <div className="img-preview">
                    <img src={ContactPhoto} className="feature" alt="Contact"></img>
                </div>

                <div className="contact-info">
                    <div className="contact-info-section">
                        <p>
                            Please feel free to contact me with questions
                            or would like to work together on a project!
                        </p>
                    </div>

                    <div className="contact-info-section">
                        <p className="contact-label">Instagram</p>
                        <p>Personal - <a href='https://www.instagram.com/buggie.ray.official/'>@buggie.ray.official</a></p>
                        <p>Art - <a href='https://www.instagram.com/mush_room_bug/'>@mush_room_bug</a></p>
                    </div>

                    <div className="contact-info-section">
                        <p className="contact-label">YouTube</p>
                        <p>ASMR - <a href="https://www.youtube.com/@asmRAY1">@asmRAY</a></p>
                    </div>

                    <div className="contact-info-section">
                        <p className="contact-label">Email</p>
                        <div
                            className={`clipboard`}
                            onClick={() => {
                                navigator.clipboard.writeText('alexraykarplus@gmail.com');
                                setCopyClick(true);
                            }}
                            onAnimationEnd={() => setCopyClick(false)}
                        >
                            <p>alexraykarplus@gmail.com</p>
                            <div className={`clipboard-hover`}>copy to clipboard</div>
                            <div className={`clipboard-popup ${copyClick ? "copyClick" : ""}`}>copied</div>
                        </div>
                    </div>

                    <div className="contact-info-section">
                        <p className="contact-label">Phone</p>
                        <p>+1 (310) 773-1196</p>
                    </div>
                </div>
            </main>

            {/* <hr /> */}

            <footer />
        </div>
    )
}

export default Contact