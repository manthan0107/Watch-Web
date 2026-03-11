import { useEffect, useState } from "react";
import axios from "axios";
import Bg from "../Components/Bg";
import Header from "../Components/Header";
import Slidertop from "../Components/Slidertop";
import "animate.css";
import AOS from "aos";

import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const Shop = () => {
    const titleData = { name: "Gold - Edition", path: "Shop" };

    const [products, setProducts] = useState([]);   // instead of hardcoded "pick"
    const [cat, catval] = useState();
    const [priceRange, setPriceRange] = useState([0, 200]);

    const handleRangeChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) return;

        const minDistance = 5;
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setPriceRange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setPriceRange([clamped - minDistance, clamped]);
            }
        } else {
            setPriceRange(newValue);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    // Fetch products from backend
    useEffect(() => {
        axios
            .get("http://localhost:9000/get-products") // backend API
            .then((res) => {
                console.log("Products from backend:", res.data);
                setProducts(res.data.products || res.data); // handle both cases
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }, []);

    return (
        <div className="shop">
            <Header />
            <Bg title={titleData.name} path={titleData.path} />

            <div className="category">
                <div className="container">
                    <div className="row r1 mb-3">
                        <div className="col-12 d-flex justify-content-between">
                            <h6 className="mont text-uppercase">categories</h6>
                            <select
                                name="category"
                                onChange={(e) => {
                                    catval(e.target.value);
                                }}
                                className="text-capitalize jost"
                            >
                                <option value="feature">feature</option>
                                <option value="bestsale">best sale</option>
                                <option value="az">A - Z</option>
                                <option value="za">Z - A</option>
                                <option value="lh">low to high</option>
                                <option value="hl">high to low</option>
                                <option value="on">old to new</option>
                                <option value="no">new to old</option>
                            </select>
                        </div>
                    </div>
                    <div className="row r2">
                        <div className="col-3">
                            <div className="sidebar jost">
                                <div className="filter-1">
                                    <ul className="text-capitalize">
                                        <li>modern watches</li>
                                        <li>vintage edition</li>
                                        <li>classic collection</li>
                                        <li>bold watches</li>
                                        <li>luxury line</li>
                                        <li>retro timepieces</li>
                                        <li>sport edition</li>
                                        <li>military series</li>
                                        <li>men's watches</li>
                                        <li>unisex line</li>
                                    </ul>
                                </div>
                                <div className="filter-2">
                                    <h6 className="mont text-uppercase my-5">price</h6>
                                    <Box sx={{ width: 200 }}>
                                        <Slider
                                            value={priceRange}
                                            onChange={handleRangeChange}
                                            valueLabelDisplay="auto"
                                            min={0}
                                            max={200}
                                            disableSwap
                                        />
                                        <div className="d-flex justify-content-between">
                                            <small>${priceRange[0]}</small>
                                            <small>${priceRange[1]}</small>
                                        </div>
                                    </Box>
                                </div>
                                <div className="filter-3">
                                    <h6 className="mont text-uppercase my-5">tags</h6>
                                    <ul className="jost text-capitalize">
                                        <li>hot</li>
                                        <li>innovation</li>
                                        <li>lifestyle</li>
                                        <li>quality</li>
                                        <li>solutions</li>
                                        <li>sustainability</li>
                                    </ul>
                                </div>
                                <div className="filter-4">
                                    <h6 className="mont text-uppercase my-5">brands</h6>
                                    <ul className="jost text-capitalize">
                                        <li>EcoSphere</li>
                                        <li>HorizonEdge</li>
                                        <li>LuxeVibe</li>
                                        <li>NovaCrest</li>
                                        <li>TrueHaven</li>
                                        <li>VertexCore</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ✅ Show products from backend */}
                        <div className="col-9">
                            <div className="row">
                                {products
                                    .filter(
                                        (item) =>
                                            item.price >= priceRange[0] &&
                                            item.price <= priceRange[1]
                                    )
                                    .map((item, index) => (
                                        <div
                                            key={index}
                                            className="col-md-4 col-sm-6 mb-4"
                                            data-aos="fade-up"
                                        >
                                            <div className="animate__animated animate__backInUp">
                                                <Slidertop
                                                    images={[
                                                        {
                                                            image: `http://localhost:9000/uploads/${item.image}`
                                                        }
                                                    ]}
                                                />
                                                <div className="img-des text-center">
                                                    <h6 className="mont">{item.title}</h6>
                                                    <span className="jost">
                                                        ${item.price?.toFixed(2)}{" "}
                                                        <del>${item.oldPrice?.toFixed(2)}</del>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
