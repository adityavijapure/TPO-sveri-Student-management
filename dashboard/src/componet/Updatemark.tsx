import { useState } from "react";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

function UpdateMark() {
  const [prn, setPrn] = useState(""); // Changed to string type
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [Year, setYear] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Ensure all fields are filled
      if (!prn || !subject || !marks) {
        console.error("All fields are required");
        return;
      }


      if (subject === "Academic") {
        const years = ["1st Year- B.Tech", "2nd Year- BTech", "3rd Year- B.Tech"];
        await Promise.all(years.map(async (year) => {
          const markRef = doc(db, `marks/${prn}/Academics/${year}`);
          await setDoc(markRef, { marks: 0 });
          console.log(`Marks updated successfully for ${year}`);
        }));
        console.log("Academics marks updated successfully!");
      } else {
        console.log("Updating marks for subject:", subject);
      }

      if (subject === "ExtracurricularActivity") {
        const markRef = doc(db, `marks/${prn}/ExtracurricularActivity/${subject}`);
        await setDoc(markRef, { marks: parseInt(marks) }, { merge: true });
        console.log("ExtracurricularActivity marks updated successfully!");
      } else {
        console.log("Updating marks for subject:", subject);
      }
      // Clear the form after submission
      setPrn("");
      setSemester("");
      setSubject("");
      setYear("");
      setMarks("");
    } catch (error) {
      console.error("Error updating marks: ", error);
    }
  };
  return (
    <div className="Midbox">
      <div className="MidNav">
        <h1>Update Marks</h1>
      </div>
      <div className="MidSelect">
        {/* Add selection components for selecting student and subject */}
      </div>
      <div className="InformationMainBox">
        <div className="InfoBox">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-25">
                  <label>PRN</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="prn"
                    name="prn"
                    placeholder="Enter PRN.."
                    value={prn}
                    onChange={(e) => setPrn(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Subject</label>
                </div>
                <div className="col-75">
                  <select
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="">Select Subject</option>
                    <option value="Academic">Academics</option>
                    <option value="ExtracurricularActivity">Extracurricular Activity</option>
                    <option value="mockInterview">Mock Interview</option>
                    <option value="TrainingAttendance">Training Attendance</option>
                    <option value="TrainingAssessments">Training Assessment</option>
                    <option value="Behavior">Behavior</option>
                    {/* Add more subjects */}
                  </select>
                </div>
              </div>
              {subject == "mockInterview" ?  <div className="row">
                <div className="col-25">
                  <label>Semester</label>
                </div>
                <div className="col-75">
                  <select
                    id="semester"
                    name="semester"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                  >
                    <option value="">Select Semester</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                    <option value="VI">VI</option>
                    <option value="VII">VII</option>
                    {/* Add more semesters */}
                    </select>
                    </div>
                    </div>:null}

                     {/*Add more years */}
                      {subject == "Academic" ?  <div className="row">
                <div className="col-25">
                  <label>Year</label>
                </div>
                <div className="col-75">
                  <select
                    id="Year"
                    name="year"
                    value={Year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="">Select year</option>
                    <option value="I">Ist Year</option>
                    <option value="II">IInd Year</option>
                    <option value="III">IIIrd Year</option>
                    
                    {/* Add more semesters */}
                    </select>
                    </div>
                     </div>:null}
               
              <div className="row">
                <div className="col-25">
                  <label>Marks</label>
                </div>
                <div className="col-75">
                  <input
                    type="number"
                    id="marks"
                    name="marks"
                    placeholder="Enter marks.."
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateMark;
