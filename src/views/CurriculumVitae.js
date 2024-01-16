import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import PDF from '../documents/KarplusB_ArtistCV.pdf';
import '../styles/CurriculumVitae.css'
import { CVData } from '../documents/CVData';


const CurriculumVitae = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Curriculum Vitae';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <div className="label text-center">
                Alexander "Bug" Karplus
                <br />
                Curriculum Vitae
            </div>

            {CVData.map((section, i) =>
                <div className="cv-section" key={i}>
                    <div className="label">{section.sectionTitle}</div>

                    {section.year.map((year, i) =>
                        <div className="cv-item" key={i}>
                            <div className="cv-item-year">{year.value}</div>
                            <div className="cv-item-content">
                                {year.items.map((item, i) => 
                                    item.length === 1 ?
                                    (<div key={i}>{item[0]}</div>)
                                    :
                                    (<div key={i}><em>{item[0]}</em>{item[1]}</div>)
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="pdf text-center">
                <a href={PDF} target='_blank' rel='noopener noreferrer'>Download PDF</a>
            </div>

            <footer />
        </div>
    )
}

export default CurriculumVitae