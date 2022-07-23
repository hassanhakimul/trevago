import React from 'react';
import './RoomBanner.css'
import { ImArrowRight2 } from "react-icons/im";
const RoomBanner = () => {
    return (
        <div class="mx-auto room-banner" >
            <div className=''>
                <h5 className='here'>HERE TO</h5>
                <h1 className='expere'>experience</h1>
                <div className='d-flex justify-content-between '>
                    <h6 className='txt pt-2'>LET'S ENJOY YOUR MOMENT</h6>
                    <button data-aos="fade-right" data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        className='button'>UPCOMING ENTERTAINMENT <ImArrowRight2 /></button>
                </div>

                <hr />

                <div className='img-div' style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1577382144834-8a80d92b925c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '91vw',
                    height: '91vh'
                }}>
                    <div className='btn-padding'>
                        <button className='btn ' >BUY TICKETS</button>
                    </div>


                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col mt-5 img-div" style={{
                    backgroundImage: `url("https://media.istockphoto.com/photos/rock-band-playing-at-a-nightclub-picture-id1129172065?k=20&m=1129172065&s=612x612&w=0&h=zaucYTE2aGg3fOwH8gcPdDnxk3JiwXLPnR6kC6CeDxE=")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '91vw',
                    height: '91vh'
                }}>
                      <div className='entertainment-div'>
                      <h2 className='entertainment-header'>LIVE ENTERTAINMENT</h2>
                        <h5 className='mt-4 mabel'>MABEL’S BBQ</h5>
                        <div className='text-light mt-4'>
                        <p className='div-p'>FRIDAY & SATURDAY</p>
                        <p className='div-p'>7PM – 10PM</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                        <div className='row ms-4 mt-5 img-div ' style={{
                    backgroundImage: `url("https://media.istockphoto.com/vectors/abstract-digital-modern-alphabet-fonts-typography-technology-dance-vector-id1167128150?k=20&m=1167128150&s=612x612&w=0&h=MC7k4A9g2BIMoDevqlXX1zLfrCDKUmQLYhe8kIT3S8E=")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '44vw',
                    height: '44vh'
                }}>
                    row
                
                </div>

                <div className='row ms-4 mt-4 ' style={{
                    backgroundImage: `url("https://media.istockphoto.com/photos/international-jazz-day-and-world-jazz-festival-saxophone-music-by-picture-id1058181964?k=20&m=1058181964&s=612x612&w=0&h=8CeiM2H4XIMrtUc6rfWheCetL_9Gz7zpvalU8NphBCs=")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '44vw',
                    height: '43vh'
                }}>
               <div className='second-div'>
                      <h2 className='entertainment-header'>LIVE ENTERTAINMENT</h2>
                        <h5 className='mt-4 mabel'>MJ JILIBIN</h5>
                        <div className='text-light mt-4'>
                        <p  className='div-p'>TUE & STA</p>
                        
                        </div>
                      </div>
                
                </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default RoomBanner;