import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

// import Background from './imgs/apple.jpg';

import ProductSlider from './ProductSlider';

import Footer from "./Footer";



function Home() {

    // const url = 'https://demo2.meals4u.net/fe/api.test.php'
    // const [categoryname, setCategoryName] = useState(null)

    // useEffect(() => {
    //     axios.get(url)
    //         .then(response => {
    //             setCategoryName(response.data.categories)
    //             console.log("responce =============",response.data.categories)
    //         })
    // }, [url])
 
    return (




        <Container fluid>
            <Row>

                


                <Col lg={7} md={8} sm={12} className='mt-5'>
                    <div className='d-flex'>
                        <p>Explore › &nbsp; </p>
                        <p>Images ›	&nbsp; </p>
                        <p>Food</p>
                    </div>
                    <h1 className='fw-bold'>Food images & pictures</h1>
                    <p className='pe-lg-5'>Stunningly delicious street food, magnificent banquets, quiet family dinners: each is beautiful in it's own right. Unsplash captures that beauty, and lets you choose from a curated selection of the finest food images on the web (and always free).</p>
                    <Button variant='light' className='text-secondary font_12 py-1 shadow-none'>Nature Images</Button>
                    <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Apps Images & Photos</Button>
                    <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Stock Photos & Images</Button>
                    <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Food Backgrounds</Button>
                    <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Religion Images</Button>
                </Col>
            </Row>

            <Row>
                <h5 className='fw-bold mt-5'>Popular categories</h5>

                <ProductSlider />
            </Row>



            <Row>
                <Col>
                    <div>
                        <h5 className='fw-bold mt-5'>Download free food images</h5>
                    </div>
                </Col>


            </Row>

            <Row>
                <Col lg={4} sm={6}>
                    <div>
                        <img src="img/img1.jpg" className="w-100 mt-3" />

                        <img src="img/img4.jpg" className="w-100 mt-5" />

                        <img src="img/img7.jpg" className="w-100 mt-5" />


                    </div>
                </Col>

                <Col lg={4}>
                    <div>
                        <img src="img/img2.jpg" className="w-100 mt-3" />
                        <div className="mt-2">
                            <Button variant='light' className='text-secondary font_12 py-1 shadow-none'>Kebab</Button>
                            <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Grilled Chicken
                            </Button>
                            <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Meat</Button>
                        </div>


                        <img src="img/img5.jpg" className="w-100 mt-5" />


                    </div>
                </Col>

                <Col lg={4}>
                    <div>
                        <img src="img/img3.jpg" className="w-100 mt-3" />
                        <div className="mt-2">
                            <Button variant='light' className='text-secondary font_12 py-1 shadow-none'>Soy</Button>
                            <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Salad</Button>
                            <Button variant='light' className='text-secondary font_12 py-1 shadow-none ms-2'>Eggs</Button>
                        </div>





                        <div>
                            <img src="img/img6.jpg" className="w-100 mt-5" />
                            <Button variant='light' className='text-secondary font_12 py-1 shadow-none mt-2'>Pizza Image</Button>
                        </div>

                        <img src="img/img8.jpg" className="w-100 mt-5" />


                    </div>
                </Col>
            </Row>


            <Row>
                <Col className='text-center my-4'>
                    <Button variant='outline-secondary shadow-none'>Load More Photos</Button>
                </Col>
            </Row>


            <Row>
                <Col className='my-4'>
                    <h6 className="fw-bold">Browse premium images on iStock | <span className="fw-normal">20% off at iStock</span></h6>
                </Col>
            </Row>

            <Footer />
        </Container>




    )
}

export default Home