import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';
import {connect} from 'react-redux';
import AllProfilesRender from '../components/AllProfilesRender';

function News(props) {

    const allProfilesPages = props.mgmtProfiles;

    return (
        <MainLayout>
            <WithSidebar>
                <h1>Management Profile</h1>
                <p>Find profile of top management staff below:</p>
                {!props.isLoaded
                    ? <div>Loading</div>
                    : <div>
                        <AllProfilesRender profiles={allProfilesPages}/>
                    </div>}
            </WithSidebar>
        </MainLayout>
    )
}

const mapStateToProps = (state, ownProps) => ({mgmtProfiles: state.mgmtProfile.mgmtProfiles, isLoaded: state.page.isLoaded});

export default connect(mapStateToProps, null)(News);