import React from 'react';
import './Footer.css'
import { BsTelephoneFill,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialSkype } from "react-icons/ti";
const Footer = () => {
    return (
        <div className='footer-div'>
            <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
                <div class="row my-5 justify-content-center">

                </div>
                <footer >
                    <div class="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3 footer-row">
                        <div class="col-12">
                            <div class="row row-2">
                                <div class="col-sm-4 text-md-center ">
                                    <div className='d-flex  justify-content-center align-items-center'>
                                        <div className=''>
                                            <h5 className='footer-head'>
                                                <span> <i class="fa fa-firefox text-light" aria-hidden="true"></i></span><b> TREVAGO</b>
                                            </h5>
                                            <div>
                                                <span>Trevago Resort</span><br />
                                                <span>Gulshan road,Mirpur 10, Dhaka</span>
                                                <p className='mt-4 tele'><BsTelephoneFill /> 1-866-752-2236</p>
                                            </div>
                                        </div>
                                        <div style={{ marginRight: '140px' }}>
                                            <span class="footer-vertical " style={{ marginTop: '-39px' }} ></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-2  my-sm-0 mt-5"><ul class="list-unstyled">
                                    <li class="mt-0 li-head">DISCOVER</li>
                                    <li class="mt-0 ">Home</li>
                                    <li class="mt-0">About us</li>
                                    <li class="mt-0">Platform</li>
                                    <li>Help Center</li>

                                </ul>
                                </div>
                                <div class="col-sm-2  my-sm-0 mt-5"><ul class="list-unstyled">
                                    <li class="mt-0 li-head">ABOUT</li>
                                    <li class="mt-0">Customers</li>
                                    <li>Use Cases</li>
                                    <li> Services</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                <div class="col-sm-2  my-sm-0 mt-5"><ul class="list-unstyled">
                                    <li class="mt-0 li-head">HELP</li>
                                    <li class="mt-0">Company</li>
                                    <li>About</li>
                                    <li>Careers- </li>
                                </ul>
                                </div>
                                <div class="col-sm-2  my-sm-0 mt-5"><ul class="list-unstyled">

                                    <li class="mt-0 li-head">FOLLOW US</li>
                                    <span><BsInstagram className='me-4'/></span>
                                    <span className='me-4'><BsTwitter/></span>
                                    <span className='me-4'><FaFacebookF/></span>
                                    <span className='me-4'><BsYoutube/></span>
                                </ul>
                                </div>

                            </div>

                        </div>
                        <hr className='footer-hr w-75' />
                        <div>
                            <p className='text-center para'>Copyright © 2022 Trevago. All Rights Reserved.</p>
                        </div>
                    </div>

                </footer>

            </div>
        </div>
    );
};

export default Footer;