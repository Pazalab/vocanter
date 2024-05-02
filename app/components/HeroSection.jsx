"use client"

import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import { figtree } from "../layout";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
const HeroSection = () => {
   const scrollerRef = useRef();

   useEffect(() => {
           const scrollerInner = scrollerRef.current.querySelector('.partners-scroller')
           const scrollerContent = Array.from(scrollerInner.children);

           scrollerContent.forEach(item => {
                  const duplicatedItem = item.cloneNode(true);
                  duplicatedItem.setAttribute("aria-hidden", true);
                  scrollerInner.appendChild(duplicatedItem);
            })
   }, [])

  return (
    <div id="hero">
              <div className="inner-row">
                          <div className="hero-content">
                                     <div className="hero-intro">
                                                 <div className="intro-statement">
                                                          <h3>Boutique Software Consulting</h3>
                                                         <h1>Empowering Businesses & Organizations with Powerful Tech Solutions.</h1>
                                                 </div>
                                                <Link to='about' smooth={true} className="intro-explore">
                                                          <p>Explore <span></span></p>
                                                          <span className="bounce"><LiaLongArrowAltDownSolid /></span>
                                                </Link>             
                                     </div> 
                                     <div className="hero-base">
                                                <div className="hero-image">
                                                            <Image src={'/hero1.jpg'} sizes="100vw" style={{ objectFit: "cover"}} fill alt="hero-image"/>
                                                </div>
                                                <div className="hero-shine">
                                                         <div className="hero-shine-header">
                                                                  <h3>Launching Organizations into the Digital Future.</h3>
                                                         </div>

                                                         <div className="hero-shine-texts">
                                                                   <p>We engineer your online success, from strategy to maintenance, with solutions that scale.</p>
                                                                   <Link to='about' smooth={true}>Read More <span><GoArrowDown /></span></Link>
                                                         </div>
                                                </div>
                                                <div className="hero-solutions">
                                                           <Image src={'/hero2.jpg'} sizes="100vw" style={{objectFit: "cover"}} fill  alt="hero-image"/>
                                                           <div className="hero-solutions-texts">
                                                                      <p>Mobile Application Development</p>
                                                                      <p>Drupal Migrations</p>
                                                                      <p>Systems Architectural Design</p>
                                                                      <Link to='solutions'  smooth={true}>View more Solutions</Link>
                                                           </div>
                                                </div>
                                     </div>


                                     <div className="hero-partners">
                                                 <h3 className={figtree.className}> More than <span> 200+</span> Happy Clients & Partners</h3>

                                                 <div className="hero-partners-row" ref={scrollerRef}>
                                                           <div className="partners-scroller">
                                                                    <div className="partner-moja">
                                                                              <Image src={'/centum.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/unimary.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/firstre.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/gilmer.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/logo.webp'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/eclectics.svg'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/moneo.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/pacific.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/gates.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                                    <div className="partner-moja">
                                                                              <Image src={'/agba.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="hero-image"/>
                                                                    </div>
                                                           </div>
                                                 </div>
                                     </div>
                          </div>
              </div>
    </div>
  )
}

export default HeroSection