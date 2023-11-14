import React, { useEffect } from 'react';
import Nav from './Nav';
import PDF from '../documents/KarplusB_ArtistCV.pdf';


const CurriculumVitae = () => {

    useEffect(() => {
        document.title = 'Bug Karplus - Curriculum Vitae';
    }, []);

    return (
        <div className='body'>
            <Nav />

            <hr />

            <div class="page-title">
                <h3>Alexander "Bug" Karplus</h3>
                <h3>Curriculum Vitae</h3>
            </div>

            <div class="cv-section-title">Education</div>

            <div class="cv-item">
                <div class="cv-item-year">2023</div>
                <div class="cv-item-content">
                    <div>AA, Front Range Community College, Fort Collins, CO <em>(anticipated)</em></div>
                    <div className="cv-item-content-spacer" />
                    <div>Certificate of Multimedia Fundamentals <em>(anticipated)</em></div>
                </div>
            </div>

            <div class="cv-section-spacer" />

            <div class="cv-section-title">Group Exhibitions</div>

            <div class="cv-item">
                <div class="cv-item-year">2021</div>
                <div class="cv-item-content">
                    <div><em>FRCC Student Art Show,</em> Art Lab Fort Collins, Fort Collins, CO</div>
                    <div className="cv-item-content-spacer" />
                    <div>
                        <em>Anarchy, Rules We Should Break, and Mutual Destruction,</em> Iowa State University Memorial
                        Union Gallery, Ames, IA
                    </div>
                </div>
            </div>

            <div className="cv-item-content-spacer" />

            <div class="cv-item">
                <div class="cv-item-year">2022</div>
                <div class="cv-item-content"><em>The Overwintering Project,</em> Louis Joel Gallery, Altona Victoria, Australia</div>
            </div>

            <div class="cv-section-spacer" />

            <div class="cv-section-title">Juried Exhibitions</div>

            <div class="cv-item">
                <div class="cv-item-year">2024</div>
                <div class="cv-item-content"><em>528.0</em> Arvada Center for the Arts and Humanities, Arvada, CO</div>
            </div>

            <div class="cv-section-spacer" />

            <div class="cv-section-title">Publication</div>

            <div class="cv-item">
                <div class="cv-item-year">2023</div>
                <div class="cv-item-content"><em>AvantArt Magazine</em> Issue 2, Front Range Community College</div>
            </div>

            <div className="cv-item-content-spacer" />

            <div class="cv-item">
                <div class="cv-item-year">2022</div>
                <div class="cv-item-content"><em>AvantArt Magazine</em> Issue 1, Front Range Community College</div>
            </div>

            <div className="cv-section-spacer" />

            <div className="cv-pdf">
                <a href = {PDF} target='_blank' rel='noopener noreferrer'>Download PDF</a>
                </div>

            <div className="cv-section-spacer" />

            <hr />

            <footer />
        </div>
    )
}

export default CurriculumVitae