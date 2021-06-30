import Home from '../pages/Home';
import About from '../pages/About';
import Clients from '../pages/Clients';
import CompanyOverview from '../pages/CompanyOverview';
import ConsultancyServices from '../pages/ConsultancyServices';
import Contact from '../pages/Contact';
import EngineeringWorksComplex from '../pages/EngineeringWorksComplex';
import FAQs from '../pages/FAQs';
import Gallery from '../pages/Gallery';
import ManagementProfile from '../pages/ManagementProfile';
import News from '../pages/News';
import PressReleases from '../pages/PressReleases';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminProfile from './../pages/admin/AdminProfile';
import ManageAccess from '../pages/admin/ManageAccess';
import ManageFileUpload from '../pages/admin/ManageFileUpload';
import ManageGallery from '../pages/admin/ManageGallery';
import ManagePage from '../pages/admin/ManagePage';
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import {loadUser} from './../reduxstore/actions/authActions';
import {connect} from 'react-redux';
import {useEffect, Fragment} from 'react';
import {loadFirebase} from './../reduxstore/actions/firebaseActions';

export const AdmRedirect = () => {
    useHistory().push("/adm/profile");
    return (
        <Fragment></Fragment>
    );
}

const SiteRouter = (props) => {

    useEffect(() => {
        props.loadUser();

        // load firebase after 3s of component mount
        setTimeout(() => !props.firebaseApp && props.loadFirebase(), 3000);
        console.log("site router");

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/adm">
                        <AdmRedirect/>
                    </Route>
                    <Route exact path="/adm/profile">
                        <AdminProfile/>
                    </Route>
                    <Route exact path="/adm/manage-access">
                        <ManageAccess/>
                    </Route>
                    <Route exact path="/adm/manage-file-upload">
                        <ManageFileUpload/>
                    </Route>
                    <Route exact path="/adm/manage-gallery">
                        <ManageGallery/>
                    </Route>
                    <Route exact path="/adm/manage-page">
                        <ManagePage/>
                    </Route>
                    <Route exact path="/register-adm">
                        <Register/>
                    </Route>
                    <Route exact path="/login-adm">
                        <Login/>
                    </Route>
                    <Route exact path="/clients">
                        <Clients/>
                    </Route>
                    <Route exact path="/company-overview">
                        <CompanyOverview/>
                    </Route>
                    <Route exact path="/consultancy-services">
                        <ConsultancyServices/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/engineering-works-complex">
                        <EngineeringWorksComplex/>
                    </Route>
                    <Route exact path="/faqs">
                        <FAQs/>
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route exact path="/management-profile">
                        <ManagementProfile/>
                    </Route>
                    <Route exact path="/news">
                        <News/>
                    </Route>
                    <Route exact path="/press-releases">
                        <PressReleases/>
                    </Route>
                    <Route exact path="/products">
                        <Products/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route>
                        <div>
                            404
                        </div>
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

const mapStateToProps = (state, ownProps) => ({firebaseApp: state.fire.firebaseApp})

export default connect(mapStateToProps, {loadUser, loadFirebase})(SiteRouter);
