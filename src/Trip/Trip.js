import React from 'react';
import './Trip.css'
const Trip = () => {
    return (
        <div class="mx-auto room-banner" >
            <div data-aos="fade-left" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true">
                <h5 className='here'>HERE TO</h5>
                <h1 className='expere'>unleash </h1>
                <div className='d-flex justify-content-between '>
                    <h6 className='txt pt-2'>KICK YOUR FEET UP AND STAY FOR AWHILE.</h6>     
                </div>
              </div>
<main class="page-content pt-5">
  <div class="card">
    <div class="content">
      <h2 class="title">POOLS</h2>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button class="btn6">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">CABANAS</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn6">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">THE SPA AT TRAVAGO</h2>
      <p class="copy">It's the desert you've always dreamed of</p>
      <button class="btn6">Book Now</button>
    </div>
  </div>

</main>
            

        </div>


        

    );
};

export default Trip;