"use client"
import Image from "next/image"
import { figtree } from "../layout"
import { useState } from "react"
import { case_studies } from "../data/cases"

const CaseStudies = () => {
  const [active, setActive ] = useState(0)
  return (
    <div id='case-studies'>
                <div className="inner-row">
                           <div className="case-studies-content">
                                       <div className="case-studies-intro">
                                                   <div className="intro-col">
                                                              <h3>Case Studies</h3>
                                                              <h1 className={figtree.className}>Explore our Impactful Projects</h1>
                                                   </div>
                                                   <p>Dive into our featured projects and see how we partnered with businesses to achieve extraordinary outcomes. From tackling complex challenges to crafting innovative solutions, we don&apos;t just write code, we empower transformation.</p>
                                       </div>

                                       <div className="case-studies-row">
                                                   <div className="case-studies-tabs">
                                                              <div className={active === 0 ? "tab-moja active" : "tab-moja"} onClick={() => setActive(0)}>
                                                                         <div className="icon">
                                                                                       <Image src={'/school.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="School logo"/>
                                                                         </div>
                                                                         <h2>School Foundry</h2>
                                                              </div>
                                                              <div className={active === 1 ? "tab-moja active" : "tab-moja"} onClick={() => setActive(1)}>
                                                                         <div className="icon">
                                                                                       <Image src={'/bathkitchen.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="School logo"/>
                                                                         </div>
                                                                         <h2>Countertop</h2>
                                                              </div>
                                                              <div className={active === 2 ? "tab-moja active" : "tab-moja"} onClick={() => setActive(2)}>
                                                                         <div className="icon">
                                                                                       <Image src={'/garage.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="School logo"/>
                                                                         </div>
                                                                         <h2>Autoshop Admin</h2>
                                                              </div>
                                                   </div>
                                                   <div className="case-studies-tabs-content">
                                                          { case_studies.map(item => 
                                                                   <div className={active === item.id ? "case-study-moja active" : "case-study-moja"} key={item.id} >
                                                                             <div className="case-icon">
                                                                                    { item.logo == '' ? <h3>{item.title}</h3> : 
                                                                                           <Image src={item.logo} sizes="100vw" fill style={{objectFit: 'contain'}} alt="" />
                                                                                      } 
                                                                             </div>
                                                                             <div className="case-description">
                                                                                        <p>{item.intro}</p>
                                                                                        <ul>
                                                                                                   { item.list.map(item => <li key={item.id}><span>{item.name}: </span>{item.description}</li>)}
                                                                                        </ul>
                                                                                        <p>{item.final}</p>
                                                                             </div>
                                                                   </div>
                                                          )}
                                                   </div>
                                       </div>
                           </div>
                </div>
    </div>
  )
}

export default CaseStudies