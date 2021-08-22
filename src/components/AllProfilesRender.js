import {Link} from 'react-router-dom';
// import moment from 'moment';

const AllProfilesRender = ({profiles, category}) => {

    if (profiles.length === 0) {
        return (
            <b>No profile yet.</b>
        )
    } else {
        return (
            <div className="profiles-container">
                {/* <div className="proc-left">
                    <ul>
                        {profiles.map(profile => (
                            <li key={profile._id} className="">
                                <Link to={`/management-profile/${profile.slug}`}>{profile.position}</Link>
                            </li>
                        ))
}
                    </ul>
                </div> */}
                <ul>
                    {profiles.map(profile => (
                        <li key={profile._id} className="profiles-box">
                            <div>
                                <img src={profile.photo} alt={profile.name}/>
                            </div>
                            <div>
                                <Link to={`/management-profile/${profile.slug}`}>{profile.name}</Link><br/>
                                <Link to={`/management-profile/${profile.slug}`}>{profile.position}</Link>
                            </div>

                        </li>
                    ))
}
                </ul>
            </div>
        )
    }
}

export default AllProfilesRender;
