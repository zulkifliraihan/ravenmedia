import React from 'react';

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

            <Footer />
        </>
    )
}

export default IndexPage;