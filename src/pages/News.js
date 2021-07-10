import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';
import {connect} from 'react-redux';
import {config} from '../config/keys';
import AllPageRender from '../components/AllPagesRender';
import {Link} from 'react-router-dom';

function News(props) {

    const allNewsPages = props.pages
        ? props
            .pages
            .filter(page => page.category === "news")
        : [];

    const numberOfPages = Math.ceil(allNewsPages.length / config.numberOfNewsPerPage);

    const currentPageNumber = 1;

    const limitStartingNumber = (currentPageNumber - 1) * config.numberOfNewsPerPage;

    const limitEndingNumber = limitStartingNumber + config.numberOfNewsPerPage;

    return (
        <MainLayout>
            <WithSidebar>
                <h1>News</h1>
                <p>Find below News from Ajaokuta Steel Company:</p>
                {!props.isLoaded
                    ? <div>Loading</div>
                    : <div>
                        <AllPageRender
                            pages={allNewsPages.slice(limitStartingNumber, limitEndingNumber)}/>
                        <div>Page {`${currentPageNumber} of ${numberOfPages}`}</div>
                        {(allNewsPages.length > config.numberOfNewsPerPage)
                            ? <div className="pagination-wrapper">
                                    <div className={`pagination pgn-flex-end`}>
                                        <span>
                                            <Link to={`/news/page/${currentPageNumber + 1}`}>Next Page →</Link>
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

const mapStateToProps = (state, ownProps) => ({pages: state.page.pages, isLoaded: state.page.isLoaded});

export default connect(mapStateToProps, null)(News);