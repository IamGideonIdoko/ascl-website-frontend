import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';
import {connect} from 'react-redux';
import {config} from '../config/keys';
import AllGalleriesRender from '../components/AllGalleriesRender';
import {Link} from 'react-router-dom';

function Gallery(props) {

    const allGalleries = props.galleries;

    console.log("allGalleries: ", props.galleries);

    const numberOfPages = Math.ceil(allGalleries.length / config.numberOfNewsPerPage);

    const currentPageNumber = 1;

    const limitStartingNumber = (currentPageNumber - 1) * config.numberOfNewsPerPage;

    const limitEndingNumber = limitStartingNumber + config.numberOfNewsPerPage;

    return (
        <MainLayout>
            <WithSidebar>
                <h1>Gallery</h1>
                <p>Find below photos from Ajaokuta Steel Company. Click on any photo to view properly.</p>
                {!props.isLoaded
                    ? <div>Loading</div>
                    : <div>
                        <AllGalleriesRender
                            galleries={allGalleries.slice(limitStartingNumber, limitEndingNumber)}/>
                        <div>Page {`${currentPageNumber} of ${numberOfPages}`}</div>
                        {(allGalleries.length > config.numberOfNewsPerPage)
                            ? <div className="pagination-wrapper">
                                    <div className={`pagination pgn-flex-end`}>
                                        <span>
                                            <Link to={`/gallery/page/${currentPageNumber + 1}`}>Next Page →</Link>
                                        </span>
                                    </div>
                                </div>
                            : null
}

                    </div>}
            </WithSidebar>
        </MainLayout>
    )
}

const mapStateToProps = (state, ownProps) => ({galleries: state.gallery.galleries, isLoaded: state.gallery.isLoaded});

export default connect(mapStateToProps, null)(Gallery);