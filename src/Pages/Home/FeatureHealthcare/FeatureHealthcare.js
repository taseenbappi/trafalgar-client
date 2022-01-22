import React from 'react';
import healcare from "../../../images/healthcare.svg";
import './FeatureHealthcare.css';

const FeatureHealthcare = () => {
    return (
        <div className='container-fluid py-5'>
            <div className="row container mx-auto d-flex justify-content-center align-items-center text-start">

                <div className="col-12 col-sm-12 col-md-6 col-lg-7 p-3">
                    <img src={healcare} alt="" className='img-fluid p-5' />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-5">
                    <h1 className='featureHealcare-title'>Leading healthcare providers</h1>
                    <hr className='horizontal-bar-1' />
                    <p className='featureHealcare-details-txt'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
                        in the solutions we deliver</p>
                    <button className='learn-more-btn'>Learn more</button>
                </div>

            </div>

        </div>
    );
};

export default FeatureHealthcare;