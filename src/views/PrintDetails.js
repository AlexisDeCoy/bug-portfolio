import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Nav from '../components/Nav';
import PrintImages from '../documents/PrintImages';
import { PrintData } from '../documents/PrintData';

const PrintDetails = () => {
    const { id } = useParams();
    const itemDetails = PrintData[id];
    const img = PrintImages[itemDetails.img];

    useEffect(() => {
        document.title = itemDetails.title;
    }, [itemDetails.title]);

    return (
        <div className='body'>
            <Nav />

            <div className="details-container-center">
                <div className='label'>{itemDetails.title}</div>
                <div className='details-info'>{itemDetails.type}</div>
                <div className='details-year'>{itemDetails.year}</div>
            </div>

            <div className="details-spacer" />

            <div className="details-img-container">
                <img className="details-img" src={img} alt={itemDetails.img} />
            </div>

            <footer />
        </div>
    )
}

export default PrintDetails;