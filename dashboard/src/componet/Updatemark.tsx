import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

function UpdateMark() {
  const [prn, setPrn] = useState(""); // Changed to string type
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [Year, setYear] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    if (prn) {
      // Fetch student details when PRN changes
      getStudentDetails();
    }
  }, [prn]);

  const getStudentDetails = async () => {
    try {
      const docRef = doc(db, `students/${prn}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStudentDetails(docSnap.data());
      } else {
        setStudentDetails(null);
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting student details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!prn || !subject || !marks) {
        console.error("All fields are required");
        return;
      }

      let markRef;
      if (subject === "Academics") {
        const academicYear = `${Year}`;
        markRef = doc(db, "marks", prn, subject, academicYear);
      } else {
        markRef = doc(db, "marks", prn, subject, subject);
      }

      await setDoc(markRef, { marks: parseInt(marks) });

      console.log(`Marks updated successfully for ${subject}`);

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
          {studentDetails && (
            <div>
              <p>PRN: {studentDetails.prn}</p>
              <p>Name: {studentDetails.name}</p>
              <p>Branch: {studentDetails.branch}</p>
              {/* Display more student details here */}
            </div>
          )}
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
                    <option value="Academics">Academics</option>
                    <option value="ExtracurricularActivity">Extracurricular Activity</option>
                    <option value="mockInterview">Mock Interview</option>
                    <option value="TrainingAttendance">Training Attendance</option>
                    <option value="TrainingAssessments">Training Assessment</option>
                    <option value="Behavior">Behavior</option>
                    {/* Add more subjects */}
                  </select>
                </div>
              </div>
              {subject === "mockInterview" && (
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
                </div>
              )}

              {/* Add more years */}
              {subject === "Academics" && (
                <div className="row">
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
                      <option value="1st Year- B.Tech">1st Year- B.Tech</option>
                      <option value="2nd Year- B.Tech">2nd Year- B.Tech</option>
                      <option value="3rd Year- B.Tech">3rd Year- B.Tech</option>

                      {/* Add more semesters */}
                    </select>
                  </div>
                </div>
              )}

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
