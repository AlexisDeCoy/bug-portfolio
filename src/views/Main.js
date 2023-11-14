import React, { useEffect } from 'react';
import Nav from './Nav';
import HomePagePhoto from '../imgs/HomePage.jpg'

const Main = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Home';
    }, []);

    return(
    <div className='body'>
        <Nav />

        <hr />

        <div className="page-title">
            <h3>Events</h3>
        </div>

        <div className="events">
            Check out the <a href="https://www.youtube.com/@asmRAY1">asmRAY</a> YouTube channel for personal
            attention ASMR videos
        </div>

        <hr />

        <main>
            <div className="img-preview">
                <img src={HomePagePhoto} className="feature" alt="Home Page" />
            </div>

            <div className="accomplishments">
                <div className="placeholder">Page in progress</div>
                <div className="year">
                    2023
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia?</li>
                        <br />
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid possimus assumenda beatae?</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    </ul>
                </div>

                <br />

                <div className="year">
                    2022
                    <ul>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid possimus assumenda beatae?
                        </li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia?</li>
                        <br />
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, quas eaque. Sit natus nobis
                            necessitatibus?</li>
                    </ul>
                </div>

                <br />

                <div className="year">
                    2021
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <br />
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid possimus assumenda beatae?
                        </li>
                        <br />
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, quas eaque. Sit natus nobis
                            necessitatibus?</li>
                        <br />
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quod architecto facilis tenetur
                            illo expedita placeat quidem quas repellat porro!</li>
                    </ul>
                </div>
            </div>
        </main>

        <hr />

        <footer />
    </div>
    )
}

export default Main