import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
             <footer className="footer-section mt-4 d-flex align-items-center">
        <section className="container d-flex flex-column-reverse flex-md-row justify-content-between align-items-center p-2">
            <div>
                <div className="my-md-4 text-center text-md-start">
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">Download Now</Link>
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">License</Link>
                </div>
                <div className="mb-md-4 text-center text-md-start">
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">About</Link>
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">Feature</Link>
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">Pricing</Link>
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">Careers</Link>
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">Help</Link>
                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/niche-website-server-side-AdilMahmoudRion" className="contact-link px-2 p-md-2">Privacy Policy</Link>
                </div>
                <div className="text-center text-md-start">
                    <p className="p-2 px-md-3 text-muted text-white">© 20201 bike Point. All rights reserved</p>
                </div>
            </div>
            <div>
                <h5 className="text-white p-3 text-center">Get the App</h5>
                <Link target="_blank" to="https://www.freepnglogos.com/pics/app-store-png-logo" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" width="200" alt="apple app store travel awards globestamp" /></Link>
            </div>
        </section>
    </footer>
        </div>
    );
};

export default Footer;