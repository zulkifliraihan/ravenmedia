// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const   Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area footer-style-two bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo">
                                        <img src="/images/black.png" alt="logo" />
                                    </a>
                                </Link>
                                
                                {/* <p>Best solution for your IT business.</p> */}
                                {/* <p>
                                Raven media adalah agensi digital yang telah berdiri sejak tahun 2019, Kami
                                hadir untuk membantu Anda dalam mengembangkan bisnis di dunia digital
                                yang berkembang pesat ini.
                                </p> */}

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 ml-90-px">
                            <div className="single-footer-widget pl-2">
                                <h3>Navigation</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="#about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#service">
                                            <a>Our Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#client">
                                            <a>Clients</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#pricing">
                                            <a>Price List</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#portofolio">
                                            <a>Portofolios</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Find Us</h3>
                                <p>
                                    Jl. Gaga Semanan Rt06/04 No.99 Kel.Semanan Kec. Kalideres Jakarta Barat 11850
                                </p>

                                <h3>Contact Us </h3>
                                <p>
                                    +62 87789142851
                                    <br/>
                                    021 (5447740)
                                </p>
                                <h3>Email Us </h3>
                                <p>
                                    ravenmediaindonesia@gmail.com
                                    <br/>
                                    or
                                    <br/>
                                    info@ravenmedia.id
                                </p>


                                {/* <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                                    <input 
                                        type="text" 
                                        className="input-newsletter" 
                                        placeholder="Your Email" 
                                        name="EMAIL" 
                                        required 
                                    />
                                    <button type="submit">
                                        <i className="ri-send-plane-2-line"></i>
                                    </button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="copyright-area">
                        <p>Copyright &copy; {currentYear} <strong>Ravenmedia</strong>. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;