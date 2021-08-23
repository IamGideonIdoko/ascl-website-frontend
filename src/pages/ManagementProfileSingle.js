import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';
import {useParams, Link} from 'react-router-dom';
import {connect} from 'react-redux';

function ManagementProfileSingle(props) {

    const {slug} = useParams();

    const allProfiles = props.mgmtProfiles;

    const exactProfile = allProfiles.filter(page => page.slug === slug)[0];

    return (
        <MainLayout>
            <WithSidebar>
                {!props.isLoaded
                    ? <div>Loading</div>
                    : exactProfile
                        ? <div>
                                <div className="page-header">
                                    <h5 className="breadcrumb">
                                        <small>
                                            <Link to="/">Home
                                            </Link>&nbsp;&gt;&gt;&nbsp;
                                            <Link to="/management-profile">Management Profile
                                            </Link>&nbsp; &gt;&gt; {exactProfile.position}</small>
                                    </h5>

                                    <div className="profile-container">
                                        <div className="proc-left">
                                            <h3>Top Management</h3>
                                            <ul>
                                                {allProfiles.map(profile => <li key={profile._id}><Link to={`/management-profile/${profile.slug}`}>{profile.position}</Link></li>)}
                                            </ul>
                                        </div>
                                        <div className="proc-right">
                                            <h2>{exactProfile.position}</h2>
                                            <div className="page-cover-wrap">
                                                <img className="page-cover" src={exactProfile.photo} alt={exactProfile.name}/>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="page-body-container">
                                    <div
                                        className={`page-body true-page-body`}>{exactProfile.about}</div>
                                </div>

                            </div>
                        : <div>404 - Page not found</div>}
            </WithSidebar>
        </MainLayout>
    )
}

const mapStateToProps = (state, ownProps) => ({mgmtProfiles: state.mgmtProfile.mgmtProfiles, isLoaded: state.page.isLoaded});

export default connect(mapStateToProps, null)(ManagementProfileSingle);