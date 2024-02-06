// import React from 'react'
// import gsir4 from '../assets/images/gsir4.png'
import Navbar from '../component/NavBar'
import HomeMain from '../component/HomeMain';



const Dashboard = () => {
  return (<>
    <Navbar/>
  <div className="main_home">
   <h1 className='d-flex align-item-center justify-content-center fs-3 '>Welcome to your Dashboard</h1>
   </div>
    <HomeMain/>
    
   
   
    </>
  )
}

export default Dashboard