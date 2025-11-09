import { useEffect } from 'react';
import Nav from '../components/Nav';
import Phil1Photo from '../imgs/teaching/Phil1.jpg'
import Phil2Photo from '../imgs/teaching/Phil2.jpg'
import Phil3Photo from '../imgs/teaching/Phil3.jpg'
import '../styles/Teaching.css'

const Teaching = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Teaching';
    }, []);

    return (
        <div className='body'>
            <Nav />


            <div className='content-block' id='phil-1' style={{ 'marginTop': 0 }}>
                <div className='block-img'>
                    <img src={Phil1Photo} id='phil-1-photo' alt="Teaching Philosophy: Snake Student Project (2025)" />
                </div>
                <div className="block-text">
                    <div className="title" id='phil-1-header'>Teaching Philosophy</div>
                    <p id='phil-1-text'>
                        The key to my teaching philosophy is contained in the word 'philosophy' itself.
                        Philo- love and -sophy wisdom. The goal at the epicenter of my lessons is to ignite a love of the pursuit of wisdom in my students.
                        In the art classroom, this means different things. For one, it means cultivating a love of craft.
                        This includes teaching various media and technologies and teaching students how to use these in the art-making process.
                        This means creating an environment that makes these different processes and technologies available and accessible for students, so that they can become comfortable with them at their own pace.
                        For example, if students are taught a lesson on printmaking, they should also eventually feel comfortable using the appropriate equipment, such as a printing press, on their own.
                        The classroom should be a real, operational studio space that not only allows students to use the available technologies (presses, kilns, software, etc.), but also encourages them to use them confidently on their own.
                    </p>
                </div>
            </div>
            <hr />
            <div className='content-block' id='phil-2'>
                <div className="block-text">
                    <p id='phil-2-text'>
                        The pursuit of wisdom in the classroom also includes an emphasis on community. 
                        Community is an essential element in the art classroom because peer feedback is necessary at every stage of art-making. 
                        This applies to artists of all skill levels. The community in an art classroom helps with ideation and brainstorming (pre-making stage), 
                        troubleshooting and support (while making), and most importantly critique (post-making stage). 
                        Allowing for community to be emphasized in this way during the teaching process exponentially increases the potential for learning 
                        because many creative eyes are providing feedback that can help each learner grow. Moreover, providing critique (as well as receiving critique) 
                        helps learners develop their own critical eye for artistic elements. 
                        Learners will, over time, become able to evaluate their own work and direct their goals according to their self-assessed strengths and challenges.
                    </p>
                </div>
                <div className='block-img'>
                    <img src={Phil2Photo} id='phil-2-photo' alt="Teaching Philosophy: Snake Student Project (2025)" />
                </div>
            </div>
            <hr />
            <div className='content-block' id='phil-3'>
                <div className='block-img'>
                    <img src={Phil3Photo} id='phil-3-photo' alt="Teaching Philosophy: Snake Student Project (2025)" />
                </div>
                <div className="block-text">
                    <p id='phil-3-text'>
                        Within the framework of my teaching philosophy, the role of the teacher is to convey their own passion to the students and lead by example. 
                        Students who sense earnest love of a subject from their teacher are more likely to see value in what they are being taught. 
                        This will foster an atmosphere that encourages students to leave their shells (and shed their “too cool” syndrome) so that they may embark together on a journey of sincere learning and engagement. 
                        If one teaches with this philosophy, learners will leave the classroom not having only attained more wisdom, but with a life-long desire to pursue it.
                    </p>
                </div>
            </div>
            <footer />
        </div>
    )
}

export default Teaching