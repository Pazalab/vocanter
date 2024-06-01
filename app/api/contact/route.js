import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const { token} = await req.json();

    try {
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${token}`);

        const google_result = await response.json();

        if(google_result.success){
            return NextResponse.json({ msg: 'Your email has been sent successfully', status: 200})
        }else{
               return NextResponse.json({ msg: 'Invalid Captcha', status: 500})
        }
    } catch (error) {
             console.log(error)
            return NextResponse.json({ msg: 'Internal server error', status: 500})
    }
}  