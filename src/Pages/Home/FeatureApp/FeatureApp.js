import React from 'react';
import featureApp from "../../../images/feature-app.svg";
import { FaArrowDown } from "react-icons/fa";
const FeatureApp = () => {
    return (
        <div className='container-fluid py-5' id='apps'>
            <div className="row container mx-auto d-flex justify-content-center align-items-center text-start">


                <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-5">
                    <h1 className='featureHealcare-title'>Download our
                        mobile apps</h1>
                    <hr className='horizontal-bar-1' />
                    <p className='featureHealcare-details-txt'>Our dedicated patient engagement app and
                        web portal allow you to access information instantaneously (no tedeous form, long calls,
                        or administrative hassle) and securely</p>
                    <button className='learn-more-btn'>Download <FaArrowDown></FaArrowDown></button>
                </div>


                <div className="col-12 col-sm-12 col-md-6 col-lg-7 p-3">
                    <img src={featureApp} alt="" className='img-fluid p-5' />
                </div>

            </div>

        </div>
    );
};

export default FeatureApp;