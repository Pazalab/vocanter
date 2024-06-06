import { NextResponse } from 'next/server'
import sgMail from "@sendgrid/mail"

export async function POST(req, res) {
    const { token, data } = await req.json();
    const { name, email, company, subject, content } = data;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    try {
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${token}`);

        const google_result = await response.json();

        if(google_result.success){
                const content = {
                      to: "kngugi@vocanter.com",
                      bcc: ["wamirara@gmail.com", "kngugi@gmail.com"],
                      from: email,
                      subject: `Vocanter Contact Form Message `,
                      text: `
                            Name:  ${name}\n
                            Company: ${company}\n
                            Consulting Area: ${subject} \n
                            Message: ${content}\n
                        `,
                      html: `<p>
                            Name:  ${name}\n
                            Company: ${company}\n
                            Consulting Area: ${subject} \n
                            Message: ${content}\n
                      </p>`
                  }

                const mailSend = await sgMail.send(content);
                if(mailSend){
                       return NextResponse.json({ msg: 'Your message has been sent successfully', status: 200})
                }else{
                    return NextResponse.json({ msg: 'Your message was not sent', status: 500})
                }
        }else{
               return NextResponse.json({ msg: 'Invalid Captcha', status: 500})
        }
    } catch (error) {
             console.log(error)
            return NextResponse.json({ msg: 'Internal server error', status: 500})
    }
}  