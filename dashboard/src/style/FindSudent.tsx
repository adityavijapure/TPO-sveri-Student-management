// FindStudent.js
import '../style/MidBox.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

function FindStudent({ onSearch }) {
  const [prn, setPrn] = useState("");

  const handleSearch = () => {
    // Pass the entered PRN to the parent component
    onSearch(prn);
  };

  return (
    <div>
      <div className='MidSearchBox'>
        <div className='SearchInput'>
          <input 
            type='text' 
            placeholder='Enter PRN NO' 
            value={prn} 
            onChange={(e) => setPrn(e.target.value)} 
          />
          <button onClick={handleSearch}><i><FaSearch/></i></button>
        </div>
      </div>
    </div>
  );
}

export default FindStudent;
