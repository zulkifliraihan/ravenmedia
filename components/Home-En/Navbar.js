// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import React from "react";
import Link from '@/utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });  
        window.scrollTo(0, 0); 
    }) 
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-three">
                <div className="texap-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light bg-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/black.png" alt="logo" />
                                </a>
                            </Link> 

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#home" activeClassName="active">
                                            <a className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#about">
                                            <a className="nav-link">
                                                About Us
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#service">
                                            <a className="nav-link">
                                                Services
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#client">
                                            <a className="nav-link">
                                                Clients
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#pricing">
                                            <a className="nav-link">
                                                Price List
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item megamenu">
                                        <Link href="#portofolio">
                                            <a className="nav-link">
                                                Portofolios
                                            </a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="#review" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Review
                                            </a>
                                        </Link>
                                    </li> */}
                                    
                                </ul>
                            </div>

                            <div className="others-options">
                                <Link href="/">
                                    <a className="default-btn">
                                        Bahasa Indonesia
                                    </a>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;