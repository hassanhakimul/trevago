import React from 'react';
import './Entertaiment.css'
const Entertainment = () => {
    return (
        <div class="mx-auto room-banner" >
            <div>
                <h5 className='here'>HERE TO</h5>
                <h1 className='expere'>find new paths</h1>
                <div className='d-flex justify-content-between '>
                    <h6 className='txt pt-2'>JOIN OUR FAMILY TO LEARN ABOUT US.</h6>
                </div>
            </div>
            <div className='news-div'  data-aos="fade-up" data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true">
            <div class="news-card"> <h3>Our Newsletter</h3>
                <form onclick="return false;">
                    <div class="inputbox">
                        <input type="text" name="name" class="form-control" required="required" /> <span>Full Name</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" name="name" class="form-control" required="required" /> <span>Email</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" name="name" class="form-control" required="required" /> <span>Phone</span>
                    </div>
                    <button class="btn btn-danger btn-block">SUBSCRIBE</button>
                </form>
            </div>

        </div>

        </div>
    );
};

export default Entertainment;