import gsap from "gsap";
import Image from "next/image"
import { useCallback, useEffect, useRef } from "react";
import { CgClose } from "react-icons/cg"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactBar = ({ status, func }) => {
    const sideRef = useRef()
    const sideWrapper = useRef();
    const handleClick = useCallback((e) => {
        if(sideRef.current && !sideRef.current.contains(e.target)){
               func(false)
        }else{
               func(true)
        }
    }, [func])
    
    useEffect(() => {
        document.addEventListener("click", handleClick, true)
    
         if(status){
                sideWrapper.current.classList.add("active")
                const tl = gsap.timeline();
                tl.to(sideWrapper.current, {
                        x: 0,
                        duration: 0.5,
                })
                tl.to(sideWrapper.current.querySelector(".contact-bar"), {
                       x: 0,
                       duration: 0.5
                })
         }else{
              const tl = gsap.timeline();
              tl.to(sideWrapper.current.querySelector(".contact-bar"), {
                    x: "100%",
                    duration: 0.5,
             })
              tl.to(sideWrapper.current, {
                     x: "100%",
                      duration: 0.5,
              })

              setTimeout(() => {
                    sideWrapper.current.classList.remove("active")
              }, 1000)
         }
    }, [handleClick, status])
  return (
          <div ref={sideWrapper} className="contact-wrapper">
                  <div ref={sideRef} className="contact-bar">
                            <span onClick={() => func(false)}><CgClose /></span>
                            <div className="contact-logo">
                                      <Image src={'/logo-white.png'} sizes="100vw" fill style={{ objectFit: "contain"}}  alt="" />
                            </div>
                            <p>We&apos;e your one-stop shop for crafting innovative solutions that fuel business growth. From strategy to websites, we leverage cutting-edge tech to make your online presence thrive.</p>
                            <ul>
                                      <li><a href=""><span><FaFacebookF /></span></a></li>
                                       <li><a href=""><span><FaSquareXTwitter /></span></a></li>
                                       <li><a href=""><span><FaLinkedinIn /></span></a></li>
                            </ul>

                           <div className="contact-info">
                                     <h4>Contact Info</h4>
                                     <p>Ngong Rd./Hekima Gardens, Nairobi</p>
                                     <p>+254 7123 45678</p>
                                     <p>support@vocanter.com</p>
                           </div>
                  </div>
          </div>
  )
}

export default ContactBar