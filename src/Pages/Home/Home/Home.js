import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import FeatureApp from '../FeatureApp/FeatureApp';
import FeatureHealthcare from '../FeatureHealthcare/FeatureHealthcare';
import LatestArticle from '../LatestArticle/LatestArticle';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <FeatureHealthcare></FeatureHealthcare>
            <FeatureApp></FeatureApp>
            <LatestArticle></LatestArticle>
            <Testimonials></Testimonials>
            <Footer></Footer>

        </div>
    );
};

export default Home;