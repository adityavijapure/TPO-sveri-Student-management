import  { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

function UpdateMark() {
  const [prn, setPrn] = useState(0); // Changed to accept number
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = async () => {
   
    try {
      // Ensure all fields are filled
      if (!prn || !semester || !subject || !marks) {
        console.error("All fields are required");
        return;
      }

      // Check if the semester document exists
      const semesterRef = doc(db, `marks/${prn}/${semester}`);
      const semesterSnap = await getDoc(semesterRef); // Changed to getDoc

      if (semesterSnap.exists()) {
        // Update marks for the selected subject and semester
        await updateDoc(semesterRef, { [subject]: parseInt(marks) });
        console.log("Marks updated successfully!");
      } else {
        // Create a new semester document and update marks
        await setDoc(semesterRef, { [subject]: parseInt(marks) });
        console.log("New semester document created with marks!");
      }

      // Clear the form after submission
      setPrn(0); // Changed to reset to number
      setSemester("");
      setSubject("");
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
                    type="number" // Changed to accept number
                    id="prn"
                    name="prn"
                    placeholder="Enter PRN.."
                    value={prn}
                    onChange={(e) => setPrn(parseInt(e.target.value))} // Parse string to number
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
                    <option value="subject1">Subject 1</option>
                    <option value="subject2">Subject 2</option>
                    <option value="subject3">Subject 3</option>
                    {/* Add more subjects */}
                  </select>
                </div>
              </div>
              <div className="row">
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
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    {/* Add more semesters */}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Marks</label>
                </div>
                <div className="col-75">
                  <input
                    type="number" // Changed to accept number
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

export default UpdateMark;