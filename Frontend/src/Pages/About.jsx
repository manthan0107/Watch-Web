import Abtcard from "../Components/Abtcard";
import Bg from "../Components/Bg";
import Founder from "../Components/Founder";
import Header from "../Components/Header";
import Slider from "react-slick";
import News from "../Components/News";

const About = () => {

    const titleData = { name: "About Us", path: "About Us" };

    const bg = [
        {
            img: require('../img/svg1.png'),
            name: 'Design',
            para: 'Praesent metus tellus, elementum eu, semper vestibulum volutput pretium libero'
        },
        {
            img: require('../img/svg2.png'),
            name: 'Innovation',
            para: 'Praesent metus tellus, elementum eu, semper vestibulum volutput pretium libero'
        },
        {
            img: require('../img/svg3.png'),
            name: 'Journey',
            para: 'Praesent metus tellus, elementum eu, semper vestibulum volutput pretium libero'
        }
    ]

    const emp = [
        {
            name: 'Ferguson',
            post: 'Designer',
            img: require('../img/a1.jpg')
        },
        {
            name: 'Saga Noren',
            post: 'Developer',
            img: require('../img/a2.jpg')
        },
        {
            name: 'Karen Ryan',
            post: 'Developer',
            img: require('../img/a3.jpg')
        },
        {
            name: 'Adrian Stone',
            post: 'Ceo',
            img: require('../img/a4.jpg')
        }
    ]

    const bgsetting = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
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

    const empset = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
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

    return (
        <>
            <div className="about">
                <Header />

                <Bg title={titleData.name} path={titleData.path} />

                <div className="story">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 col-lg d-flex justify-content-center flex-column">
                                <h1 className="mont text-capitalize">our story</h1>
                                <div className="subject mt-3 text-uppercase jost">the high stress favourite</div>
                                <p className="jost mt-5">Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.</p>
                                <p className="jost">In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div className="col-12 col-lg">
                                <div className="img">
                                    <img src={require('../img/about1.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex flex-row-reverse">
                            <div className="col-12 col-lg d-flex justify-content-center flex-column">
                                <h1 className="mont text-capitalize">who we are ?</h1>
                                <div className="subject mt-3 text-uppercase jost">the high stress favourite</div>
                                <p className="jost mt-5">Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.</p>
                                <p className="jost">In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <div className="col-12 col-lg">
                                <div className="img">

                                    <img src={require('../img/about2.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-img ">
                    <div className="container">
                        <div className="row">
                            <Slider {...bgsetting}>
                                {
                                    bg.map((val) => (
                                        <div className="col-4 ff text-center">
                                            <Abtcard img={val.img} name={val.name} p={val.para} />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="emp">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h1 className="mont">Behind The Brands</h1>
                                <p className="jost">We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity and free-thinking fearlessness in everything that we do. We take immeasurable pride in our work, intentionally stitching love into the very fiber and fabric of our designs. We are small, but we are a mighty group of talented individuals dedicated to bringing you otherworldly designs with imagery to match.</p>
                            </div>
                        </div>
                        <div className="row">
                            <Slider {...empset}>
                                {
                                    emp.map((val) => (
                                        <div className="col-4 px-2">
                                            <Founder name={val.name} img={val.img} post={val.post} />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>

                <News />
            </div>
        </>
    )
}

export default About;