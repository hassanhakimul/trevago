import React from 'react';
import './Discover.css'
const Discover = () => {
    return (
        <div class="discover" >
        <div className='div-bg'>
          <div className=''>
          <div  className='discover-div' data-aos="zoom-out-up"  data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true" >
           <h5 className='here'>HERE TO</h5>
            <h1 className='expere'>discover</h1>
            <div className='d-flex justify-content-between '>
                <h6 className='txt pt-2'>ENTICE ALL THE SENSES.</h6>
            </div>
           </div>
          </div>

            <div className='mt-5' style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1605270012917-bf157c5a9541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh', opacity: '0.9'
            }}>
                <div className='d-flex justify-content-between '>
                    <div>
                        <span class="vertical " style={{ marginTop: '-39px' }} ></span>
                    </div>
                    <div className='d-flex '>
                       <span className='room-span'>DINE</span>
                       <span className='room-span' style={{color:'#64542E'}}>SIP</span>
                       <span className='room-span'>SHOP</span>
                       <span className='room-span'>ART VILLA</span>
                    </div>
                </div>

                <div className='stay-div'>
                            <h1 className='stay-header'>SIP</h1>
                            <h4 className='txt2'>TOAST THE GOOD TIME WITH US</h4>
                            <button className='button2 mt-3'>RAISE A GLASS</button>
                        </div>
            </div>
        </div>

    </div>
    );
};

export default Discover;