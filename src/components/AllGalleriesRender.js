import {SRLWrapper} from 'simple-react-lightbox';
import NoImage from '../images/image-not-found.png';
import '../styles/Gallery.css';
// import moment from 'moment';

const AllGalleriesRender = ({galleries}) => {

    const galleryOptions = {
        settings: {
            overlayColor: "rgba(1, 104, 103, 0.5)",
            autoplaySpeed: 3000,
            transitionSpeed: 1200
        },
        buttons: {
            showDownloadButton: false
        }
    }

    const handleImgError = e => {
        e.target.src = NoImage;
        e.onerror = null
    }

    if (galleries.length === 0) {
        return (
            <b>No Gallery.</b>
        )
    } else {
        return (
            <SRLWrapper options={galleryOptions}>
                <ul className="gallery-wrapper">{galleries.map((gallery, idx) => (
                        <li key={gallery._id} className="gallery-box">
                            <img
                                src={gallery.cover_img}
                                alt={gallery.caption || 'Not Available'}
                                onError={handleImgError}/>
                        </li>
                    ))
}
                </ul>
            </SRLWrapper>
        )
    }
}

export default AllGalleriesRender;
