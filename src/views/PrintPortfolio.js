import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import PrintGalleryItem from '../components/PrintGalleryItem';
import data from '../documents/prints.json';
import '../styles/Portfolio.css'

const PrintPortfolio = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Print Portfolio';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <div className="grid-gallery">
                {Object.values(data).map((item, i) =>
                    <PrintGalleryItem key={i} index={i} item={item} />
                )}
            </div>

            <footer />
        </div>
    )
}

export default PrintPortfolio