import {Link} from 'react-router-dom';
import moment from 'moment';

const AllPagesRender = ({pages, category}) => {
    const pgCatLinkHead = category === "news"
        ? "news"
        : category === "press-release"
            ? "press-releases"
            : "";
    console.log("category: ", category);
    console.log("pgCat", pgCatLinkHead);

    if (pages.length === 0) {
        return (
            <b>No Posts.</b>
        )
    } else {
        return (
            <div>{pages.map(page => (
                    <article key={page._id} className="page-box">
                        <div className="page-box-left"></div>
                        <div className="page-box-right">
                            <h3>
                                <Link to={`/${pgCatLinkHead}/${page.slug}`}>{page.title}</Link>
                            </h3>
                        </div>

                    </article>
                ))
}</div>
        )
    }
}

export default AllPagesRender;
