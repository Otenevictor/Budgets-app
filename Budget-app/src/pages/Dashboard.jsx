// import React from 'react'
// import gsir4 from '../assets/images/gsir4.png'
import Navbar from '../component/NavBar'
import HomeMain from '../component/HomeMain';



const Dashboard = () => {
  return (<>
  <Navbar/>
    {/* <div className='main_home '>
        <h1 className='fs-1 text-light'> Hi Welcome <em className='text-danger'>Asov :(</em></h1>
        <div className='home_img'>
    <img className='home_imge' src={gsir4} />
    </div>
    </div> */}
    <HomeMain/>
    

   
    </>
  )
}

export default Dashboard