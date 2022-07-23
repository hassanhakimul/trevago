import React from 'react';

const Play = () => {
    return (
        <div class="discover" >
        <div className='div-bg'>
          <div className=''>
          <div  className='discover-div'  data-aos="zoom-out-up"  data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true" >
           <h5 className='here'>HERE TO</h5>
            <h1 className='expere'>PLAY</h1>
            <div className='d-flex justify-content-between '>
                <h6 className='txt pt-2'>SPEND GOOD TIMES HERE.</h6>
            </div>
           </div>
          </div>

            <div className='mt-5' style={{
                backgroundImage: `url("https://media.istockphoto.com/photos/people-winning-at-the-casino-picture-id505441117?b=1&k=20&m=505441117&s=170667a&w=0&h=pMSfgqS5Yzit6dmQONemtBLxl6lMZ-hoH_gAJJKjj6A=")`, backgroundPosition: 'center',
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
                       <span className='room-span'>SLOTS</span>
                       <span className='room-span' style={{color:'#64542E'}}>TABLE GAMES</span>
                       <span className='room-span'>HIGH LIMIT ROOM</span>
                   
                    </div>
                </div>

                <div className='stay-div'>
                            <h1 className='stay-header'>SLOTS</h1>
                            <h4 className='txt2'>1000 WAYS TO GET YOUR LUCK.</h4>
                            <button className='button2 mt-3'>LET'S TAKE A SPIN</button>
                        </div>
            </div>
        </div>

    </div>
    );
};

export default Play;