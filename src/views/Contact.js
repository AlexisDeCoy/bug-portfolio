import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import ContactPhoto from '../imgs/ContactPageSmall.png'
import '../styles/Contact.css'

const Contact = () => {
    const [copyClick, setCopyClick] = useState(false);

    useEffect(() => {
        document.title = 'Bug Karplus - Contact';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <main>
                <div className="contact-img">
                    <img src={ContactPhoto} alt="Contact" />
                </div>

                <div className="contact-info">
                    <div className="title">Contact Info</div>
                    <div className="contact-info-section">
                        <p>
                            Please feel free to contact me with questions
                            or would like to work together on a project!
                        </p>
                    </div>

                    <div className="contact-info-section">
                        <p className="label">Instagram</p>
                        <p><a href='https://www.instagram.com/mush_room_bug/'>@mush_room_bug</a></p>
                    </div>

                    <div className="contact-info-section">
                        <p className="label">YouTube</p>
                        <p><a href="https://www.youtube.com/@asmRAY1">youtube.com/asmRAY1</a></p>
                    </div>

                    <div className="contact-info-section">
                        <p className="label">Email</p>
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
                        <p className="label">Phone</p>
                        <p>+1 (310) 773-1196</p>
                    </div>
                </div>
            </main>

            <footer />
        </div>
    )
}

export default Contact