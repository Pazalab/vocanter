"use client"
import Image from "next/image"
import { Link } from "react-scroll"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
                <div className="inner-row">
                        <div className="footer-content">
                                     <div className="footer-column"> 
                                                 <div className="footer-logo">
                                                          <Image src={'/logo-white.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="" />
                                                 </div>
                                                 <p>We&apos;e your one-stop shop for crafting innovative solutions that fuel business growth. From strategy to websites, we leverage cutting-edge tech to make your online presence thrive.</p>
                                                 <div className="footer-social-links">
                                                          <ul>
                                                                     <li><a href=""><span><FaFacebookF /></span></a></li>
                                                                     <li><a href=""><span><FaSquareXTwitter /></span></a></li>
                                                                     <li><a href=""><span><FaLinkedinIn /></span></a></li>
                                                          </ul>
                                                 </div>
                                     </div>
                                     <div className="footer-column">
                                             <h3>Company</h3>
                                               <ul>
                                                          <li><Link to="hero" offset={-100} smooth={true}  spy={true}>Home</Link></li>
                                                          <li><Link to='about'  smooth={true} spy={true}>Who we are</Link></li>
                                                          <li><Link to='solutions'  smooth={true} spy={true}>What we do</Link></li>
                                                          <li><Link to='case-studies'   smooth={true} spy={true}>Portfolio</Link></li>
                                                          <li><Link to='contact'   smooth={true} spy={true}>Get in Touch</Link></li>
                                                 </ul>
                                     </div>
                        </div>

                        <div className="copyright">
                                   <p>All rights reserved &copy;{new Date().getFullYear()} Vocanter LLC</p>
                                   {/* <a href="">Privacy policy</a> */}
                        </div>
                </div>
    </footer>
  )
}

export default Footer