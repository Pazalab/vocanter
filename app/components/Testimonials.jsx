"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import { LiaStarSolid, LiaStarHalfAltSolid } from "react-icons/lia";
import { figtree } from "../layout";
import { PiArrowLeftFill, PiArrowRightFill } from "react-icons/pi";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const forwardClick = () => {
          setActive(prev => prev + 1);
          if(active === 2) setActive(0)
  }
 const prevClick = () => {
        setActive(prev => prev - 1);
        if(active === 0) setActive(2)
 }
  return (
    <div className='testimonial-section'>
               <div className="testimonial-section-content">
                          <div className="testimonial-image">
                                    <Image src={'/testimonial2.jpg'} sizes="100vw" style={{ objectFit: "cover"}} fill alt="" />
                          </div>
                          <div className="testimonial-body-row">
                                    {testimonials.map(item => 
                                                  <div className={active == item.id ? "testimonial-moja active" : "testimonial-moja"} key={item.id}>
                                                             { item.rating == 4.5 ? 
                                                                    <div className="rating">
                                                                               <span><LiaStarSolid /></span>
                                                                               <span><LiaStarSolid /></span>
                                                                               <span><LiaStarSolid /></span>
                                                                               <span><LiaStarSolid /></span>
                                                                               <span><LiaStarHalfAltSolid /></span>
                                                                    </div>
                                                                    :
                                                                     <div className="rating">
                                                                                <span><LiaStarSolid /></span>
                                                                                <span><LiaStarSolid /></span>
                                                                                <span><LiaStarSolid /></span>
                                                                                <span><LiaStarSolid /></span>
                                                                                <span><LiaStarSolid /></span>
                                                                      </div>
                                                               }
                                                            
                                                              <h4 className={figtree.className}>{item.statement}</h4>

                                                              <div className="person">
                                                                         <h3>{item.name}</h3>
                                                                         <p>{item.position}</p>
                                                              </div>
                                               </div>
                                    )}
                                    <div className="testimonial-btns">
                                                <div className="btn" onClick={prevClick} >
                                                          <span><PiArrowLeftFill /></span>
                                                </div>
                                                <div className="btn" onClick={forwardClick}>
                                                          <span><PiArrowRightFill /></span>
                                                </div>
                                    </div>
                          </div>
               </div>
    </div>
  )
}

export default Testimonials