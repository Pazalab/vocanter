"use client"
import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-scroll";
import ContactBar from "./ContactBar";
import { sidebarContext } from "./context";

const ScrollHeader = () => {
    const [active, setActive ] = useState(false);
    const [bar, setBar] = useState(false);
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
    let scrollPos = 0;

    const controlDirection = useCallback(() => {
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
    }, [])
    useEffect(() => {
            window.addEventListener("scroll", controlDirection)

            return () => window.removeEventListener("scroll", controlDirection)
    }, [controlDirection])

    const openSidebar = () => setSidebarStatus(true);
  return (
    <div className="wrapper">
        <div className={active ? "header scrolled active": "header scrolled"}>
            <div className="inner-row">
                 <div className="header-content">
                             <Link to={'#'} className="logo">
                                       <Image src={'/logo-black.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="company-logo"/>
                             </Link>

                             <ul>
                                      <li><Link to="hero" offset={-100} smooth={true} activeClass="active" spy={true}>Home</Link></li>
                                      <li><Link to='about' activeClass="active" smooth={true} spy={true}>About</Link></li>
                                      <li><Link to='solutions' activeClass="active" smooth={true} spy={true}>Solutions</Link></li>
                                      <li><Link to='case-studies' activeClass="active" smooth={true} spy={true}>Case Studies</Link></li>
                                      <li><Link to='contact' activeClass="active" smooth={true} spy={true}>Contact Us</Link></li>
                             </ul>
                             <div className=""></div>
                             <div className="scafold-menu-btn" onClick={() => setBar(true)}>
                                        <span><CgMenuRight /></span>
                             </div>
                             <div className="sidebar-btn" onClick={openSidebar}>
                                     <span><CgMenuRight /></span>
                               </div>
                 </div>
         </div>
         </div>
         <ContactBar  status={bar} func={setBar} />
    </div>

  )
}

export default ScrollHeader