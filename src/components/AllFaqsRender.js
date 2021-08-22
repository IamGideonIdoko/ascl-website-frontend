import {Link} from 'react-router-dom';
// import moment from 'moment';

const AllFaqsRender = ({faqs}) => {

    if (faqs.length === 0) {
        return (
            <b>No FAQs yet.</b>
        )
    } else {
        return (
            <div className="faqs-container">
                <ul>
                    {faqs.map(faq => (
                        <li key={faq._id} className="faqs-box">
                            <div>
                                <p>{faq.question}</p>
                            </div>
                            <div>
                                <p>{faq.answer}</p>
                            </div>

                        </li>
                    ))
}
                </ul>
            </div>
        )
    }
}

export default AllFaqsRender;
