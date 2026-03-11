import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Bg from "../Components/Bg";
import Header from "../Components/Header";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {

    const titleData = { name: "Contact Us", path: "Contact Us" };


    return (
        <>
            <div className="contact">
                <Header />

                <Bg title={titleData.name} path={titleData.path} />

                <div className="contact-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 left">
                                <h6 className="mont text-uppercase mb-5">contact information</h6>
                                <p className="jost mb-4">We do not sell product from our corporate headquarters in New York City. If you want to visit, please reach out to our customer service team first.</p>
                                <address className="jost">1201 Broadway <br /> Suite 600</address>
                                <button className="jost"></button>
                                <div className="mont text-uppercase follow">follow us</div>
                                <ul className="d-flex">
                                    <li className="me-1"><FaXTwitter className="icon" /></li>
                                    <li className="mx-1"><FaInstagram className="icon" /></li>
                                    <li className="mx-1"><FaFacebookF className="icon" /></li>
                                    <li className="ms-1"><FaYoutube className="icon" /></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 right ps-0">
                                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.507673260571!2d72.88183672503678!3d21.21170808048381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f70d1333a7b%3A0x4ad999490fa037bc!2sYogichowk%2C%20Vijay%20Nagar%201%2C%20Yoginagar%20Society%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1753071175086!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h1 className="text-capitalize mont">contact form</h1>
                            </div>
                        </div>
                        <div className="row gy-4 mt-4">
                            <div className="col-12">
                                <div className="validation"></div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex flex-column">
                                <label htmlFor="name" className="jost">Name :</label>
                                <input className="jost" type="text" />
                            </div>
                            <div className="col-12 col-lg-6 d-flex flex-column">
                                <label htmlFor="email" className="jost">Email :</label>
                                <input className="jost" type="email" />
                            </div>
                            <div className="col-12 d-flex flex-column">
                                <label htmlFor="message" className="jost">Message :</label>
                                <textarea className="jost" name="" id="" rows={11}></textarea>
                            </div>
                            <div className="col text-center">
                                <button className="jost text-uppercase"></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;