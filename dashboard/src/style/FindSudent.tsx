import '../style/MidBox.css';
import { FaSearch } from "react-icons/fa";
function FindSudent() {
  return (
    <div>
      <div className='MidSearchBox'>
        <div className='SearchInput'>
          
          <input type='text' placeholder='Enter PRN NO' />
          <button ><i><FaSearch/></i></button>
          </div>
          <div className='SearchInput'>
          <input type='text' placeholder='Enter Name' />
          <button><i><FaSearch/></i></button>
          </div>

          </div>
          </div>
  )
}

export default FindSudent