const Abtcard = ({ img, name, p }) => {
    return (
        <>
            <div className="bg-card  d-flex flex-column align-items-center justify-content-center">
                <img className="ff" src={img} alt="" />
                <h2 className="mont mt-5 mb-4">{name}</h2>
                <p className="jost">{p}</p>
            </div>
        </>
    )
}

export default Abtcard;