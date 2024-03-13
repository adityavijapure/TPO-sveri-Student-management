
import '../style/MidBox.css';
import Updatemark from './Updatemark';
import addStudent from './addStudent'
import {Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard';
function MidBox() {
  return (
    <div className='MidMain'>
     <Routes>
        <Route path='/' Component={Dashboard}/>
        <Route path='/updatemark' Component={Updatemark}/>
        <Route path='/addStudent' Component={addStudent}/>
        </Routes>
      {/* <Dashboard/>
      <Updatemark/> */}
    </div>
  )
}

export default MidBox