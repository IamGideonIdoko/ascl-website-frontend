import '../styles/Login.css';
import LoginLayout from './../layouts/LoginLayout';

const Login = () => {
    return (
        <LoginLayout>
            <form className="login-form">
                            <div className="login-form-header">
                                <h1>Register</h1>
                                <div>
                                    <span>Do you have an account?
                                        &nbsp;&nbsp;<a href="#">Login</a>
                                    </span>
                                </div>
                            </div>
                            <div className="login-form-body">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
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
                                <div className="form-group">
                                    <label htmlFor="password">Retype Password</label>
                                    <input
                                        type="password"
                                        name="retype-password"
                                        id="retype-password"
                                        className="form-control"
                                        placeholder="Retype Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Access Name</label>
                                    <input
                                        type="text"
                                        name="access-name"
                                        id="access-name"
                                        className="form-control"
                                        placeholder="Enter Access Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Access Key</label>
                                    <input
                                        type="password"
                                        name="access-key"
                                        id="access-key"
                                        className="form-control"
                                        placeholder="Enter Access Key"/>
                                </div>
                                <div className="submit-wrapper">
                                    <button type="submit" className="login-form-submit">Register</button>
                                </div>

                            </div>
                        </form>
        </LoginLayout>
    )
}

export default Login
