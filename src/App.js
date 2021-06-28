import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import CompanyOverview from './pages/CompanyOverview';
import ConsultancyServices from './pages/ConsultancyServices';
import Contact from './pages/Contact';
import EngineeringWorksComplex from './pages/EngineeringWorksComplex';
import FAQs from './pages/FAQs';
import Gallery from './pages/Gallery';
import ManagementProfile from './pages/ManagementProfile';
import News from './pages/News';
import PressReleases from './pages/PressReleases';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './reduxstore/store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/admin-profile">
                            <div>
                                <h1>This is the admin profile.</h1>
                            </div>
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
        </Provider>
    );
}

export default App;
