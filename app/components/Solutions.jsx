"use client"
import { useEffect, useRef } from "react"
import { figtree } from "../layout"
import Image from "next/image"

const Solutions = () => {

  return (
    <div id="solutions">
           <div className="inner-row">
                      <div className="solutions-content">
                                <div className="solutions-intro">
                                               <h3 className={figtree.className}>Our Extensive Capabilities</h3>
                                               <h1>We turn your Business Ambitions into Reality.</h1>
                                </div>

                                <div className="solutions-content-row" >
                                            <div className="solution-moja">
                                                     <div className="solution-moja-image">
                                                                 <Image src={'/customized.jpg'} sizes="100vw" style={{objectFit: "cover"}} fill alt="" />
                                                       </div>
                                                      <div className="solution-moja-texts">
                                                                 <h2 className={figtree.className}>Customized Consulting Services.</h2>
                                                                 <p>We provide personalized consulting services to assess your technology needs and develop strategic roadmaps. Our consultants offer expert guidance on technology adoption, optimization, and digital transformation to align with your business goals.</p>
                                                       </div>
                                            </div>
                                            <div className="solution-moja">
                                                     <div className="solution-moja-texts">
                                                                 <h2 className={figtree.className}>Systems Architectural Design and Consulting.</h2>
                                                                 <p>We specialize in designing robust and scalable systems architectures. Whether you&apos;re planning a new application or optimizing existing infrastructure, our architects provide tailored solutions to enhance performance, reliability, and scalability.</p>
                                                       </div>
                                                       <div className="solution-moja-image">
                                                                 <Image src={'/systems.jpg'} sizes="100vw" style={{objectFit: "cover"}} fill alt="" />
                                                       </div>
                                            </div>
                                            <div className="solution-moja">
                                                      <div className="solution-moja-image">
                                                                 <Image src={'/custom.jpg'} sizes="100vw" style={{objectFit: "cover"}} fill alt="" />
                                                       </div>
                                                      <div className="solution-moja-texts">
                                                                 <h2 className={figtree.className}>Advanced Custom Projects and Integrated Systems.</h2>
                                                                 <p>We specialize in crafting sophisticated custom projects and seamlessly integrating them with off-the-shelf software solutions. Our team leverages the latest technologies to develop innovative systems that not only solve complex business challenges but also enhance existing software ecosystems. This approach ensures that our solutions deliver comprehensive value and functionality, perfectly tailored to meet the specific needs of our clients.</p>
                                                       </div>
                                            </div>
                                            <div className="solution-moja">
                                                       <div className="solution-moja-texts">
                                                                 <h2 className={figtree.className}>Mobile Application Development and Licensing.</h2>
                                                                 <p>We specialize in designing and developing custom mobile applications tailored to the unique needs of our clients. From concept to deployment, we ensure that your mobile solution is innovative, user-friendly, and fully licensed for commercial use.</p>
                                                       </div>
                                                       <div className="solution-moja-image">
                                                                 <Image src={'/mobile-app.jpg'} sizes="100vw" style={{objectFit: "cover"}} fill alt="" />
                                                       </div>
                                            </div>
                                            <div className="solution-moja">
                                                      <div className="solution-moja-image"> 
                                                                 <Image src={'/remote.jpg'} sizes="100vw" style={{objectFit: "cover"}} fill alt="" />
                                                       </div>
                                                      <div className="solution-moja-texts">
                                                                 <h2 className={figtree.className}>Remote Application Maintenance.</h2>
                                                                 <p>Our team offers comprehensive remote support and maintenance services to keep your applications running smoothly. Whether it&apos;s troubleshooting issues, applying updates, or optimizing performance, we provide timely and effective solutions to minimize downtime.</p>
                                                       </div>
                                            </div>
                                            <div className="solution-moja">
                                                    <div className="solution-moja-texts">
                                                                 <h2 className={figtree.className}>Data Management, including complex Drupal Migrations.</h2>
                                                                 <p>We manage seamless data transformations and migrations, including complex platforms such as Drupal and other content management systems. Our expertise ensures that your data is transferred securely and accurately, preserving integrity and functionality throughout the process.</p>
                                                       </div>
                                                       <div className="solution-moja-image">
                                                                 <Image src={'/migrations.jpg'} sizes="100vw" style={{objectFit: "cover"}} fill alt="" />
                                                       </div>
                                            </div>
                                </div>
                      </div>
           </div>
    </div>
  )
}

export default Solutions