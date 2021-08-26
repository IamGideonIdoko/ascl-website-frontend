import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';

function ConsultancyServices() {

    return (
        <MainLayout>
            <WithSidebar>
                <h1>Consultancy Services</h1>
                <div>
                    <p>We also offer consultancy services in the following areas:</p>

                    <ul>
                        <li>Design and drawing.</li>
                        <li>Product development.</li>
                        <li>General Engineering.</li>
                        <li>Rubber product development.</li>
                        <li>Plant refurbishing and Turn around Maintenance.</li>
                    </ul>

                </div>
            </WithSidebar>

        </MainLayout>
    )
}

export default ConsultancyServices;