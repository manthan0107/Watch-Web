import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider1 = () => {

    return (
        <div className="slider">
            <Carousel fade interval={3000} controls={false} indicators={true}>
                <Carousel.Item>
                    <div className="slide slide-1">
                        <div className="bg-img"></div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-12 col-md-9 col-lg-7 content text-center">
                                <h6 className='text-uppercase mont animate__animated animate__fadeInUp'>up to 50% off</h6>
                                <h1 className='text-uppercase mont mt-3 animate__animated animate__fadeInUp'>power chrome spinlock dumbbell weight</h1>
                                <button className='text-uppercase jost animate__animated animate__fadeInUp'></button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide slide-2">
                        <div className="bg-img"></div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-12 col-md-9 col-lg-7 content text-center">
                                <h6 className='tetx-uppercase mont animate__animated animate__fadeInUp'>up to 50% off</h6>
                                <h1 className='text-uppercase mont mt-3 animate__animated animate__fadeInUp'>scrunched lifting contour high waist leggings</h1>
                                <button className='text-uppercase jost animate__animated animate__fadeInUp'></button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider1;