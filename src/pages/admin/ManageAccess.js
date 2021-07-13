import {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from './../../reduxstore/actions/authActions';
import WithAdminAuth from '../../layouts/WithAdminAuth';

const ManageAccess = (props) => {
    const [accessName,
        setQuestion] = useState('');
    const [accessKey,
        setAnswer] = useState('');

    const handleAddAccessInput = () => {}

    return (
        <WithAdminAuth>
            {props.isAuthenticated && <div className="ap-main-section">
                <div className="ap-box">
                    <h2>Manage Access</h2>
                </div>
                <div className="ap-box">
                    <h3>Add new Access</h3>

                    <div className="add-to-gallery-form">
                        <div>
                            <label htmlFor="accessName">Access Name</label>
                            <input
                                type="text"
                                name="accessName"
                                id="accessName"
                                value={accessName}
                                onChange={handleAddAccessInput}/>
                        </div>

                        <div>
                            <label htmlFor="accessKey">Access Key</label>
                            <input
                                type="text"
                                name="accessKey"
                                id="accessKey"
                                value={accessKey}
                                onChange={handleAddAccessInput}/>
                        </div>
                        <div style={{ marginTop: "1.5rem" }}>
                            <button className="primary-btn">Add Access</button>
                        </div>
                    </div>

                </div>

                <div className="ap-box">
                    <h3>Delete Access</h3>
                    <p>Select the Access you want to delete.</p>
                </div>

            </div>}
        </WithAdminAuth>
    )
}

const mapStateToProps = state => ({user: state.auth.user, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps, {logout})(ManageAccess);
