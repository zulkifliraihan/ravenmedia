import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="content">
                        <h1>
                            Jasa Pembuatan Website dengan riset yang mendalam menggunakan cara paling efektif dan efisien untuk mencapai Goal Marketing Anda!
                        </h1>

                        <Link href="/sign-in">
                            <a className="default-btn">Hubungi Sekarang</a>
                        </Link>

                        <img src="/images/banner/banner-app3.png" alt="image" />
                    </div>
                </div>

                <div className="divider"></div>

                {/* Shape Images */}
                <div className="banner-shape3">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape8">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
                <div className="banner-shape7">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;