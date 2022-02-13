import React from 'react';
import Link from 'next/link'

const Pricing = () => {
    return (
        <>
            <div className="pricing-area bg-gradient-color pt-100 pb-75" id="pricing">
                <div className="container">
                    <div className="pricing-tabs">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="pricing-section-title">
                                    <span className="sub-title"></span>
                                    <h2>Daftar Harga</h2>
                                    <p>
                                        Harga untuk pembuatan sebuah aplikasi website based maupun mobile based.
                                        Harga ini belum termasuk pajak dan biaya layanan.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-pricing-table">
                                            <div className="title">
                                                <h3>Paket Standart</h3>
                                                <p>Powerful & awesome elements</p>
                                            </div>
                                            <div className="price">
                                                Rp 5.000.000 
                                            </div>

                                            <Link href="https://wa.me/6285691166309">
                                                <a className="default-btn">Pilih Paket Ini</a>
                                            </Link>

                                            <ul className="features-list">
                                                <li><i className="ri-check-line"></i> Gratis domain .com</li>
                                                <li><i className="ri-check-line"></i> Gratis hosting (server) </li>
                                                <li><i className="ri-check-line"></i> Garansi 3 bulan</li>
                                                <li><i className="ri-check-line"></i> Lebih dari 100 tema pilihan</li>
                                                <li><i className="ri-check-line"></i> SEO & User Friendly</li>
                                                <li><i className="ri-check-line"></i> 100 Akun Email</li>
                                                <li><i className="ri-check-line"></i> 24/7 Live Support</li>
                                                <li><i className="ri-close-line"></i> Akses Server</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-pricing-table">
                                            <div className="title">
                                                <h3>Paket Advanced</h3>
                                                <p>Custom, Powerful & awesome elements</p>
                                            </div>
                                            <span className="popular">Most Popular</span>
                                            <div className="price">
                                                Hubungi lebih lanjut
                                            </div>

                                            <Link href="https://wa.me/6285691166309">
                                                <a className="default-btn">Pilih Paket ini</a>
                                            </Link>

                                            <ul className="features-list">
                                                <li><i className="ri-check-line"></i> Gratis semua tipe domain</li>
                                                <li><i className="ri-check-line"></i> Gratis hosting (server) </li>
                                                <li><i className="ri-check-line"></i> Garansi 6 Bulan</li>
                                                <li><i className="ri-check-line"></i> Tema dapat custom</li>
                                                <li><i className="ri-check-line"></i> SEO & User Friendly</li>
                                                <li><i className="ri-check-line"></i> Unlimited Akun Email</li>
                                                <li><i className="ri-check-line"></i> 24/7 Live Support</li>
                                                <li><i className="ri-check-line"></i> Akses Server</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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