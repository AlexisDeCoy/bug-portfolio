import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

const Nav = () => {
    const [openDropDown, setOpenDropDown] = useState(false);
    // const [openMobile, setOpenMobile] = useState(false);
    let location = useLocation().pathname;
    let navigate = useNavigate();

    return (
        <header>
            <div className="header-spacer" />
            <h1 className='mobile-name' onClick={() => navigate('/')}>BUG KARPLUS</h1>
            <nav>
                <h1 onClick={() => navigate('/')}>BUG KARPLUS</h1>
                <ul className="link-list">
                    <li className={`${location === '/' ? "active" : ""}`} onClick={() => navigate('/')}>HOME</li>
                    <li
                        className={`dropdown ${(location === '/prints/portfolio' || location === '/designs/portfolio') ? "active" : ""} ${openDropDown ? 'open-dropdown' : ''}`}
                        onClick={() => openDropDown ? setOpenDropDown(false) : setOpenDropDown(true)}
                    ><span>PORTFOLIO</span>
                        <div className="dropdown-content">
                            <p onClick={() => navigate('/designs/portfolio')}>GRAPHIC DESIGN</p>
                            <hr />
                            <p onClick={() => navigate('/prints/portfolio')}>PRINTMAKING</p>
                        </div>
                    </li>
                    <li className={`${location === '/artist-statement' ? "active" : ""}`} onClick={() => navigate('/artist-statement')}>ARTIST STATEMENT</li>
                    <li className={`${location === '/curriculum-vitae' ? "active" : ""}`} onClick={() => navigate('/curriculum-vitae')}>CURRICULUM VITAE</li>
                    <li className={`${location === '/contact' ? "active" : ""}`} onClick={() => navigate('/contact')}>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav