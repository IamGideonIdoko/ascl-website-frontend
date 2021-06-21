import '../styles/Login.css';
import LoginLayout from './../layouts/LoginLayout';

const Login = () => {
    return (
        <LoginLayout>
            <form className="login-form">
                            <div className="login-form-header">
                                <h1>Login</h1>
                                <div>
                                    <span>Do not have an account?
                                        &nbsp;&nbsp;<a href="#">Register</a>
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
                                        placeholder="Enter Username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter Password"/>
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
