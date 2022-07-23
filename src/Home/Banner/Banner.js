import React from 'react';
import './Banner.css'

const Banner = () => {
   
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active carosel" style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh'
                }}>
                    <div className='ban-div ' data-aos="fade-up" data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true">
                        <div class=" label-div" >
                            <div class="card-header  pt-3 ps-5 up-heading">
                                MAKE YOUR TRIP
                            </div>
                            <div class="card-body">
                                <h5 class="card-title  heading">memorable</h5>
                                <p class="card-text  paragraph pt-3 ps-5 pb-3">GET THE BEST OFFERS </p>
                            </div>
                        </div>

                        {/* <div class=" ban-btn mt-5 btn-dark" >VIEW OFFER</div> */}

                    </div>
                </div>
                <div class="carousel-item carosel " style={{
                    backgroundImage: `url("https://www.palms.com/wp-content/uploads/2020/03/PremierRoomQ2019-scaled-e1585243180710.jpg")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh'
                }}>

                    <div className='ban-div ' >
                        <div class=" label-div" >
                            <div class="card-header  pt-3 ps-5 up-heading">
                                SERVING UP WHAT YOU ARE
                            </div>
                            <div class="card-body">
                                <h5 class="card-title  heading">CRAVING</h5>
                                <p class="card-text  paragraph pt-3 ps-5 pb-3">GET THE BEST OFFERS </p>
                            </div>
                        </div>

                        {/* <div class=" ban-btn mt-5 btn-dark" >VIEW OFFER</div> */}

                    </div>
                </div>
                <div class="carousel-item carosel" style={{
                    backgroundImage: `url("https://www.palms.com/wp-content/uploads/2022/04/Casino_Floor_Final-1-1.jpg")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh'
                }}>
                    <div className='ban-div'>
                        <div class=" label-div" >
                            <div class="card-header  pt-3 ps-5 up-heading">
                                BEST GAMING EXPERIENCE
                            </div>
                            <div class="card-body">
                                <h5 class="card-title  heading">promotions</h5>
                                <p class="card-text  paragraph pt-3 ps-5 pb-3">GET THE BEST OFFERS </p>
                            </div>
                        </div>

                        {/* <div class=" ban-btn mt-5 btn-dark" >VIEW OFFER</div> */}

                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon icon-color" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;