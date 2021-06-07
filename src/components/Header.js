import siteHeader from '../images/siteheader.jpg';

function Header() {

    return (
        <header className="header">
            <img src={siteHeader} alt="site header" />
        </header>
    );
}

export default Header;