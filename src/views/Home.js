import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import HomePagePhoto from '../imgs/HomePageNewCropped.jpg'
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
                        <p>My inspiration often begins with the mundane: a house, a cat, a cup of tea. In framing my compositions around the typical, I aim to present them in new ways.
                            My art becomes an ode to these often overlooked elements of daily life. My love for animals is also evident. Their presence can express stories and difficult emotions in a simple and universal way.
                            My works explore the interaction between the natural and the unnatural worlds, particularly the relationships that exist between human and non-human animals.
                        </p>
                        <br />
                        <p>
                            Printmaking is my medium of choice. Working through a matrix satisfies my meticulous nature while teaching me to let go;
                            the final image, with its reversals and transformations, is always a bit beyond my control. My latest work is in transforming my 2D pieces into 3D forms,
                            allowing me to further explore how representation can influence the distance between art and observer.
                        </p>
                        <br />
                        <p>
                            I use vibrant colors and striking contrasts to playfully articulate experiences I cannot otherwise express. My art is the language of my heart, the “words” with which I speak of my emotions, curiosities, and ideals. 
                            I create in the hope that my work will encourage viewers to consider the place in which they and other life forms belong.
                        </p>

                    </div>
                </div>
            </main>

            <footer />
        </div>
    )
}

export default Home