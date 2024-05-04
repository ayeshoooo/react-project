import React from 'react'
import './works.css'
import Protfolio1 from '../../assests/protfolio1.webp'
import Protfolio2 from '../../assests/protfolio2.jpg'
import Protfolio3 from '../../assests/protfolio3.jpg'
import Protfolio4 from '../../assests/protfolio4.webp'
import Protfolio5 from '../../assests/protfolio5.jpg'
import Protfolio6 from '../../assests/protfolio6.jpg'

function Works() {
  return (
   <section id='works'>

   
   <h2 className='worksTitle'>My Protfolio</h2>
   <span className='workDesc'>Note that the development build is not optimized.
To create a production build, use npm run build.Note that the development build is not optimized.
To create a production build, use npm run build.Note that the development build is not optimized.
To create a production build, use npm run build.</span>
     <div className='workImgs'>
        <img src={Protfolio1} className='workImg'/>
        <img src={Protfolio2} className='workImg'/>
        <img src={Protfolio3} className='workImg'/>
        <img src={Protfolio4} className='workImg'/>
        <img src={Protfolio5} className='workImg'/>
        <img src={Protfolio6} className='workImg'/>
     </div>
     <button className='workBtn'>See More</button>

   </section>
  )
}

export default Works
