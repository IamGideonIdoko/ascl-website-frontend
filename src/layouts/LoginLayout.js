import '../styles/Login.css';
import industryWorker from '../images/industry-worker.jpg';
import asclLogo from '../images/ascl-logo.png'

const LoginLayout = (props) => {
    return (
        <div className="login-page">
            <div className="login-left">
                <div className="ll-content">
                    <div>
                        <div>
                            <h1 className="login-header"><img src={asclLogo} alt="ASCL Logo"/>
                                <span>ASCL</span>
                            </h1>
                        </div>
                        { props.children }
                    </div>
                </div>

            </div>
            <div className="login-right">
                <div className="lr-content">
                    <div className="worker-img-wrapper">
                        <img src={industryWorker} alt="industry worker"/>
                    </div>
                    <div className="lr-catchword">
                        <h2><i>The Bedrock of Nigeria's Industralization...</i></h2>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LoginLayout