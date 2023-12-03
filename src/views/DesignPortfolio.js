import React, { useEffect } from 'react';
import Nav from './Nav';
// import Calendar from '../imgs/graphicDesign/InDesign_Calendar.pdf'


const DesignPortfolio = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Design Portfolio';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <hr />

            <div className="page-title">
                <h3>Graphic Designs</h3>
            </div>

            <div className="portfolio-spacer-top" />

            <div className="artist-statement">
                Page in progress
            </div>

            {/* <img src={Calendar}></img> */}
            {/* <object data={Calendar}
                width="800"
                height="500">
            </object> */}

            <div className="portfolio-spacer" />

            <hr />
        </div>
    )
}

export default DesignPortfolio