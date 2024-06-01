"use client"
import { useForm } from "react-hook-form"
import { figtree } from "../layout"
import { RxArrowTopRight } from "react-icons/rx";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast"

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors}, reset} = useForm();
  const [captchaTokenMsg, setCaptchaTokenMsg] = useState('')
  const [ loading, setLoading ] = useState(false);
  const recaptchaRef = useRef();

  const SubmitForm = (data) => {
        const token = recaptchaRef.current.getValue();
        if(token === ''){
                 setCaptchaTokenMsg('You must confirm the captcha')
        }else{
                setLoading(true);
                //send form
                const formData = {
                      data: data,
                      token: token
                }

                fetch('api/contact', {
                  method: "POST",
                  headers: { 'Content-Type': 'application/json'},
                  body: JSON.stringify(formData)
                 }).then(res => { return res.json() })
                 .then(result => {
                         if(result.status === 200){
                                  toast.success(result.msg, { id: 'success message'});
                         }else{
                                 toast.error(result.msg, { id: 'error message'});
                         }
                        reset();
                        recaptchaRef.current.reset();
                        setLoading(false)
                 }).catch(error => {
                          toast.error("Form Message not sent", { id: 'error'})
                         console.log(error)
                          reset();
                          recaptchaRef.current.reset();
                         setLoading(false)
                 })
        }
  }

  return (
    <div className="contact-form">
                <Toaster />
                { loading &&
                        <div className="contact-form-overlay">
                               <div className="overlay-ndani">
                                        <span class="loader"></span>
                               </div>
                       </div>
                 }
               <form onSubmit={handleSubmit(SubmitForm)}>
                          <div className="form-row">
                                     <div className="form-row-column">
                                               <label htmlFor="name">Name*</label>
                                               <input type="text" className={figtree.className} {...register("name", { required: "Name input is required"})} placeholder="Full name" />
                                               <span className="error">{errors.name && errors.name.message}</span>
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="email">Work email*</label>
                                                <input type="email" className={figtree.className} {...register("email", { required: "Email input is required"})} placeholder="info@example.com" />
                                                <span className="error">{errors.email && errors.email.message}</span>
                                     </div>
                          </div>
                          <div className="form-row">
                                     <div className="form-row-column">
                                               <label htmlFor="companyname">Company Name*</label>
                                               <input type="text" className={figtree.className} {...register("company", { required: "Company input is required"})} placeholder="Company represented" />
                                               <span className="error">{errors.company && errors.company.message}</span>
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="consulting area">Consulting Area*</label>
                                                <input type="text" className={figtree.className} {...register("subject", { required: "Subject inquiry is required"})} placeholder="Subject title" />
                                                <span className="error">{errors.subject && errors.subject.message}</span>
                                     </div>
                          </div>
                          <div className="form-row-v2">
                                    <label htmlFor="message">Write Your Message*</label>
                                    <textarea className={figtree.className} {...register("content", { required: "Inquiry message is required"})} cols="30" rows="10" placeholder="Content of your inquiry"></textarea>
                                    <span className="error">{errors.content && errors.content.message}</span>
                          </div>

                          <ReCAPTCHA 
                                  sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
                                  ref={recaptchaRef}
                                  onChange={() => setCaptchaTokenMsg('')}
                           />
                           <span className="error">{captchaTokenMsg}</span>
                          <button  className={figtree.className} type="submit">Submit Now <span><RxArrowTopRight /></span></button>
               </form>
    </div>
  )
}

export default ContactForm