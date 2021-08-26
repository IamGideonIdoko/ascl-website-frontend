import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';
import {connect} from 'react-redux';
import AllFaqsRender from '../components/AllFaqsRender';
import '../styles/Faqs.css';

function Faqs(props) {

    const allFaqs = props.faqs;

    return (
        <MainLayout>
            <WithSidebar>
                <h1>Frequently Asked Questions</h1>
                <p>Find all frequently asked questions about the company below:</p>
                {!props.isLoaded
                    ? <div>Loading</div>
                    : <div>
                        <AllFaqsRender faqs={allFaqs}/>
                    </div>}
            </WithSidebar>
        </MainLayout>
    )
}

const mapStateToProps = (state, ownProps) => ({faqs: state.faq.faqs, isLoaded: state.faq.isLoaded});

export default connect(mapStateToProps, null)(Faqs);