import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { sidebarContext } from "./context";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { Link } from "react-scroll";
const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
    const sidebarRef = useRef();

    const closeSidebar = () => setSidebarStatus(false);
    useEffect(() => {
             if(sidebarStatus){
                     sidebarRef.current.classList.add("active")

                     const tl = gsap.timeline();

                     tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                             x: 0,
                             duration: 1
                     })
                     tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                             x: 0,
                             duration: 0.5
                     })
             }else{
                    const tl = gsap.timeline();

                    tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                             x: "-100%",
                             duration: 0.5
                     })

                      tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                             x: "-100%",
                             duration: 1
                     })

                     setTimeout(() => {
                             sidebarRef.current.classList.remove("active")
                     }, 1500)
             }
    }, [sidebarStatus])
  return (
    <div ref={sidebarRef} className="sidebar-wrapper">
              <div className="sidebar-overlay"></div>
              <div className="sidebar-content">
                         <div className="sidebar-header">
                                   <div className="sidebar-logo">
                                          <Image src={'/logo-black.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="company-logo"/>
                                   </div>
                                   <span onClick={closeSidebar}><CgClose /></span>
                         </div>
                         <div className="sidebar-nav">
                                       <ul>
                                                <li><Link to="hero" offset={-100} smooth={true} activeClass="active" spy={true}>Home</Link></li>
                                                <li><Link to='about' activeClass="active" smooth={true} spy={true}>About</Link></li>
                                                <li><Link to='solutions' activeClass="active" smooth={true} spy={true}>Solutions</Link></li>
                                                <li><Link to='case-studies' activeClass="active"  smooth={true} spy={true}>Case Studies</Link></li>
                                                <li><Link to='contact' activeClass="active"  smooth={true} spy={true}>Contact Us</Link></li>
                                       </ul>
                         </div>
              </div>
    </div>
  )
}

export default Sidebar