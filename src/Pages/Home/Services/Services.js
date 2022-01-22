import React from 'react';
import './Services.css';
import search from "../../../images/search.svg";
import pharmacy from "../../../images/pharmacy.svg";
import consultation from "../../../images/consultation.svg";
import device_info from "../../../images/device-info.svg";
import emergency from "../../../images/emergency.svg";
import tracking from "../../../images/tracking.svg";

const Services = () => {
    return (
        <div className='container-fluid py-5' id='service'>

            <h1 className='section-title'>Our services</h1>
            <hr className='horizontal-bar' />
            <p className='service-details-txt'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br /> with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto py-3">
                <div className="col">
                    <div className="h-100 service-card text-start">
                        <img src={search} className="img-fluid p-2" alt="..." width="91.98" height="90" />
                        <div className="card-body">
                            <h5 className="service-card-title">Search doctor</h5>
                            <p className="service-card-details-txt">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="h-100 service-card text-start">
                        <img src={pharmacy} className="img-fluid p-2" alt="..." width="91.98" height="90" />
                        <div className="card-body">
                            <h5 className="service-card-title">Online pharmacy</h5>
                            <p className="service-card-details-txt">Buy  your medicines with our mobile application with a simple delivery system</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="h-100 service-card text-start">
                        <img src={consultation} className="img-fluid p-2" alt="..." width="91.98" height="90" />
                        <div className="card-body">
                            <h5 className="service-card-title">Consultation</h5>
                            <p className="service-card-details-txt">Free consultation with our trusted doctors and get the best recomendations</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="h-100 service-card text-start">
                        <img src={device_info} className="img-fluid p-2" alt="..." width="91.98" height="90" />
                        <div className="card-body">
                            <h5 className="service-card-title">Details info</h5>
                            <p className="service-card-details-txt">Free consultation with our trusted doctors and get the best recomendations</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="h-100 service-card text-start">
                        <img src={emergency} className="img-fluid p-2" alt="..." width="91.98" height="90" />
                        <div className="card-body">
                            <h5 className="service-card-title">Emergency care</h5>
                            <p className="service-card-details-txt">You can get 24/7 urgent care for yourself or your children and your
                                lovely family</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="h-100 service-card text-start">
                        <img src={tracking} className="img-fluid p-2" alt="..." width="91.98" height="90" />
                        <div className="card-body">
                            <h5 className="service-card-title">Tracking</h5>
                            <p className="service-card-details-txt">Track and save your medical history and health data </p>
                        </div>
                    </div>
                </div>



            </div>

            <button className='learn-more-btn'>Learn more</button>

        </div>
    );
};

export default Services;