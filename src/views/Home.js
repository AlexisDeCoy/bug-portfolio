import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import HomePagePhoto from '../imgs/HomePage.jpg'
import '../styles/Home.css'

const Home = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Home';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <main>
                <div className="home-img">
                    <img src={HomePagePhoto} className="feature" alt="Home Page" />
                </div>

                <div className="home-content">
                    <div className="title">
                        Artist Statement
                    </div>

                    <div className="home-text">
                        My work is a way for me to explore ideas of ethics and principles in the form of visual storytelling.
                        These themes are executed through illustration and a blend of printmaking techniques.
                        At the heart of my work lie recurring motifs including animals, language, and human-like forms.
                        I love to explore the interaction between the natural and the unnatural, delving into the complex relationships that exist between human and non-human animals.
                        I create in the realms of conflict and symbiosis, inviting viewers to contemplate the connection between all living beings.
                        My work is playful, incorporating vibrant colors and striking contrasts, while having a slight hint of something darker and more enigmatic.
                        I create in hope that my work will encourage viewers to consider the place in which they and other life forms belong.
                    </div>
                </div>
            </main>

            <footer />
        </div>
    )
}

export default Home