"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-scroll";

const ScrollHeader = () => {
    const [active, setActive ] = useState(false);
    let scrollPos = 0;

    const controlDirection = () => {
           if(window.scrollY > 150){
                if(window.scrollY > scrollPos){
                      setActive(false);
                }else{
                     setActive(true)
                }
                scrollPos = window.scrollY;
           }else{
                 setActive(false);
           }
    }
    useEffect(() => {
            window.addEventListener("scroll", controlDirection)

            return () => window.removeEventListener("scroll", controlDirection)
    }, [])
  return (
    <div className={active ? "header scrolled active": "header scrolled"}>
       <div className="inner-row">
                 <div className="header-content">
                             <Link to={'#'} className="logo">
                                       <Image src={'/logo-black.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="company-logo"/>
                             </Link>

                             <ul>
                                      <li><Link to="hero" offset={-100} smooth={true} activeClass="active" spy={true}>Home</Link></li>
                                      <li><Link to='about' activeClass="active" smooth={true} spy={true}>About</Link></li>
                                      <li><Link to='solutions' activeClass="active">Solutions</Link></li>
                                      <li><Link to='case-studies' activeClass="active">Case Studies</Link></li>
                                      <li><Link to='contact' activeClass="active">Contact Us</Link></li>
                             </ul>
                             <div className=""></div>
                             <div className="scafold-menu-btn">
                                        <span><CgMenuRight /></span>
                             </div>
                 </div>
      </div>
   </div>
  )
}

export default ScrollHeader