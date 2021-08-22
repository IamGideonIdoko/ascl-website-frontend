import {SRLWrapper} from 'simple-react-lightbox';
// import moment from 'moment';

const AllGalleriesRender = ({galleries}) => {

    if (galleries.length === 0) {
        return (
            <b>No Gallery.</b>
        )
    } else {
        return (
            <SRLWrapper>
                <ul className="gallery-wrapper">{galleries.map((gallery, idx) => (
                        <li key={gallery._id} className="gallery-box">
                            <img src={gallery.cover_img} alt="Not Available"/>
                        </li>
                    ))
}
                </ul>
            </SRLWrapper>
        )
    }
}

export default AllGalleriesRender;
