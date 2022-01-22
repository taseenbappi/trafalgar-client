import React from 'react';
import './LatestArticle.css';
import facial_skin from "../../../images/facial-skin.svg";
import herbal from "../../../images/harbal-medicine.svg";
import disease from "../../../images/disease.svg";
import { FaArrowRight } from "react-icons/fa";

const LatestArticle = () => {
    return (
        <div className='container-fluid py-5'>
            <h1 className='section-title'>Check out our latest article</h1>
            <hr className='horizontal-bar' />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto py-5">
                <div className="col">
                    <div className="h-100 article-card text-start">
                        <img src={disease} className="img-fluid p-2" alt="..." width="350" height="240" />
                        <div className="card-body">
                            <h5 className="article-card-title">Disease detection, check
                                up in the laboratory</h5>
                            <p className="article-card-details-txt">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>

                            <button className='read-more-card-btn'>Read more <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="h-100 article-card text-start">
                        <img src={herbal} className="img-fluid p-2" alt="..." width="350" height="240" />
                        <div className="card-body">
                            <h5 className="article-card-title">Herbal medicines that are
                                safe for consumption</h5>
                            <p className="article-card-details-txt">Buy  your medicines with our mobile application with a simple delivery system</p>
                            <button className='read-more-card-btn'>Read more <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="h-100 article-card text-start">
                        <img src={facial_skin} className="img-fluid p-2" alt="..." width="350" height="240" />
                        <div className="card-body">
                            <h5 className="article-card-title">Natural care for healthy
                                facial skin</h5>
                            <p className="article-card-details-txt">Free consultation with our trusted doctors and get the best recomendations</p>
                            <button className='read-more-card-btn'>Read more <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>

            </div>

            <button className='learn-more-btn'>View All</button>

        </div>
    );
};

export default LatestArticle;