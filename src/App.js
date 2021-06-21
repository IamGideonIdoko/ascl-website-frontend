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

function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/adm">
                        <Login />
                    </Route>
                    <Route path="/clients">
                        <Clients/>
                    </Route>
                    <Route path="/company-overview">
                        <CompanyOverview/>
                    </Route>
                    <Route path="/consultancy-services">
                        <ConsultancyServices/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/engineering-works-complex">
                        <EngineeringWorksComplex/>
                    </Route>
                    <Route path="/faqs">
                        <FAQs/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/management-profile">
                        <ManagementProfile/>
                    </Route>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/press-releases">
                        <PressReleases/>
                    </Route>
                    <Route path="/products">
                        <Products/>
                    </Route>
                    <Route path="/about">
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
    );
}

export default App;
