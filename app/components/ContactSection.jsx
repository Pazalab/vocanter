import ContactForm from "./ContactForm"
import { IoMdCall } from "react-icons/io";
import { BsEnvelopeAtFill } from "react-icons/bs";

const ContactSection = () => {
  return (
    <div id='contact'>
               <div className="inner-row">
                        <div className="contact-content">
                                   <div className="contact-intro">
                                          <h3>Get in Touch</h3>
                                          <h1>Ready To Build an awesome Project Together?</h1>
                                          <p>Whether you have a quick question or a project brewing, we&apos;re happy to hear from you. Use any of the channels below and we&apos;ll connect quickly.</p>
                                   </div>
                                   <div className="contact-body-row">
                                                <div className="contact-body-col">
                                                          <div className="contact-body-box">
                                                                     <h3>Give us a Call</h3>
                                                                      <p><span><IoMdCall /></span> +254 7123 45678</p>
                                                                      <p><span><IoMdCall /></span> +1 (33) 74893 849</p>
                                                          </div>
                                                          <div className="contact-body-box">
                                                                   <h3>Email us</h3>
                                                                   <p><span><BsEnvelopeAtFill /></span>support@vocanter.com</p>
                                                                   <p><span><BsEnvelopeAtFill /></span>info@vocanter.com</p>
                                                          </div>
                                                </div>
                                                <div className="contact-form-col">
                                                            <ContactForm />
                                                </div>
                                   </div>
                        </div>
               </div>
    </div>
  )
}

export default ContactSection