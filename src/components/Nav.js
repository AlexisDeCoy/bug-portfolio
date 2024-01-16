import { useLocation, useNavigate } from "react-router-dom"
import '../styles/Nav.css'

const Nav = () => {
    let location = useLocation().pathname;
    let navigate = useNavigate();

    return (
        <header>
            <nav>
                <h1 onClick={() => navigate('/')}>BUG KARPLUS</h1>
                <ul className="link-list">
                    <li className={`${location === '/' ? "active" : ""}`} onClick={() => navigate('/')}>HOME</li>
                    <li className={`${location.includes('/prints') ? "active" : ""}`} onClick={() => navigate('/prints/portfolio')}>PRINTMAKING</li>
                    <li className={`${location.includes('/designs') ? "active" : ""}`} onClick={() => navigate('/designs/portfolio')}>GRAPHIC DESIGN</li>
                    <li className={`${location === '/curriculum-vitae' ? "active" : ""}`} onClick={() => navigate('/curriculum-vitae')}>CV</li>
                    <li className={`${location === '/contact' ? "active" : ""}`} onClick={() => navigate('/contact')}>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav