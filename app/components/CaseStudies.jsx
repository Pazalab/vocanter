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
                                                                                       <Image src={'/garage.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="School logo"/>
                                                                         </div>
                                                                         <h2>Autoshop Admin</h2>
                                                              </div>
                                                              <div className={active === 1 ? "tab-moja active" : "tab-moja"} onClick={() => setActive(1)}>
                                                                         <div className="icon">
                                                                                       <Image src={'/school.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="School logo"/>
                                                                         </div>
                                                                         <h2>School Foundry</h2>
                                                              </div>
                                                              <div className={active === 2 ? "tab-moja active" : "tab-moja"} onClick={() => setActive(2)}>
                                                                         <div className="icon">
                                                                                       <Image src={'/bathkitchen.png'} sizes="100vw" fill style={{objectFit: 'contain'}} alt="School logo"/>
                                                                         </div>
                                                                         <h2>Countertop</h2>
                                                              </div>
                                                            
                                                   </div>
                                                   <div className="case-studies-tabs-content">
                                                          { case_studies.map(item => 
                                                                   <div className={active === item.id ? "case-study-moja active" : "case-study-moja"} key={item.id} >
                                                                             <div className="case-icon">
                                                                                     <Image src={item.logo} sizes="100vw" fill style={{objectFit: 'contain'}} alt="" />
                                                                             </div>
                                                                             <h2>{item.title}</h2>
                                                                             <div className="case-description">
                                                                                         <h3>Overview</h3>
                                                                                        <p>{item.intro}</p>
                                                                                        { item.capabilities ? <>
                                                                                                  <h3>Capabilities</h3>
                                                                                                   <ul>
                                                                                                        {item.capabilities.map(kitu => 
                                                                                                               <li key={kitu.id}><span>{kitu.name}:</span> {kitu.description}</li>
                                                                                                          )}
                                                                                                   </ul>
                                                                                        </> : ''}
                                                                                        { item.features ? <>
                                                                                                <h3>Core Features</h3>
                                                                                                <ul>
                                                                                                       { item.features.map(kitu => 
                                                                                                              <li key={kitu.id}><span>{kitu.name}:</span> {kitu.description}</li>
                                                                                                       )}
                                                                                                </ul>
                                                                                        </>: ''}
                                                                                        { item.benefits ? <>
                                                                                                <h3>Benefits</h3>
                                                                                                <ul>
                                                                                                         { item.benefits.map(kitu => 
                                                                                                                <li key={item.id}><span>{kitu.name}:</span>{kitu.description}</li>
                                                                                                         )}
                                                                                                </ul>
                                                                                         </> : ''}
                                                                                         { item.extra && 
                                                                                                <div>
                                                                                                          <h3>Automation and Efficiency</h3>
                                                                                                          <p>{item.extra}</p>
                                                                                                </div>
                                                                                           }
                                                                                           { item.impact &&
                                                                                                  <div>
                                                                                                            <h3>Impact</h3>
                                                                                                            <p>{item.impact}</p>
                                                                                                  </div>
                                                                                            }
                                                                                        <div>{item.conclusion && <>
                                                                                                <h3>Conclusion</h3>
                                                                                                <p>{item.conclusion}</p>
                                                                                        </>}</div>
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