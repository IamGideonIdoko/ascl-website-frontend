import { Link } from 'react-router-dom';
import '../styles/WithSidebar.css';

/* create WithSidebar Layout component */
const WithSidebar = (props) => {

    return(
        <div className="with-sidebar">
            <div className="ws-content">
            { props.children }

            </div>
            <div className="sidebar">
                <div>
                    <div className="s-facilities s-box">
                        <div className="s-box-header">
                            <h2>Facilities</h2>
                        </div>
                        <div className='s-box-body'>
                            <h5>Engineering Works Complex</h5>
                            <ul className="s-facilities-list">
                                <li><Link to="/engineering-works-complex/equipment-repair-shop">Enquipment Repair Shop</Link></li>
                                <li><Link to="/engineering-works-complex/forge-and-fabrication-shop">Forge and Fabrication Shop</Link></li>
                                <li><Link to="/engineering-works-complex/foundary-and-pattern-making-shop">Foundary and Pattern Making Shop</Link></li>
                                <li><Link to="/engineering-works-complex/machine-and-tools-shop">Machine and Tools Shop</Link></li>
                                <li><Link to="/engineering-works-complex/rubberizing-and-vulcanizing-shop">Rubberizing and Vulcanizing Shop</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="s-news-updates s-box">
                        <div className="s-box-header">
                            <h2>News Update</h2>
                        </div>
                        <div className="s-box-body">

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default WithSidebar;