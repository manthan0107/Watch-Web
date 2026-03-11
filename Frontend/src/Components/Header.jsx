import { Link } from 'react-router-dom';
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import React, { useEffect, useRef } from "react";


const Header = () => {

    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                headerRef.current.classList.toggle("sticky", window.scrollY > 0);
            }

        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header ref={headerRef}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col d-xl-none">
                            <div className="menu">
                                <RiMenu2Fill className='size ex-s' />
                            </div>
                        </div>
                        <div className="col ps-xl-0 text-xl-start text-center">
                            <div className="logo justify-content-start">
                                <img src={require('../img/logo-white.png')} alt="" />
                            </div>
                        </div>
                        <div className="col jost d-none d-xl-block">
                            <nav>
                                <ul className="d-flex ff justify-content-center text-uppercase">
                                    <li className="me-4"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="mx-4"><Link to="/shop" className="nav-link">Shop</Link></li>
                                    <li className="mx-4"><Link to="/product" className="nav-link">Product</Link></li>
                                    <li className='mx-4'><Link to="/about" className="nav-link">About</Link></li>
                                    <li className='mx-4'><Link to="/contact" className="nav-link">Contact</Link></li>
                                    <li className='ms-4'><Link to="/faq" className="nav-link">FQA</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col pe-xl-0">
                            <ul className="bar d-flex align-items-center ff justify-content-end jost">
                                <li className="me-2 position-relative">
                                    <FaSearch className="size position-relative" />
                                    <div className="show-name">Search</div>
                                </li>

                                <li className="mx-2 d-none d-xl-block position-relative">
                                    <Link to="/account" className='nav-link'>
                                        <FaRegUser className="size" />
                                    </Link>
                                    <div className="show-name">Login</div>
                                </li>

                                <li className="mx-2 d-none d-xl-block position-relative">
                                    <Link to="/wish" className='nav-link'>
                                        <FaRegHeart className="size" />
                                    </Link>
                                    <div className="show-name">Wishlist</div>
                                </li>

                                <li className="ms-2 position-relative">
                                    <IoCartOutline className="size ex-s" />
                                    <div className="show-name">Cart</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;