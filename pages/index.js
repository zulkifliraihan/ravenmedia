import React from 'react';
// import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
// import NavbarStyleThree from '@/components/_App/NavbarStyleThree';
import Navbar from '@/components/Home/Navbar';
import Banner from '@/components/Home/Banner';
import About from '@/components/Home/About';
import Features from '@/components/Home/Features';
import Services from '@/components/Home/Services';
import Techstacks from '@/components/Home/TechStack';
import Pricing from '@/components/Home/Pricing';
import Clients from '@/components/Home/Clients';
import Portofolio from '@/components/Home/Portofolio';
import Feedbacks from '@/components/Home/Feedbacks';
import Footer from '@/components/Home/Footer';

import BestAppEver from '@/components/HomeDemo1/BestAppEver';
import AppProgressStyle1 from '@/components/Common/AppProgressStyle1';
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1';
import AppScreenshotsStyle1 from '@/components/AppScreenshots/AppScreenshotsStyle1';
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations';
import PricingPlanStyle1 from '@/components/PricingPlan/PricingPlanStyle1';
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1';
import FreeTrialStyle1 from '@/components/Common/FreeTrialStyle1';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
 
const IndexPage = () => {
    return (
        <>
            <Navbar />

            <Banner />

            <Techstacks />
    
            <About />

            <Features />

            <Services />
            
            <Clients />

            <Portofolio />

            <Pricing />

            <Feedbacks />



            <AppProgressStyle1 />

            <SoftwareIntegrations />

            <FreeTrialStyle1 />

            <Footer />
        </>
    )
}

export default IndexPage;