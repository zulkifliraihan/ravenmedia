import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area ptb-100 bg-F7F7FF" id="service">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Bagaimana Kami Membantu Anda?</span>
                        <h2 className="title-features">Layanan Kami</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>App Development</h3>
                                <p>
                                    Kami berpengalaman dalam pembuatan aplikasi mobile
                                    untuk IOS dan Android, dan kami siap dengan ide-ide anda.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg2">
                                    <i className="ri-global-line"></i>
                                </div>
                                <h3>Web Development</h3>
                                <p>
                                    Digitalisasikan bisnis perusahaan anda dan kembangkan bisnis anda lebih jauh bersama kami.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg3">
                                    <i className="ri-shopping-cart-line"></i>
                                </div>
                                <h3>E - Commerce</h3>
                                <p>
                                    Mengatasi keterbatasan geografis dan menjangkau pelanggan potensial baru dengan biaya lebih rendah.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg4">
                                    <i className="ri-brush-line"></i>
                                </div>
                                <h3>UI / UX Design</h3>
                                <p>
                                    Bimbing mereka melalui pengalaman pengguna yang mulus dengan antarmuka yang luar biasa.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg5">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>
                                    Kami akan membantu anda meningkatkan traffic audiens dan penjualan anda yang lebih luas.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;