import React, { useState } from 'react'
import logo from '../../assests/alex1.png'
import {Link} from 'react-scroll';
import './navbar.css'
import logo1 from '../../assests/pho.png'
import hamburger1 from '../../assests/hamburger1.png'


function Navbar() {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <div>
    <nav className='navbar'>
       <img src={logo} alt ='' className ='logo'/>
       <div className='desktopMenu' >
      <Link activeClass='active'to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active'to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active'to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>protfolio</Link>
        <Link activeClass='active'to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
       


       </div>
       <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('Contact').scrollIntoView({behavior: 'smooth'});
       }}>
       <img src={logo1} alt='' className='desktopMenuImg'/>
       Contact Me
       </button>
       <img src={hamburger1} alt ='' className ='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
       <div className='navMenu'style={{display:showMenu? 'flex':'none'}} >
      <Link activeClass='active'to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(!false)}>Home</Link>
        <Link activeClass='active'to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(!false)}>About</Link>
        <Link activeClass='active'to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(!false)}>protfolio</Link>
        <Link activeClass='active'to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(!false)}>Clients</Link>
        <Link activeClass='active'to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(!false)}>Contact</Link>


       </div>
       

    </nav>
    </div>
  )
}

export default Navbar
