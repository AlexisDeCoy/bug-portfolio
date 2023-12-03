import React, { useEffect } from 'react';
import Nav from './Nav';
import GalleryItem from './GalleryItem';
import { PrintData } from '../documents/PrintData';

const PrintPortfolio = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Print Portfolio';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <hr />

            <div className="page-title">
                <h3>Prints</h3>
            </div>

            <div className="portfolio-spacer-top" />

            <div className="portfolio-gallery">
                {PrintData.map((item, i) =>
                    <GalleryItem key={i} index={i} />
                )}
            </div>

            <div className="portfolio-spacer" />

            {/* <hr /> */}
        </div>
    )
}

export default PrintPortfolio