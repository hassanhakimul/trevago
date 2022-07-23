import React from 'react';
import './Header.css'
import logo from '../images/icon1.png'
const Header = () => {
    return (
     
            <nav class="navbar navbar-expand-lg navbar-light nav ">
                <div class="container-fluid"><img src={logo} height="150px" width="150px" /> <a class="navbar-brand name" href="#">TREVA<span class="go">Go</span></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#"><span class="home">STAY</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" href="#">CASINO</a> </li>
                            <li class="nav-item"> <a class="nav-link" href="#">SEE & DO</a> </li>
                            <li class="nav-item"> <a id='a-color' class="nav-link  " href="#">ENTERTAINMENT</a> </li>
                            <li class="nav-item"> <a class="nav-link " href="#">EAT $ DRINKS</a> </li>
                            <li class="nav-item"> <a class="nav-link" href="#">OFFERS</a> </li>
                        </ul>
                        <div class="btn btn-dark " title="BOOK NOW"> BOOK NOW</div>
                    </div>
                </div>

            </nav>
           
    );
};

export default Header;