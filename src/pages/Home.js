import '../styles/Home.css'
import Navbar from './../components/Navbar';
import Header from '../components/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import asclCarousel1 from '../images/ascl-carousel.jpg'
import asclCarousel2 from '../images/ascl-carousel-2.jpg'
import asclCarousel3 from '../images/ascl-carousel-3.jpg'
import asclCarousel4 from '../images/ascl-carousel-4.jpg'
import asclCarousel5 from '../images/ascl-carousel-5.jpg'
import asclCarousel6 from '../images/ascl-carousel-6.jpg'
import asclCarousel7 from '../images/ascl-carousel-7.jpg'


function Home() {
    return(
        <div>
        <Header />
        <Navbar />
        <div className="content-max-width">
        <Carousel 
            autoPlay={true} 
            emulateTouch={true} 
            infiniteLoop={true}
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
        >
            <div>
                <img src={asclCarousel1} alt="Ascl Carousel" />
            </div>
            <div>
                <img src={asclCarousel2} alt="Ascl Carousel" />
            </div>
            <div>
                <img src={asclCarousel3} alt="Ascl Carousel" />
            </div>
            <div>
                <img src={asclCarousel4} alt="Ascl Carousel" />
            </div>
            <div>
                <img src={asclCarousel5} alt="Ascl Carousel" />
            </div>
            <div>
                <img src={asclCarousel6} alt="Ascl Carousel" />
            </div>
            <div>
                <img src={asclCarousel7} alt="Ascl Carousel" />
            </div>
            </Carousel>

        </div>

        </div>
    )
}

export default Home;