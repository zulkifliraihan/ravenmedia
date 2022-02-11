import React from 'react';

const Features = () => {
    return (
        <>
            <div className="features-area pt-50 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>
                                    Didesain sebaik mungkin untuk kemudahan user dari segi tampilan maupun experience 
                                    dan tentu saja SEO Friendly.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg2">
                                    <i className="ri-24-hours-line"></i>
                                </div>
                                <h3>24 Hours Support</h3>
                                <p>
                                    Tim Profesional Ravenmedia selalu siap membantu setiap kendala yang dialami 
                                    ataupun konsultasi 
                                    melalui e-mail, telp, dan chat.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg3">
                                    <i className="ri-fingerprint-line"></i>
                                </div>
                                <h3>Security Protected</h3>
                                <p>
                                    Keamanan aplikasi selalu menjadi prioritas kami dengan mengupayakan segala yang terbaik untuk Keamanan sebuah aplikasi.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg4">
                                    <i className="ri-vip-diamond-line"></i>
                                </div>
                                <h3>Tech Stack</h3>
                                <p>
                                    Kami memberikan garansi pada website, jika ada terkendala pada aplikasi kami siap melakukan perbaikan secara Gratis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;