import React from 'react';

import Navbar from '@/components/Home-En/Navbar';
import Banner from '@/components/Home-En/Banner';
import About from '@/components/Home-En/About';
import Features from '@/components/Home-En/Features';
import Services from '@/components/Home-En/Services';
import Techstacks from '@/components/Home-En/TechStack';
import Pricing from '@/components/Home-En/Pricing';
import Clients from '@/components/Home-En/Clients';
import Portofolio from '@/components/Home-En/Portofolio';
import Feedbacks from '@/components/Home-En/Feedbacks';
import Footer from '@/components/Home-En/Footer';

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