import { useEffect } from 'react';
import Nav from '../components/Nav';
import data from '../documents/home_data.json';
import '../styles/Home.css'

function contentImage(v) {
    return (
        <div className='block-img'>
            <img src={v.img.src} id={`${v.id}-photo`} alt={v.img.alt} />
        </div>
    )
}

const Home = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Home';
    }, []);

    return (
        <div className='body'>
            <Nav />

            {data.map((v, i) =>
                <div key={i} >
                    {i ? <hr /> : null}
                    <div className='content-block' id={v.id} style={!i ? { 'marginTop': 0 } : {}}>
                        {i % 2 === 0 ? contentImage(v) : null}
                        <div className="block-text">
                            <div className="title" id={`${v.id}-header`}>{v.text.title}</div>
                            {v.text.content.map((t, i) =>
                                <div key={i}>
                                    {i ? <br /> : null}
                                    <p id={`${v.id}-text-${i}`}>{t}</p>
                                </div>
                            )}
                        </div>
                        {i % 2 === 1 ? contentImage(v) : null}
                    </div>
                </div>
            )}
            <footer />
        </div>
    )
}

export default Home