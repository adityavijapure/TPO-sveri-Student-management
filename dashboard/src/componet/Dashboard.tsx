import FindSudent from '../style/FindSudent';
import InformationBox from '../componet/InformationBox';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
function Dashboard() {
const [Hidemenu,setHidemenu] =useState(false);

  return (
    <div className='Midbox'>
        <div className='MidNav'>
        <h1>Dashboard</h1>
        <div className='hamburgerMenu'>
        <a href='#' onClick={()=> setHidemenu(!Hidemenu)}> <GiHamburgerMenu/>
        </a>
        </div>
        </div>
        <div className='MidSelect'>
        < FindSudent/>
        </div>
        <div className='InformationMainBox'>
          <InformationBox/>
        </div>
      </div>
  )
}

export default Dashboard