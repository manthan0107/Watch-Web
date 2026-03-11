import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const Founder = ({ name, post, img }) => {
    return (
        <>
            <div className="emp-card text-center">
                <div className="img">
                    <img src={img} alt="" />
                    <div className="h-card">
                        <ul className="d-flex">
                            <li className="me-2"><FaFacebookF className="digital" /></li>
                            <li className="mx-2"><FaTwitter className="digital" /></li>
                            <li className="mx-2"><FaInstagram className="digital" /></li>
                            <li className="ms-2"><FaPinterest className="digital" /></li>
                        </ul>
                    </div>
                </div>
                <h5 className="name jost mt-3">{name}</h5>
                <h6 className="jost mt-2">{post}</h6>
            </div>
        </>
    )
}

export default Founder;