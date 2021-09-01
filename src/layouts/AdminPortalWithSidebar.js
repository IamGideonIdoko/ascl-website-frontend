import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPortalWithSidebar.css';
import industryWorker from '../images/industry-worker.jpg';
import asclLogo from '../images/ascl-logo.png'

/* create WithSidebar Layout component */
const AdminPortalWithSidebar = (props) => {
    const [openSide, setOpenSide] = useState(false);

    return(
        <div className="admin-portal-withsidebar">
            <div className={`side-nav-overlay ${openSide ? 'openSide' : ''}`} onClick={() => setOpenSide(false)}></div>
            <div className={`admin-portal-sidebar ${openSide ? 'openSide' : ''}`}>
                <div className="aps-inner-wrapper">
                    <button className="ap-sidebar-btn" onClick={() => setOpenSide(prev => !prev)}><i className={`neu ${openSide ? 'neu-close-lg' : 'neu-hamburger-menu'}`}></i></button>
                    <div className="ap-image-box">
                    <img src={industryWorker} alt=""/>
                    <span className="ap-img-watermark">ASCL <br /> C-PANEL</span>
                    <span className="ap-ascl-logo"><img src={asclLogo} alt="ascl logo"/></span>
                    </div>
                    <div className="aps-facilities s-box">
                        {/* <div className="aps-box-header">
                            <h2><span className="ap-ascl-logo"><img src={asclLogo} alt="ascl logo"/></span> ASCL C-PANEL</h2>
                        </div> */}
                        <div className='aps-box-body'>
                            <ul className="aps-facilities-list">
                                <li><Link to="/adm/profile">Admin Profile</Link></li>
                                <li><Link to="/adm/manage-page">Manage Page</Link></li>
                                <li><Link to="/adm/manage-file-upload">Manage File Upload</Link></li>
                                <li><Link to="/adm/manage-gallery">Manage Gallery</Link></li>
                                <li><Link to="/adm/manage-mgmt-profile">Manage Mgmt. Profile</Link></li>
                                <li><Link to="/adm/manage-faq">Manage FAQ</Link></li>
                                <li><Link to="/adm/manage-access">Manage Access</Link></li>
                                <li><Link to="#">Log out</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div className="admin-portal-ws-content">
            { props.children }

            </div>
        </div>
    )
}

export default AdminPortalWithSidebar;