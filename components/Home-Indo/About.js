import React from 'react'

import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
    return (
        <>
            <div className="about-area ptb-100 bg-image-gagak bg-dark-color" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">TENTANG KAMI</span>
                                <h2 className="clr-white">Siapa Kami?</h2>
                                
                                <p className="clr-white mt-4">
                                    Raven Media adalah agensi digital yang telah berdiri sejak tahun 2019, Kami
                                    hadir untuk membantu Anda dalam mengembangkan bisnis di dunia digital
                                    yang berkembang pesat ini. Untuk Anda, tim kami akan membuat dan
                                    mengembangkan aplikasi untuk Android &amp; IOS, dan Situs Web yang sesuai
                                    dengan kebutuhan bisnis anda dan tim ahli kami juga akan bisa membantu
                                    untuk mengelola bisnis anda dalam dunia digital untuk unggul dalam hal
                                    strategi, teknologi, kreasi, dan konten. Dengan solusi yang tepat untuk setiap
                                    domain dan di setiap industri.
                                </p>
                                
                                <p className="clr-white">
                                    Bagi banyak klien kami, Tim kami tidak hanya sebagai pihak ketiga, tetapi kami menghadirkan solusi
                                    yang kredibel dan strategis yang mencakup semua aspek arena digital. Kami bekerja langsung
                                    dengan klien kami secara ambisius dalam merumuskan rencana untuk mendapatkan hasil terbaik
                                    dari pembelajaan dan pemasaran digital mereka. Tim ahli kami yang berpengalaman akan membawa
                                    inovasi Anda secara online, mengarahkan dan memberikan kombinasi terbaik dari pengembangan
                                    web, pengoptimalan pencarian, manajemen konversi, peningkatan e-niaga, dan manajemen media
                                    sosial yang diperlukan untuk memenuhi tujuan akhir.
                                </p>

                                {/* <div className="features-text">
                                    <h6 className="clr-white">Technology</h6>
                                    <p className="clr-white">
                                        Our extensive tech stack guarantees freedom in development, testing, support and maintenance. Count on the best match with your project.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6 className="clr-white">Strategy</h6>
                                    <p className="clr-white">
                                        We help you develop a competitive advantage. Count on our actionable, forward-looking advice.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6 className="clr-white">Creative</h6>
                                    <p className="clr-white">
                                        We create unique brands, logos and all related assets, tailored to your needs and our constantly evolving society.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6 className="clr-white">Content</h6>
                                    <p className="clr-white">
                                        We feed your audience with the right content at the right time, in word and image, throughout the entire customer journey.
                                    </p>
                                </div> */}

                            </div>
                        </div>

                        {/* <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <ScrollAnimation animateIn='fadeInRight'>
                                    <img className="img-gagak" src="/images/gagak.png" alt="about" />
                                </ScrollAnimation>
                                <img className="img-gagak" src="/images/gagak.png" alt="about" />
                            </div>
                        </div> */}
                    
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default About;