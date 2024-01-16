import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import DesignImages from '../documents/DesignImages';
import { DesignData } from '../documents/DesignData';
// import '../styles/Details.css'

const DesignDetails = () => {
    const { id } = useParams();
    const itemDetails = DesignData[id];

    useEffect(() => {
        document.title = itemDetails.title;
    }, [itemDetails.title]);

    return (
        <div className='body'>
            <Nav />

            {itemDetails.positions ? (
                <div className='details-grid'>
                    <div className='details-container-left'>
                        <div className='label'>{itemDetails.title}</div>
                        <div className='details-info'>{itemDetails.software}</div>
                        <div className='details-year'>{itemDetails.year}</div>
                        {itemDetails.pdf &&
                            <a
                                className='pdf'
                                href={DesignImages[itemDetails.pdf]}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Download PDF
                            </a>
                        }
                    </div>

                    {itemDetails.imgs.map((img, i) =>
                        <div
                            className='details-grid-img-container'
                            key={i}
                            style={{
                                alignItems: itemDetails.positions[i][0],
                                gridColumn: itemDetails.positions[i][1],
                                gridRow: itemDetails.positions[i][2],
                                justifyContent: itemDetails.positions[i][3],
                            }}
                        >
                            <img className='details-img' src={DesignImages[img]} alt='' />
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <div className='details-container-center'>
                        <div className='label'>{itemDetails.title}</div>
                        <div className='details-info'>{itemDetails.software}</div>
                        <div className='details-year'>{itemDetails.year}</div>
                        {itemDetails.pdf ?
                            <a
                                className='pdf'
                                href={DesignImages[itemDetails.pdf]}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Download PDF
                            </a>
                        : null}
                    </div>

                    <div className='details-img-container'>
                        <img className='details-img' src={DesignImages[itemDetails.imgs[0]]} alt='' />
                    </div>
                </div>
            )}

            <footer />
        </div>
    )
}

export default DesignDetails;