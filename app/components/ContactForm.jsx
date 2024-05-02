"use client"
import { figtree } from "../layout"
import { RxArrowTopRight } from "react-icons/rx";
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {

  return (
    <div className="contact-form">
               <form action="">
                          <div className="form-row">
                                     <div className="form-row-column">
                                               <label htmlFor="name">Name*</label>
                                               <input type="text" className={figtree.className} placeholder="Horace Doe" />
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="email">Work email*</label>
                                                <input type="email" className={figtree.className} placeholder="info@example.com" />
                                     </div>
                          </div>
                          <div className="form-row">
                                     <div className="form-row-column">
                                               <label htmlFor="companyname">Company Name*</label>
                                               <input type="text" className={figtree.className} placeholder="Horace Doe" />
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="email">Consulting Area*</label>
                                                <input type="text" className={figtree.className} placeholder="info@example.com" />
                                     </div>
                          </div>
                          <div className="form-row-v2">
                                    <label htmlFor="message">Write Your Message*</label>
                                    <textarea className={figtree.className} cols="30" rows="10" placeholder="What's on your mind"></textarea>
                          </div>

                          <ReCAPTCHA 
                                  sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
                           />
                          <button  className={figtree.className} type="submit">Submit Now <span><RxArrowTopRight /></span></button>
               </form>
    </div>
  )
}

export default ContactForm