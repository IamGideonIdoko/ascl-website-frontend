import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="mainNav">
        <div className="content-max-width">

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/management-profile">Management Profile</Link></li>
            <li className="nav-dropdown-parent">
                <span>Facilities</span> 
                <div className="nav-dropdown">
                    <ul>
                        <li><Link to="/company-overview">Company Overview</Link></li>
                        <li><Link to="/engineering-works-complex">Engineering Works Complex</Link></li>
                    </ul>
                </div>
            </li>
            <li className="nav-dropdown-parent">
                <span>Products & Services</span>
                <div className="nav-dropdown">
                    <ul>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/consultancy-services">Consultancy Services</Link></li>
                    </ul>
                </div>
            </li>
            <li><Link to="/clients">Our Clients</Link></li>
            <li className="nav-dropdown-parent">
                <span>Media</span> 
                <div className="nav-dropdown">
                    <ul>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/press-releases">Press Releases</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </div>
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
        </ul>

        </div>
        </nav>
    )
}

export default Navbar;