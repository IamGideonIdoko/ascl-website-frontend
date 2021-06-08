import '../styles/Home.css'
import Navbar from './../components/Navbar';
import Header from '../components/Header';

function Home() {
    return(
        <div>
        <Header />
        <Navbar />

        <div className="content-max-width">
        This is the home page

        </div>

        </div>
    )
}

export default Home;