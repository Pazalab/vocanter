//import Link from "next/link"
"use client"
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-scroll";
import ContactBar from "./ContactBar";
import { useContext, useState } from "react";
import { sidebarContext } from "./context";
const Header = () => {
  const [active, setActive] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
  const openSidebar = () => setSidebarStatus(true);

  return (
    <div className="header">
              <div className="inner-row">
                           <div className="header-content">
                                       <Link to={'#'} className="logo">
                                                 <Image src={'/logo-black.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="company-logo"/>
                                       </Link>

                                       <ul>
                                                <li><Link to="hero" offset={-100} smooth={true} activeClass="active" spy={true}>Home</Link></li>
                                                <li><Link to='about' activeClass="active" smooth={true} spy={true}>About</Link></li>
                                                <li><Link to='solutions' activeClass="active" smooth={true} spy={true}>Solutions</Link></li>
                                                <li><Link to='case-studies' activeClass="active"  smooth={true} spy={true}>Case Studies</Link></li>
                                                <li><Link to='contact' activeClass="active"  smooth={true} spy={true}>Contact Us</Link></li>
                                       </ul>
                                       <div className=""></div>
                                       <div className="scafold-menu-btn" onClick={() => setActive(true)}>
                                                  <span><CgMenuRight /></span>
                                       </div>

                                       <div className="sidebar-btn" onClick={openSidebar}>
                                                <span><CgMenuRight /></span>
                                       </div>
                           </div>
                           <ContactBar  status={active} func = {setActive} />
              </div>
    </div>
  )
}

export default Header