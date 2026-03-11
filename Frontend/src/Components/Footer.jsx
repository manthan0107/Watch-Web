import { FaXTwitter } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row top">
                        <div className="col-12 col-lg-3">
                            <img src={require('../img/logo-white.png')} alt="" />
                            <p className="jost mt-4">Sophisticated simplicity for the independent mind.</p>
                            <ul className="d-flex ff">
                                <li className="me-3"><FaXTwitter className="size app" /></li>
                                <li className="mx-3"><IoBasketballOutline className="size app" /></li>
                                <li className="mx-3"><FaBehance className="size app" /></li>
                                <li className="ms-3"><IoLogoInstagram className="size app" /></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mt-lg-0 mt-4">
                            <h6 className="mont text-uppercase">about us</h6>
                            <ul className="text-capitalize jost">
                                <li>sitemap</li>
                                <li>privacy policy</li>
                                <li>your account</li>
                                <li>advanced search</li>
                                <li>term & condition</li>
                                <li>contact us</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mt-lg-0 mt-4">
                            <h6 className="mont text-uppercase">categories</h6>
                            <ul className="text-capitalize jost">
                                <li>custom service</li>
                                <li>F.A.Q's</li>
                                <li>ordering tracking</li>
                                <li>contact us</li>
                                <li>events</li>
                                <li>popular</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mt-lg-0 mt-4">
                            <h6 className="mont text-uppercase">company</h6>
                            <ul className="text-capitalize jost">
                                <li>about us</li>
                                <li>delivery information</li>
                                <li>privacy policy</li>
                                <li>discount</li>
                                <li>custom service</li>
                                <li>term & condition</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bank">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7 d-flex align-items-center">
                                <h6>© Copyright 2025 | <span>Gwath</span> By EngoTheme. <span>Powered by Clorin.</span></h6>
                            </div>
                            <div className="col-12 col-md-5 d-flex mt-3 mt-md-0 justify-content-md-end">
                                <img src={require('../img/payment.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;