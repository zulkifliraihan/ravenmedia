import React from 'react';

import Navbar from '@/components/Home-Indo/Navbar';
import Banner from '@/components/Home-Indo/Banner';
import About from '@/components/Home-Indo/About';
import Features from '@/components/Home-Indo/Features';
import Services from '@/components/Home-Indo/Services';
import Techstacks from '@/components/Home-Indo/TechStack';
import Pricing from '@/components/Home-Indo/Pricing';
import Clients from '@/components/Home-Indo/Clients';
import Portofolio from '@/components/Home-Indo/Portofolio';
import Feedbacks from '@/components/Home-Indo/Feedbacks';
import Footer from '@/components/Home-Indo/Footer';

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

            <Pricing />

            <Portofolio />

            {/* <Feedbacks /> */}

            <Footer />
        </>
    )
}

export default IndexPage;