import MainLayout from './../layouts/MainLayout';
import WithSidebar from './../layouts/WithSidebar';

function CompanyOverview() {

    return (
        <MainLayout>
            <WithSidebar>
                <h1>Company Overview</h1>
            </WithSidebar>
        </MainLayout>
    )
}

export default CompanyOverview;