import React from 'react';
import './Stay.css'
const Stay = () => {
    return (
        <div class="mx-auto room-banner" >
            <div className=''>
                <div data-aos="fade-left" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true">
                    <h5 className='here'>HERE TO</h5>
                    <h1 className='expere'>STAY</h1>
                    <div className='d-flex justify-content-between '>
                        <h6 className='txt pt-2'>A PLACE TO LAY YOUR HEAD OR TO LIVE OUT YOUR PENTHOUSE DREAMS.<br />
                            SLEEPING, OPTIONAL.</h6>
                    </div>
                </div>

                <div className='mt-5' style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '95vw',
                    height: '100vh', opacity: '0.9'
                }}>
                    <div className='d-flex justify-content-between '>
                        <div>
                            <span class="vertical " style={{ marginTop: '-39px' }} ></span>
                        </div>
                        <div className='d-flex '>
                            <span className='room-span'>ROOMS & SUITS</span>
                            <span className='room-span' >PENTHOUSE</span>
                            <span className='room-span'  style={{color:'#64542E'}}>COUPLE SUITS</span>
                            <span className='room-span'>SKY VILLA</span>
                        </div>
                    </div>

                    <div className='stay-div'>
                        <h1 className='stay-header'>ROOMS & SUITS</h1>
                        <h4 className='txt2'>Everything you need here feel like home</h4>
                        <button className='button2 mt-2'>VIEW SIGNATURE ROOM</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Stay;