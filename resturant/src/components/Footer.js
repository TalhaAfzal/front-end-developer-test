import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'


function Footer(){
    return(
        <Container fluid>
            <Row>
                <Col lg={3} sm={6} className='mt-4 ps-0'>
                    <p className="fw-bold">Unsplash</p>
                    <p>Beautiful, free images gifted by the world’s most generous community of photographers. Better than any royalty free or stock photos.</p>
                    <p className="mb-2 text-secondary">About</p>
                    <p className="mb-2 text-secondary">Blog</p>
                    <p className="mb-2 text-secondary">Community</p>
                    <p className="mb-2 text-secondary">Join the team</p>
                    <p className="mb-2 text-secondary">Developers/API</p>
                    <p className="mb-2 text-secondary">Press</p>
                    <p className="mb-2 text-secondary">Help Center</p>
                </Col>

                <Col lg={3} sm={6} className='mt-4'>
                    <p className="fw-bold">Product</p>
                     <p className="mb-2 text-secondary">Explore</p>
                    <p className="mb-2 text-secondary">Unsplash Awards</p>
                    <p className="mb-2 text-secondary">Unsplash for Education</p>
                    <p className="mb-2 text-secondary">Unsplash for iOS</p>
                    <p className="mb-2 text-secondary">Apps & Plugins</p>
                </Col>

                <Col lg={3} sm={6} className='mt-4'>
                    <p className="fw-bold">Popular</p>
                     <p className="mb-2 text-secondary">Backgrounds</p>
                     <p className="mb-2 text-secondary">Free Images</p>
                     <p className="mb-2 text-secondary">Free Stock Photos</p>
                     <p className="mb-2 text-secondary">Happy Birthday Images</p>
                     <p className="mb-2 text-secondary">Cool Photos</p>
                     <p className="mb-2 text-secondary">Nature Pictures</p>
                     <p className="mb-2 text-secondary">Black Backgrounds</p>
                     <p className="mb-2 text-secondary">White Backgrounds</p>
                     <p className="mb-2 text-secondary">Textures</p>
                     <p className="mb-2 text-secondary">Desktop Backgrounds</p>
                </Col>

                <Col lg={3} sm={6} className='mt-4'>
                    <p className="fw-bold">Wallpapers</p>
                    <p className="mb-2 text-secondary">HD Wallpapers</p>
                    <p className="mb-2 text-secondary">4k Wallpapers</p>
                    <p className="mb-2 text-secondary">iPhone Wallpapers</p>
                    <p className="mb-2 text-secondary">Cool Wallpapers</p>
                    <p className="mb-2 text-secondary">Cute Wallpapers</p>
                    <p className="mb-2 text-secondary">Live Wallpapers</p>
                    <p className="mb-2 text-secondary">PC Wallpapers</p>
                    <p className="mb-2 text-secondary">Black Wallpapers</p>
                    <p className="mb-2 text-secondary">iPad Wallpapers</p>
                    <p className="mb-2 text-secondary">Desktop Wallpapers</p>
                </Col>
            </Row>


            <Row className='mb-4'>
                <hr className='mt-5'></hr>
                <Col lg={6} className='ps-0'>
                    <div className="d-flex">
                        
                    <p className="text-secondary ">Privacy Policy</p>
                    <p className="text-secondary ms-4">Terms</p>
                    <p className="text-secondary ms-4">Security</p>
                    </div>
                </Col>

                <Col lg={6} className='text-end'>
                    <FaTwitter size="1.5em" className='ms-3 text-secondary'/>
                    <FaFacebook size="1.5em" className='ms-3 text-secondary'/>
                    <FaInstagram size="1.5em" className='ms-3 text-secondary'/>
                </Col>
            </Row>
        </Container>
    )
}


export default Footer