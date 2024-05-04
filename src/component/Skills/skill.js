import React from 'react'
import './skill.css'
import ui from '../../assests/ui.png';
import web from '../../assests/web.png';
import app from '../../assests/app.png'
function Skill() {
  return (
   <section id='skill'>

    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>
Note that the development build is not optimized.
To create a production build, use
Note that the development build is not optimized.
To create a production build, useNote that the development build is not optimized.
To create a production build, use
Note that the development build is not optimized.
To create a production build, use</span>
<div className='skillBars'>
<div className='skillBar'>
 <img src={ui} alt='' className='skillBarImg'/>
 <div className='skillBarText'>
 <h2>UI/UX Design</h2>
 <p>This is a demo text.you can write your content here</p>

 </div>
 
</div>

<div className='skillBar'>
 <img src={web} alt='' className='skillBarImg'/>
 <div className='skillBarText'>
 <h2>Web Design</h2>
 <p>This is a demo text.you can write your content here</p>

 </div>
 
</div>

<div className='skillBar'>
 <img src={app} alt='' className='skillBarImg'/>
 <div className='skillBarText'>
 <h2>App Design</h2>
 <p>This is a demo text.you can write your content here</p>

 </div>
 
</div>

</div>

   </section>
  )
}

export default Skill
