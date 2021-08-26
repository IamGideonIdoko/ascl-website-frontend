import WithSidebar from '../layouts/WithSidebar';
import MainLayout from './../layouts/MainLayout';

function EngineeringWorksComplex() {

    return (
        <MainLayout>
            <WithSidebar>
                <div className="postBody">
                    <h1>Engineering Works Complex</h1>
                    <p>The Steel Plant also has a very large Engineering Works complex</p>
                    <p>The Engineering workshops of Ajaokuta steel company Limited comprises the
                        following:</p>

                    <ul>
                        <li>Foundry and pattern Making shop (FPS)</li>
                        <li>Forge and Fabrication shop (FFS)</li>
                        <li>Rubberizing and Vulcanizing shop (R&VS)</li>
                        <li>Power Equipment Repair shop (PERS)</li>
                        <li>Machine and Tools shop (M&TS)</li>
                    </ul>

                    <p>In each of these shops are wide range of machinery and equipment to carry out
                        a variety of fabrication, repair and maintenance works, manufacture of intricate
                        spare parts and reclamation of spares.</p>

                </div>
            </WithSidebar>
        </MainLayout>
    )
}

export default EngineeringWorksComplex;