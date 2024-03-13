import { CgProfile } from "react-icons/cg";
function InformationBox() {
  const data ={
    prn :"89589785466",
    Name :"Aman ",
    Branch :"CSE",
    Class : 'sy',
    Performancerating : "-",
  };
  
  return (
    <div className='InfoBox'>
      <div className='Info1'>
        <div className="profilePhoto">
          <CgProfile />
        </div>
        <div className="infolabel">
        <label>PRN </label>
        <label>Name </label>
        <label>Branch </label>
        <label>Class </label>
        
        <label>Performace Rating</label>
        </div>
        <div className="infolabel">
        <label>:</label>
        <label>: </label>
        <label>: </label>
        <label>: </label>
        </div>
        <div className="infolabel">
        <label>{data.prn} </label>
        <label>{data.Name} </label>
        <label>{data.Branch} </label>
        <label>{data.Class} </label>
        <label>{data.Performancerating} </label>
        </div>
      </div>
      <div className="infotable">
      <table id="customers">
  <tr>
    <th>Criteria</th>
    <th>Max Score</th>
    <th>Obt Score</th>
  </tr>
  <tr>
    <td>Academic</td>
    <td>25</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Extracurricular Activity</td>
    <td>-</td>
    <td>6.5</td>
  </tr>
  <tr>
    <td>Mock Interview</td>
    <td>8</td>
    <td>6.48</td>
  </tr>
  <tr>
    <td>Training Attendance</td>
    <td>10</td>
    <td>4.52</td>
  </tr>
  <tr>
    <td>Training Assesments</td>
    <td>10</td>
    <td>5.5</td>
  </tr>
  <tr>
    <td>Project</td>
    <td>10</td>
    <td>4.5</td>
  </tr>
  <tr>
    <td>Internship</td>
    <td>6</td>
    <td>8.4</td>
  </tr>
  <tr>
    <td>Mini Project</td>
    <td>5</td>
    <td>6.94</td>
  </tr>
  <tr>
    <td>Technical Certifications /cources</td>
    <td>-</td>
    <td>6.94</td>
  </tr>
  <tr>
    <td>Communication Skills</td>
    <td>-</td>
    <td>6.94</td>
  </tr>
  <tr>
    <td>Behaviour</td>
    <td>-</td>
    <td>6.94</td>
  </tr>
  <tr>
    <td>Resume</td>
    <td>5</td>
    <td>6.94</td>
  </tr>
</table>


      </div>
    </div>
  )
}
export default InformationBox