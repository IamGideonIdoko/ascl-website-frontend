import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';
import SEOHeader from '../components/SEOHeader';

function Contact() {

    return (
        <MainLayout>
            <WithSidebar>
            <SEOHeader
                    title="Contact Us - Ajaokuta Steel Company Limited"
                    description="Here is the company's information."/>
                <div className="postBody">
                    <h1>Contact Us</h1>
                    <h3>Contact Information:</h3>

                    <h3>Email Address:</h3>
                    <p>info@ajaokutasteel.com.ng
                    </p>

                    <h3>Website:</h3>
                    <p>www.ajaokutasteel.com.ng</p>

                </div>
            </WithSidebar>
        </MainLayout>
    )
}

export default Contact;