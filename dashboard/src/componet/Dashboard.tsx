import FindSudent from '../style/FindSudent';
import InformationBox from '../componet/InformationBox';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Dashboard() {
  const [prnNumber, setPrnNumber] = useState('');

  const handleSearch = (prn) => {
    setPrnNumber(prn);
  };

  return (
    <div className='Midbox'>
      <div className='MidNav'>
        <h1>Dashboard</h1>
        <div className='hamburgerMenu'>
          <a href='#'>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
      <div className='MidSelect'>
        <FindSudent onSearch={handleSearch} />
      </div>
      <div className='InformationMainBox'>
        <InformationBox prnNumber={prnNumber} />
      </div>
    </div>
  );
}

export default Dashboard;
