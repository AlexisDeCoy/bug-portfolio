import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Nav from './Nav';
import PrintImages from '../documents/PrintImages';
import { PrintData } from '../documents/PrintData';

const Details = () => {
    const { id } = useParams();
    const itemDetails = PrintData[id];
    const img = PrintImages[itemDetails.img];

    useEffect(() => {
        document.title = itemDetails.title;
    }, [itemDetails.title]);

    return (
        <div className='body'>
            <Nav />

            <hr />

            <div className="details-title">
                <h3>{itemDetails.title}</h3>
            </div>

            <div>
                <h4 className='details-type'>{itemDetails.type}</h4>
                <h4 className='details-year'>{itemDetails.year}</h4>
            </div>

            <div className="details-spacer" />

            {/* <hr /> */}

            <div className="artist-statement-image">
                <img src={img} className="artist-statement-image" alt="Artist Statement"></img>
            </div>

            {/* <hr /> */}

            <footer />
        </div>
    )
}

export default Details;