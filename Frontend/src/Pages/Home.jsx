import React, { useState } from "react";
import Slider from "react-slick";
import Slider1 from "../Components/Slider1";
import Slidertop from "../Components/Slidertop";
import Header from "../Components/Header";
import 'animate.css';

const Home = () => {

    const [imgval, getval] = useState();
    console.log(imgval);

    let products = [];

    if (imgval === "toprate") {
        products = [
            {
                title: "Celestial Time",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p1.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p9.png") },
                    { image: require("../img/p6.png") },
                    { image: require("../img/p10.webp") }
                ]
            },
            {
                title: "Lunaris Elite",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p2.png") },
                    { image: require("../img/p5.png") },
                    { image: require("../img/p4.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p6.png") }
                ]
            },
            {
                title: "Seraphic Precision",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p3.png") },
                    { image: require("../img/p8.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p9.png") },
                    { image: require("../img/p4.png") }
                ]
            },
            {
                title: "Monarch Timepiece",
                price: 70,
                oldPrice: 80,
                images: [
                    { image: require("../img/p4.png") },
                    { image: require("../img/p6.png") },
                    { image: require("../img/p8.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p10.webp") }
                ]
            },
            {
                title: "Astrials Maison",
                price: 70,
                oldPrice: 80,
                images: [
                    { image: require("../img/p10.webp") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p10.webp") },
                    { image: require("../img/p9.png") }
                ]
            },
            {
                title: "The Velvet Tock",
                price: 80,
                oldPrice: 90,
                images: [
                    { image: require("../img/p6.png") },
                    { image: require("../img/p4.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p8.png") }
                ]
            }
        ];
    }
    else if (imgval === "bestsale") {
        products = [
            {
                title: "Celestial Time",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p7.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p5.png") },
                    { image: require("../img/p9.png") },
                    { image: require("../img/p6.png") },
                    { image: require("../img/p10.webp") }
                ]
            },
            {
                title: "Lunaris Elite",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p6.png") },
                    { image: require("../img/p5.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p4.png") }
                ]
            },
            {
                title: "Seraphic Precision",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p7.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p9.png") },
                    { image: require("../img/p4.png") }
                ]
            },
            {
                title: "Monarch Timepiece",
                price: 70,
                oldPrice: 80,
                images: [
                    { image: require("../img/p4.png") },
                    { image: require("../img/p6.png") },
                    { image: require("../img/p8.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p10.webp") }
                ]
            },
            {
                title: "Astrials Maison",
                price: 70,
                oldPrice: 80,
                images: [
                    { image: require("../img/p7.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p9.png") },
                    { image: require("../img/p10.webp") },
                    { image: require("../img/p8.png") }
                ]
            },
            {
                title: "The Velvet Tock",
                price: 80,
                oldPrice: 90,
                images: [
                    { image: require("../img/p8.png") },
                    { image: require("../img/p4.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p6.png") }
                ]
            }
        ];
    }
    else {
        // default or other condition like "toprate", "bestsale"
        products = [
            {
                title: "Celestial Time",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p5.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p9.png") },
                    { image: require("../img/p6.png") },
                    { image: require("../img/p10.webp") }
                ]
            },
            {
                title: "Lunaris Elite",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p4.png") },
                    { image: require("../img/p5.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p6.png") }
                ]
            },
            {
                title: "Seraphic Precision",
                price: 60,
                oldPrice: 70,
                images: [
                    { image: require("../img/p8.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p9.png") },
                    { image: require("../img/p4.png") }
                ]
            },
            {
                title: "Monarch Timepiece",
                price: 70,
                oldPrice: 80,
                images: [
                    { image: require("../img/p5.png") },
                    { image: require("../img/p6.png") },
                    { image: require("../img/p8.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p10.webp") }
                ]
            },
            {
                title: "Astrials Maison",
                price: 70,
                oldPrice: 80,
                images: [
                    { image: require("../img/p9.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p1.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p10.webp") },
                    { image: require("../img/p8.png") }
                ]
            },
            {
                title: "The Velvet Tock",
                price: 80,
                oldPrice: 90,
                images: [
                    { image: require("../img/p6.png") },
                    { image: require("../img/p4.png") },
                    { image: require("../img/p3.png") },
                    { image: require("../img/p2.png") },
                    { image: require("../img/p7.png") },
                    { image: require("../img/p8.png") }
                ]
            }
        ];

    }
    const pick = [
        {
            title: "Celestial Time",
            price: 60,
            oldPrice: 70,
            images: [
                { image: require("../img/p1.png") },
                { image: require("../img/p3.png") },
                { image: require("../img/p7.png") },
                { image: require("../img/p9.png") },
                { image: require("../img/p6.png") },
                { image: require("../img/p10.webp") }
            ]
        },
        {
            title: "Lunaris Elite",
            price: 60,
            oldPrice: 70,
            images: [
                { image: require("../img/p2.png") },
                { image: require("../img/p5.png") },
                { image: require("../img/p4.png") },
                { image: require("../img/p7.png") },
                { image: require("../img/p1.png") },
                { image: require("../img/p6.png") }
            ]
        },
        {
            title: "Seraphic Precision",
            price: 60,
            oldPrice: 70,
            images: [
                { image: require("../img/p3.png") },
                { image: require("../img/p8.png") },
                { image: require("../img/p2.png") },
                { image: require("../img/p1.png") },
                { image: require("../img/p9.png") },
                { image: require("../img/p4.png") }
            ]
        },
        {
            title: "Aurum Prestige",
            price: 70,
            oldPrice: 80,
            images: [
                { image: require("../img/p4.png") },
                { image: require("../img/p1.png") },
                { image: require("../img/p5.png") },
                { image: require("../img/p3.png") },
                { image: require("../img/p7.png") },
                { image: require("../img/p9.png") }
            ]
        },
        {
            title: "Veritas Chronograph",
            price: 80,
            oldPrice: 90,
            images: [
                { image: require("../img/p5.png") },
                { image: require("../img/p2.png") },
                { image: require("../img/p4.png") },
                { image: require("../img/p8.png") },
                { image: require("../img/p10.webp") },
                { image: require("../img/p3.png") }
            ]
        },
        {
            title: "Maison Du Temps",
            price: 80,
            oldPrice: 90,
            images: [
                { image: require("../img/p6.png") },
                { image: require("../img/p2.png") },
                { image: require("../img/p3.png") },
                { image: require("../img/p9.png") },
                { image: require("../img/p7.png") },
                { image: require("../img/p1.png") }
            ]
        },
        {
            title: "Monarch Timepiece",
            price: 70,
            oldPrice: 80,
            images: [
                { image: require("../img/p7.png") },
                { image: require("../img/p6.png") },
                { image: require("../img/p8.png") },
                { image: require("../img/p2.png") },
                { image: require("../img/p3.png") },
                { image: require("../img/p10.webp") }
            ]
        },
        {
            title: "Astrials Maison",
            price: 70,
            oldPrice: 80,
            images: [
                { image: require("../img/p8.png") },
                { image: require("../img/p3.png") },
                { image: require("../img/p1.png") },
                { image: require("../img/p7.png") },
                { image: require("../img/p10.webp") },
                { image: require("../img/p9.png") }
            ]
        },
        {
            title: "The Velvet Tock",
            price: 80,
            oldPrice: 90,
            images: [
                { image: require("../img/p10.webp") },
                { image: require("../img/p4.png") },
                { image: require("../img/p3.png") },
                { image: require("../img/p2.png") },
                { image: require("../img/p7.png") },
                { image: require("../img/p8.png") }
            ]
        }
    ];
    const settings = {
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const setting = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [activeTab, setActiveTab] = useState("latest");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const blog = [
        {
            date: "May 26, 2025",
            title: "Unlock the Full Potential of Collection",
            p: "One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling of used clothes has become mainstream....",
            blogimg: require("../img/blog1.jpg")

        },
        {
            date: "May 26, 2025",
            title: "Mix and Match",
            p: "One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling of used clothes has become mainstream....",
            blogimg: require("../img/blog2.jpg")

        },
        {
            date: "May 26, 2025",
            title: "Adds incredible Value To Your Life",
            p: "One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling of used clothes has become mainstream....",
            blogimg: require("../img/blog3.jpg")

        },
        {
            date: "May 26, 2025",
            title: "Everything You Didn't know About Yourself",
            p: "One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling of used clothes has become mainstream....",
            blogimg: require("../img/blog4.jpg")

        },
        {
            date: "May 26, 2025",
            title: "The Perfect Solution For Fresh Life",
            p: "One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling of used clothes has become mainstream....",
            blogimg: require("../img/blog5.jpg")

        },
        {
            date: "May 26, 2025",
            title: "Simplify Your Life With Simple Products",
            p: "One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling of used clothes has become mainstream....",
            blogimg: require("../img/blog6.jpg")

        },
    ]

    return (

        <section className="home">
            <Header />
            <Slider1 />

            <div className="top-pick">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h6 className="title text-uppercase mont">our top picks</h6>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <Slider {...settings}>

                                {pick.map((pick, index) => (
                                    <div key={index} className="animate__animated animate__backInUp">
                                        <Slidertop images={pick.images} />
                                        <div className="img-des text-center">
                                            <h6 className="mont">{pick.title}</h6>
                                            <span className="jost">
                                                ${pick.price.toFixed(2)} <del>${pick.oldPrice.toFixed(2)}</del>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <div className="banner-content">
                                <h5 className="text-uppercase mont">new arrival</h5>
                                <h1 className="text-uppercase mont">unico mechanical revolution</h1>
                                <p>Inspired by a piece from 1916 created during the Belle Époque and Art Nouveau period</p>
                                <button className="jost text-uppercase"></button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mt-md-0">
                            <div className="img-hover">
                                <img className="zoom-img" src={require('../img/banner1.jpg')} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 col-md-6">
                            <div className="img-hover">
                                <img className="zoom-img" src={require('../img/banner2.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center">
                            <div className="banner-content">
                                <h5 className="text-uppercase mont">new arrival</h5>
                                <h1 className="text-uppercase mont">manufactured with rare expertise</h1>
                                <p>Inspired by a piece from 1916 created during the Belle Époque and Art Nouveau period</p>
                                <button className="jost text-uppercase"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="favourite">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="d-flex flex-column flex-sm-row justify-content-center">
                                <li className="me-sm-3 text-center" onClick={() => { handleTabClick("latest"); getval("latest"); }}>
                                    <h5 className={`title text-uppercase mont ff ${activeTab === "latest" ? "active" : ""}`}>latest product</h5>
                                </li>
                                <li className="mx-sm-3 my-2 my-sm-0 text-center" onClick={() => { handleTabClick("top"); getval("toprate"); }}>
                                    <h5 className={`title text-uppercase mont ff ${activeTab === "top" ? "active" : ""}`}>top rating</h5>
                                </li>
                                <li className="ms-sm-3 text-center" onClick={() => { handleTabClick("best"); getval("bestsale"); }}>
                                    <h5 className={`title text-uppercase mont ff ${activeTab === "best" ? "active" : ""}`}>best sellers</h5>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {products.map((product, index) => (
                            <div key={index} className="col-12 col-sm-6 col-xl-4 animate__animated animate__backInUp">
                                <Slidertop images={product.images} />
                                <div className="img-des text-center">
                                    <h6 className="mont">{product.title}</h6>
                                    <span className="jost">
                                        ${product.price.toFixed(2)} <del>${product.oldPrice.toFixed(2)}</del>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row"><div className="col text-center">
                        <button className='text-uppercase jost animate__animated animate__fadeInUp'></button>
                    </div></div>
                </div>
            </div>

            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="title mont text-uppercase">our blog</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <Slider {...setting}>
                            {blog.map((data) => (
                                <div className="col-12 col-sm-6 blog-card text-center">
                                    <div className="img-hover">
                                        <img className="zoom-img" src={data.blogimg} alt="" />
                                    </div>
                                    <div className="img-content px-4">
                                        <p className="mt-4 jost">{data.date}</p>
                                        <h4 className="mont">{data.title}</h4>
                                        <p className="jost">{data.p}</p>
                                        <button className="jost text-uppercase butn"></button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="discount">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12 col-xl-11 col-xxl-9 d-flex flex-column flex-lg-row align-items-center justify-content-around">
                            <div className="left d-flex flex-column align-items-center">
                                <h2 className="mont text-capitalize">get 10% discount</h2>
                                <p className="jost text-center">I want to stay up to date with the latest Hublot news</p>
                            </div>
                            <div className="right d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                                <input type="email" placeholder="Enter your email..." className="jost" />
                                <button className="jost text-uppercase ms-2 ms-sm-4"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
