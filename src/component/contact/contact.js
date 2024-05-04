import React from 'react'
import { useRef } from 'react'

import './contact.css'
import walmart2 from '../../assests/walmart2.png'
import facebook from '../../assests/facebook.png'

import microsoft from '../../assests/microsoft.png'
import adobe from '../../assests/adobe.png'
import twitter from '../../assests/twiter.png'
import youtube from '../../assests/youtube.png'
import facebook1 from '../../assests/facebook1.png'
import instagram from '../../assests/instagram.png'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xf0kiqd', 'template_k0xyua9', form.current, {
        publicKey: 'an8oB50tkObUS13oQQpea',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        <div id='clients'>

            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>img elements must have an alt prop, either with meaningful text, or an empty string for decorative imagesimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <div className='clientImgs'>
                <img src={walmart2} className='clientImg'/>
                <img src={facebook} className='clientImg'/>
                <img src={microsoft} className='clientImg'/>
                <img src={adobe} className='clientImg'/>

            </div>

        </div>
        <div id='contact'>
          <h1 className='contPageTitle'>
            Contact Page</h1>
            <span className='contactDesc'>Please fill out a form below to discuss to any work opportunities</span>
        </div>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name'placeholder='your Name' name='your-name'/>
          <input type='email' className='email' placeholder='your email' name='your-email'/>
          <textarea className='msg' name='message'rows={5} placeholder='your message'></textarea>
          <button className='submitBtn' type='submit' value="send">Submit</button>
          <div className='links'>
            <img src={twitter} className='link'/>
            <img src={youtube} className='link'/>
            <img src={instagram} className='link'/>
            <img src={facebook1} className='link'/>
          </div>

        </form>

    </section>
  )
}

export default Contact
