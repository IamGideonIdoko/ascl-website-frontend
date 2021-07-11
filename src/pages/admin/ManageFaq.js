import {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';
import AssetView from './../../components/AssetView';

const ManageFaq = (props) => {
    const [question,
        setQuestion] = useState('');
    const [answer,
        setAnswer] = useState('');

    const handleAddFaqInput = () => {}

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-box">
                    <h2>Manage FAQ</h2>
                </div>
                <div className="ap-box">
                    <AssetView/>
                </div>
                <div className="ap-box">
                    <h3>Add new FAQ</h3>

                    <div className="add-to-gallery-form">
                        <div>
                            <label htmlFor="question">Question</label>
                            <input
                                type="text"
                                name="question"
                                id="question"
                                value={question}
                                onChange={handleAddFaqInput}/>
                        </div>

                        <div>
                            <label htmlFor="answer">Answer</label>
                            <input
                                type="text"
                                name="answer"
                                id="answer"
                                value={answer}
                                onChange={handleAddFaqInput}/>
                        </div>
                        <div style={{ marginTop: "1.5rem" }}>
                            <button className="primary-btn">Add Faq</button>
                        </div>
                    </div>

                </div>

                <div className="ap-box">
                    <h3>Update or Remove FAQ</h3>
                    <p>Select the FAQ who want to update or remove.</p>
                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManageFaq);
