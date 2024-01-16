import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import DesignGalleryItem from '../components/DesignGalleryItem';
import { DesignData } from '../documents/DesignData';
import '../styles/Portfolio.css'

const DesignPortfolio = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Design Portfolio';
    }, []);

    return (
        <div className='body'>
            <Nav />
            
            <div className="flex-gallery">
                {DesignData.map((item, i) =>
                    <DesignGalleryItem key={i} index={i} />
                )}
            </div>

            <footer />
        </div>
    )
}

export default DesignPortfolio