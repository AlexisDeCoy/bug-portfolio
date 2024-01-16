import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import PrintGalleryItem from '../components/PrintGalleryItem';
import { PrintData } from '../documents/PrintData';
import '../styles/Portfolio.css'

const PrintPortfolio = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Print Portfolio';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <div className="grid-gallery">
                {PrintData.map((item, i) =>
                    <PrintGalleryItem key={i} index={i} />
                )}
            </div>

            <footer />
        </div>
    )
}

export default PrintPortfolio