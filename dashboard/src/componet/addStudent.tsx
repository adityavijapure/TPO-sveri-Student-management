import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

function Student() {
  const [prn, setPrn] = useState(""); // Changed to string type
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Add student details
      await db.collection("students").doc(prn).set({
        name: name,
        prn: prn,
        branch: branch,
      });

      console.log("Student added successfully!");

      // Create marks documents for each semester with default values
      const semesters = ["II", "III", "IV", "V", "VI", "VII", "VIII"];
      semesters.forEach(async (semester) => {
        const semesterRef = db.collection(`marks/${prn}/${semester}`);
        const subjectMarks = {
          Academic: 0,
          ExtracurricularActivity: 0,
          mockInterview: 0,
          TrainingAttendance: 0,
          TrainingAssessments: 0,
          Project: 0,
          Internship: 0,
          MiniProject: 0,
          TechCertifications: 0,
          communicationSkills: 0,
          Behavior: 0,
          Resume: 0,
        };

        for (const [subject, marks] of Object.entries(subjectMarks)) {
          await setDoc(doc(semesterRef, subject), { marks });
        }
      });

      // Clear the form after submission
      setName("");
      setPrn("");
      setBranch("");
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div className="Midbox">
      <div className="MidNav">
        <h1>Add Student</h1>
      </div>
      <div className="InformationMainBox">
        <div className="InfoBox">
          <div className="infotable">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-25">
                  <label>NAME</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name.."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>PRN NO</label>
                </div>
                <div className="col-75">
                  <input
                    type="text" // Changed to accept string
                    id="prn"
                    name="prnNo"
                    placeholder="Enter PRN No.."
                    value={prn}
                    onChange={(e) => setPrn(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>BRANCH</label>
                </div>
                <div className="col-75">
                  <select
                    id="Branch"
                    name="Branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option value="">Select Branch</option>
                    <option value="cse">CSE</option>
                    <option value="entc">ENTC</option>
                    <option value="civil">CIVIL</option>
                    <option value="ele">ELECTRIC</option>
                    <option value="mech">MECHANICAL</option>
                  </select>
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

export default Student;
