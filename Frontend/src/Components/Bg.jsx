const Bg = ({ title, path }) => {
    return (
        <>
            <div className="bg-set ff text-center">
                <div className="container">
                    <h1>{title}</h1>
                    <div className="path">
                        Home<span className="size mx-4 ff">→</span>{path}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bg;