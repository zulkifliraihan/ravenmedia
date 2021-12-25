import React from 'react';
import Link from 'next/link'

const Pricing = () => {
    return (
        <>

            <div className="pricing-area bg-black-color pt-100 pb-75">
                <div className="container">
                    <div className="section-title color-white">
                        <h2>Daftar Harga</h2>
                        <p>
                            Harga untuk pembuatan sebuah aplikasi website based maupun mobile based. 
                            Harga ini belum termasuk pajak dan biaya layanan.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3>Basic</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <div className="price">
                                    Rp 5.000.000
                                </div>

                                <Link href="/sign-in">
                                    <a className="default-btn">Purchase Plan</a>
                                </Link>

                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Free Domain (.com)</li>
                                    <li><i className="ri-check-line"></i> Free Hosting (Server) </li>
                                    <li><i className="ri-check-line"></i> Unlimited Storage</li>
                                    <li><i className="ri-check-line"></i> 100 Email Account</li>
                                    <li><i className="ri-check-line"></i> 3 Month Free Support</li>
                                    <li><i className="ri-check-line"></i> More than 100 theme</li>
                                    <li><i className="ri-check-line"></i> SEO & User Friendly</li>
                                    <li><i className="ri-check-line"></i> 24/7 Live Support</li>
                                    <li><i className="ri-close-line"></i> Server Access</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box active">
                                <div className="title">
                                    <h3>Business</h3>
                                    <p>Powerful, fast & awesome elements</p>
                                </div>
                                <span className="popular">Most Popular</span>
                                <div className="price">
                                    Rp 10.000.000   
                                </div>
                                
                                <Link href="/sign-in">
                                    <a className="default-btn">Purchase Plan</a>
                                </Link>

                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Free All Domain</li>
                                    <li><i className="ri-check-line"></i> Free Hosting (Server) </li>
                                    <li><i className="ri-check-line"></i> Unlimited Storage</li>
                                    <li><i className="ri-check-line"></i> Unlimited Email Account</li>
                                    <li><i className="ri-check-line"></i> 6 Month Free Support</li>
                                    <li><i className="ri-check-line"></i> More than 1000 theme</li>
                                    <li><i className="ri-check-line"></i> SEO & User Friendly</li>
                                    <li><i className="ri-check-line"></i> 24/7 Live Support</li>
                                    <li><i className="ri-check-line"></i> Server Access</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3>Customizing</h3>
                                    <p>All elements customizing</p>
                                </div>
                                <div className="price">
                                    Hubungi lebih lanjut
                                </div>

                                <Link href="/sign-in">
                                    <a className="default-btn">Purchase Plan</a>
                                </Link>
                                
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Free All Domain</li>
                                    <li><i className="ri-check-line"></i> Free Hosting (Server) </li>
                                    <li><i className="ri-check-line"></i> Unlimited Storage</li>
                                    <li><i className="ri-check-line"></i> Unlimited Email Account</li>
                                    <li><i className="ri-check-line"></i> 12 Month Free Support</li>
                                    <li><i className="ri-check-line"></i> Theme Customize</li>
                                    <li><i className="ri-check-line"></i> SEO & User Friendly</li>
                                    <li><i className="ri-check-line"></i> 24/7 Live Support</li>
                                    <li><i className="ri-check-line"></i> Server Access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape7">
                    <img src="/images/shape/shape6.png" alt="shape" />
                </div>
                <div className="shape8">
                    <img src="/images/shape/shape7.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default Pricing;