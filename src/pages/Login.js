import '../styles/Login.css';
import LoginLayout from './../layouts/LoginLayout';
import {connect} from 'react-redux';
import {login} from '../reduxstore/actions/authActions';
import SimpleReactValidator from 'simple-react-validator';
import {Link, useHistory} from 'react-router-dom';
import {useState, useRef} from 'react';

const Login = () => {

    const [username,
        setUsername] = useState('');
    const [password,
        setPassword] = useState('');
    const [,
        forceUpdate] = useState();

    let history = useHistory();

    //instantiate the validator as a singleton
    const simpleValidator = useRef(new SimpleReactValidator({
        element: (message, className) => <div className={'formErrorMsg'}>{message}</div>
    }));

    const handleLoginFormSubmit = e => {
        e.preventDefault();

        console.log("login form was submitted");

        if (simpleValidator.current.allValid()) {
            //all input is valid create admin user object
            console.log("all input is valid");

        } else {
            //input not valid, so show error
            console.log("input not valid");
            simpleValidator
                .current
                .showMessages(); //show all errors if exist
            forceUpdate(1); //force update component to display error
        }
    }

    const handleInputChange = e => {
        switch (e.target.name) {
            case 'username':
                setUsername(() => e.target.value);
                break;
            case 'password':
                setPassword(() => e.target.value);
                break;
            default:
        }
    }

    return (
        <LoginLayout>
            <form
                method="post"
                id="loginForm"
                className="login-form"
                onSubmit={handleLoginFormSubmit}>
                <div className="login-form-header">
                    <h1>Login</h1>
                    <div>
                        <span>Do not have an account? &nbsp;&nbsp;<Link to="/register-adm">Register</Link>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            placeholder="Enter Username"
                            value={username}
                            required={true}
                            onChange={handleInputChange}/> {/* simple validation */
                        simpleValidator
                            .current
                            .message('username', username, 'required|alpha_num|between:4,25')
}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            require={true}
                            onChange={handleInputChange}/> {/* simple validation */
                        simpleValidator
                            .current
                            .message('password', password, 'required|between:4,25')
}
                    </div>
                    <div className="submit-wrapper">
                        <button type="submit" className="login-form-submit">Login</button>
                    </div>
                </div>
            </form>
        </LoginLayout>
    )
}

export default Login
