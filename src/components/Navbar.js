import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="mainNav">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Administration</li>
            <li>Facilities</li>
            <li>Products & Services</li>
            <li>Our Clients</li>
            <li>Media</li>
            <li>Contact Us</li>
            <li>FAQs</li>
        </ul>

        </nav>
    )
}

export default Navbar;