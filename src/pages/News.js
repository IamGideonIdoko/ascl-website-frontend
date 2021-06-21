import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';

function News() {

    return (
        <MainLayout>
            <WithSidebar>
                <h1>News</h1>
            </WithSidebar>
        </MainLayout>
    )
}

export default News;