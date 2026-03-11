const News = () => {
    return (
        <>
            <div className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md ff d-flex flex-column justify-content-center">
                            <h3 className="mont">our <br /> newsletter!</h3>
                            <p className="jost">It only takes a second to be the first to findout
                                about our latest news</p>
                        </div>
                        <div className="col-12 col-md d-flex justify-content-center align-items-center">
                            <input className="jost w-100 w-md-75" type="email" placeholder="Enter Your Email..." />
                            <button className="jost text-uppercase"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;