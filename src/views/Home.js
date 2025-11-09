import { useEffect } from 'react';
import Nav from '../components/Nav';
import ASPhoto from '../imgs/home/artistStatement.jpg'
import BioPhoto from '../imgs/home/bio.jpg'
import '../styles/Home.css'

const Home = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Home';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <div className='content-block' id='bio' style={{'marginTop': 0}}>
                <div className='block-img'>
                    <img src={BioPhoto} id='bio-photo' alt="Bio: So It Goes (2024)" />
                </div>
                <div className="block-text">
                    <div className="title" id='bio-header'>Bio</div>
                    <p id='bio-text'>
                        Bug Karplus is an artist based in Colorado. Their focus is in printmaking, sculpture, and poetry.
                        Their latest research is in transforming 2-dimensional pieces into 3-dimensional forms.
                        While they are usually in the studio, they can also occasionally be found learning languages,
                        reading historical fiction, or hanging out with their senior rabbit, Mac.
                    </p>
                </div>
            </div>
            <hr />
            <div className='content-block' id='statement'>
                <div className="block-text">
                    <div className="title" id='statement-header'>Artist Statement</div>
                    <p id='statement-text'>
                        Printmaking is my medium of choice. Working through a matrix satisfies my meticulous nature while teaching me to let go;
                        the final image, with its reversals and transformations, is always a bit beyond my control. My latest work is in transforming my 2-dimensional pieces into 3-dimensional forms,
                        allowing me to further explore how representation can influence the distance between art and observer.
                    </p>
                    <br />
                    <p>
                        My current work explores structures as metaphors. Forms such as buildings can be perfect analogues for human bodies, for relationships, for memories.
                        My work also examines text in conjunction with visuals. Text can hold meaning but can also function as pattern and ornament. I find that, for me, poetry and visuals flow from the same spring.
                    </p>
                </div>
                <div className='block-img'>
                    <img src={ASPhoto} id='statement-photo' alt="Artist Statement: Inking Buck in Wheat Field (2024)" />
                </div>
            </div>
            <footer />
        </div>
    )
}

export default Home