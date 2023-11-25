// import React from 'react'
import gsir4 from '../assets/images/gsir4.png'
import Navhome from '../component/NavHome'


const HomePage = () => {
  return (<>
  <Navhome/>

    <div className='main_home '>
        <h1 className='fs-1 text-light'> Hi Welcome to <em className='text-danger'>Asov-tec :(</em></h1>
        <div className='home_img'>
    <img className='home_imge' src={gsir4} />
    </div>
    </div>

   
    </>
  )
}

export default HomePage