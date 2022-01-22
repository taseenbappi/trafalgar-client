import React from 'react';
import './Banner.css';
import banner from '../../../images/banner.svg';

const Banner = () => {
    return (
        <div className='container-fluid py-5'>
            <div className="row container mx-auto d-flex justify-content-center align-items-center text-start">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <h1 className='banner-title'>Virtual healthcare <br />for you</h1>
                    <p className='banner-details-txt'>Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online
                        for everyone</p>
                    <button className='consult-btn'>Consult today</button>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src={banner} alt="" className='img-fluid p-2' />
                </div>
            </div>

        </div>
    );
};

export default Banner;