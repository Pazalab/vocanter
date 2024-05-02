"use client"
import Image from "next/image"
import { figtree } from "../layout"
import CountUp from "react-countup"

const AboutSection = () => {
  return (
    <div id='about'>
             <div className="inner-row">
                    <div className="about-content">
                                <div className="about-content-col">
                                            <div className="about-col-content">
                                                    <div className="about-intro">
                                                             <h3>About Company</h3>
                                                              <h2 className={figtree.className}>With a deep understanding of technology and a commitment to client success, we provide expert software consulting services. We empower businesses of all sizes to achieve their goals by crafting tailored solutions that leverage the latest technologies.</h2>
                                                              <p>At Vocanter, we spark innovation through diversity.  Our team, a vibrant tapestry of minds, unites in a single purpose: to empower businesses of all sizes with groundbreaking software solutions.  We don&apos;t just write code; we leverage our collective brilliance to craft strategic tools that unlock your full potential and propel you towards extraordinary results.</p>
                                                  </div>
                                            </div>
                                            <div className="about-numbers">
                                                        <div className="about-numbers-inner">
                                                                     <div className="number-moja">
                                                                                  <div className="icon">
                                                                                            <Image src={'/collaboration.png'} sizes="100vw" fill  alt="hero-image"/>
                                                                                  </div>
                                                                                  <div className="number-moja-texts">
                                                                                             <h1 className={figtree.className}><CountUp end={15} enableScrollSpy={true} scrollSpyOnce={true} /></h1>
                                                                                             <p>Professional Experts</p>
                                                                                  </div>
                                                                     </div>
                                                                     <div className="number-moja">
                                                                                  <div className="icon">
                                                                                            <Image src={'/atom.png'} sizes="100vw" fill  alt="hero-image"/>
                                                                                  </div>
                                                                                  <div className="number-moja-texts">
                                                                                             <h1 className={figtree.className}><CountUp end={200} enableScrollSpy={true} scrollSpyOnce={true} /></h1>
                                                                                             <p>Projects Complete</p>
                                                                                  </div>
                                                                     </div>
                                                                     <div className="number-moja">
                                                                                  <div className="icon">
                                                                                            <Image src={'/earth.png'} sizes="100vw" fill  alt="hero-image"/>
                                                                                  </div>
                                                                                  <div className="number-moja-texts">
                                                                                             <h1 className={figtree.className}><CountUp end={50} enableScrollSpy={true} scrollSpyOnce={true} /></h1>
                                                                                             <p>Worldwide Clients</p>
                                                                                  </div>
                                                                     </div>
                                                        </div>
                                            </div>
                                </div>
                                <div className="about-content-col">
                                          <div className="about-content-image"> 
                                                     <Image src={'/about1.jpg'} sizes="100vw" fill style={{objectFit: "cover"}} alt="hero-image"/>
                                          </div>
                                </div>
                    </div>
             </div>
    </div>
  )
}

export default AboutSection