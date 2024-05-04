import React from 'react'
import './intro.css'
import bg from '../../assests/com.png';
import {Link} from 'react-scroll';
import Basket from '../../assests/basket.png'

function Intro() {
  return (
 <section id='intro'>


   <div className='introContent'>
   <span className='hello' >Hello</span>
   <span className='introText'>I am <span className='introName'> Ayesha</span><br/>Website Desingner</span>
   <p className='introPara'>I am a skilled web desingner with experience in creating<br/> visually appealing and user-friendly Websites</p>
   <Link><button className='btn'><img src={Basket} alt='' className='btnImage'/>Hire me</button></Link>
   </div>
   <img src= {bg}alt='' className='bg'/>


 </section>
  )
}

export default Intro
