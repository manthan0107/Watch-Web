import Bg from "../Components/Bg";
import Header from "../Components/Header";

const Blog = () => {

    const titleData = { name: "Blog", path: "Blog" };


    return (
        <>
            <div className="blog">

                <Header />

                <Bg title={titleData.name} path={titleData.path} />

                <div className="sec-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="filter-1">
                                    <h6 className="mont text-uppercase">categories</h6>
                                    <ul className="text-capitalize">
                                        <li>modern watches</li>
                                        <li>vintage edition</li>
                                        <li>minimal series</li>
                                        <li>bold watches</li>
                                        <li>luxury line</li>
                                        <li>retro timepieces</li>
                                        <li>sport edition</li>
                                        <li>military series</li>
                                        <li>men"s watches</li>
                                        <li>unisex line</li>
                                    </ul>
                                </div>
                                <div className="filter-2">
                                    <h6 className="mont text-uppercase mt-5 blk">tags</h6>
                                    <ul className="jost text-capitalize">
                                        <li>Design</li>
                                        <li>Future</li>
                                        <li>girl</li>
                                        <li>life</li>
                                        <li>mix</li>
                                        <li>solution</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-9">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;