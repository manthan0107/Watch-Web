import Header from "../Components/Header";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Slidertop from "../Components/Slidertop";
import Slider from "react-slick";


const Product = () => {
    const [value, setValue] = React.useState(2);
    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

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
        dots: true,
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

    const [count, setcount] = useState(1);

    return (
        <>
            <div className="product">
                <Header />

                <div className="sec-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <img src={require('../img/p4.png')} alt="" />
                            </div>
                            <div className="col-md-5 d-flex flex-column justify-content-evenly">
                                <h4 className="mont">Crown & Compass</h4>
                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                                <div className="jost price">$80.00 <del>$90.00</del></div>
                                <p className="jost">
                                    Cheer on your favorite red and white team in eye-popping style with these red & white striped game bib overalls!
                                </p>
                                <div className="inner-add d-flex">
                                    <div className="d-flex add-btn">
                                        <button onClick={() => setcount(prev => Math.max(1, prev - 1))}>-</button>
                                        <input type="text" value={count} readOnly />
                                        <button onClick={() => setcount(prev => prev + 1)}>+</button>
                                    </div>
                                    <button className="text-uppercase jost ms-3"></button>
                                </div>
                                <button className="btn jost text-uppercase mt-4"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec-2 mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col border-bottom">
                                <ul className="d-flex flex-column flex-sm-row justify-content-center">
                                    <li
                                        className="me-sm-3 text-center"
                                        onClick={() => handleTabClick("description")}
                                    >
                                        <h5 className={`text-capitalize mont ${activeTab === "description" ? "active" : ""}`}>
                                            description
                                        </h5>
                                    </li>
                                    <li
                                        className="mx-sm-3 my-2 my-sm-0 text-center"
                                        onClick={() => handleTabClick("s&r")}
                                    >
                                        <h5 className={`text-capitalize mont ${activeTab === "s&r" ? "active" : ""}`}>
                                            shipping & return
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Conditionally render content */}
                        {activeTab === "description" && (
                            <div className="des">
                                <div className="row">
                                    <div className="col">
                                        <p className="jost">Temporibus unde ut exercitationem sit nostrum consectetur est. Voluptatem fugit nisi et minima vel. Adipisci iure ut corrupti hic consectetur. Atque mollitia modi suscipit ut necessitatibus. Et ab cupiditate et voluptatibus excepturi atque sint veniam. Perspiciatis dolorum consectetur amet. Nam sed et voluptates asperiores illum ipsam deleniti. Voluptatem minima ea dolor dicta reprehenderit.</p>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-md-6 d-flex flex-column justify-content-center">
                                        <h4 className="mont text-capitalize">outstanding features</h4>
                                        <p className="jost">Blanditiis dolorem voluptatem consequuntur explicabo accusamus fugiat maxime. Eum vel fugit voluptatibus ex dolorum dolorem cupiditate. Et sed minus repudiandae. Cum aliquid aut voluptatem possimus ipsa.</p>
                                        <ul className="jost">
                                            <li>Longum tempus warantum: Product warantum pro 2 annis.</li>
                                            <li>Impact resistentiam: Designa productum ut impacta ab collisione sustineant.</li>
                                            <li>Princeps vetustatem: Using qualitas materiae princeps.</li>
                                            <li>Notitia securitatis: Prospicere salutem users' notitia et personalis notitia</li>
                                            <li>Dedicavit ministros: Provide professionales et dedicatos ministros officia</li>
                                        </ul>
                                        <p className="jost mb-0 mt-3">Eum aspernatur culpa sit saepe velit velit consequatur. Quia illo enim voluptas qui. Expedita mollitia suscipit odio nam suscipit. At dignissimos sapiente iure dolorem. Autem occaecati amet voluptas accusantium blanditiis similique sunt.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-hover">
                                            <img src={require('../img/des.jpg')} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        <h4 className="mont text-capitalize">product supreme quality</h4>
                                        <p className="jost">Labore omnis sint totam maxime. Reprehenderit eaque consectetur consequuntur ullam consequuntur voluptatum. Eius voluptatem molestias rerum repellat quam.Eum aspernatur culpa sit saepe velit velit consequatur. Quia illo enim voluptas qui.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="img-card">
                                            <div className="img-hover">
                                                <img className="w-100" src={require('../img/hand1.jpg')} alt="" />
                                            </div>
                                            <h6 className="mont blk text-capitalize">information product</h6>
                                            <p className="jost">IFlexibile consilium: Design res ad usus multos et spatia apta, flexibilitatem et commodum usoribus afferens.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="img-card">
                                            <div className="img-hover">
                                                <img className="w-100" src={require('../img/hand2.jpg')} alt="" />
                                            </div>
                                            <h6 className="mont blk text-capitalize">fabricae material</h6>
                                            <p className="jost">SAlta durabilitas: alta qualitas materiae et processus fabricandi provectae utens productum habet longam restem et capacitatem bonam sustinens.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="img-card">
                                            <div className="img-hover">
                                                <img className="w-100" src={require('../img/hand1.jpg')} alt="" />
                                            </div>
                                            <h6 className="mont blk text-capitalize">instructiones</h6>
                                            <p className="jost">Facilis utendum est: User-amica interface et experientia consilium, simplex et facile ad intelligendum, adiuvans utentes utentes facto facili et commode.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "s&r" && (
                            <div className="row return">
                                <div className="col">
                                    <p>For all orders exceeding a value of 100USD shipping is offered for free.</p>
                                    <p>Returns will be accepted for up to 10 days of Customer’s receipt or tracking number on unworn items. You, as a Customer, are obliged to inform us via email before you return the item.</p>
                                    <p>Otherwise, standard shipping charges apply. Check out our delivery <span>Terms & Conditions</span> for more details.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="sec-3 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="text-capitalize mont blk">you might also like</h2>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <Slider {...settings}>
                                    {pick.map((pick, index) => (
                                        <div key={index} className="animate__animated animate__backInUp">
                                            <Slidertop images={pick.images} />
                                            <div className="img-des text-center">
                                                <h6 className="mont blk">{pick.title}</h6>
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

            </div>
        </>
    );
};

export default Product;
