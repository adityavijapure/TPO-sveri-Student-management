import React, { useState } from "react";
import { db } from "../firebase";
import { setDoc } from "firebase/firestore";

function Student() {
  const [prn, setPrn] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [per10, setPer10] = useState("");
  const [per12, setPer12] = useState("");
  const [percentageDip, setPerDip] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let convertedMarks10 = 0;
    const percentage = parseInt(per10);
    if (percentage >= 90) {
      convertedMarks10 = 5;
    } else if (percentage >= 80 && percentage < 90) {
      convertedMarks10 = 4;
    } else if (percentage >= 70 && percentage < 80) {
      convertedMarks10 = 3;
    } else if (percentage >= 60 && percentage < 70) {
      convertedMarks10 = 2;
    } else if (percentage >= 50 && percentage < 60) {
      convertedMarks10 = 1;
    }

    try {
      let perAfter10th;
      if (per12 === "hsc") {
        if (!per10 || !per12) {
          throw new Error("Please provide both 10th percentage and 12th percentage.");
        }
        perAfter10th = per12;
      } else if (per12 === "diploma") {
        if (!per10 || !per12) {
          throw new Error("Please provide both 10th percentage and diploma marks.");
        }
        perAfter10th = percentageDip;
      } else {
        throw new Error("Please select either 12th - HSC or Diploma.");
      }

      await db.collection("students").doc(prn).set({
        name: name,
        prn: prn,
        branch: branch,
        convertedMarks10: convertedMarks10,
        per10: per10,
        perAfter10th: perAfter10th,
      });

      console.log("Student added successfully!");

      const semesters = ["Academics", "ExtracurricularActivity", "mockInterview", "TrainingAttendance", "TrainingAssessments", "Behavior"];
      for (const semester of semesters) {
        let semesterRef;
        if (semester === "Academics") {
          const years = ["1st Year- B.Tech", "2nd Year- B.Tech", "3rd Year- B.Tech"];
          for (const year of years) {
            semesterRef = db.collection("marks").doc(prn).collection(semester).doc(year);
            await setDoc(semesterRef, { marks: 0 });
            console.log(`Marks collection created successfully for ${year}`);
          }
        } else {
          semesterRef = db.collection("marks").doc(prn).collection(semester).doc(semester);
          await setDoc(semesterRef, { marks: 0 });
          console.log(`Marks collection created successfully for ${semester}`);
        }
      }
  
      setName("");
      setPrn("");
      setBranch("");
      setPer10("");
      setPer12("");
      setPerDip("");
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
          <div className="info table">
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
                    required
                    onChange={(e) => setPrn(e.target.value)}
                  />
                </div>
              </div>


              <div className="row">
                <div className="col-25">
                  <label>10th Percentage </label>
                </div>
                <div className="col-75">
                  <input
                    type="number" // Changed to accept string
                    id="10th"
                    name="percent10th"
                    placeholder="Enter 10th percentage."
                    value={per10}
                    required
                    onChange={(e) => setPer10(e.target.value)}
                  />
                </div>
              </div>


              <div className="row">
                <div className="col-25">
                  <label>After 10th what ??</label>
                </div>
                <div className="col-75">
                <select
                    id="per12"
                    name="percentage"
                    value={branch}
                    onChange={(e) => setPer12(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="hsc">12th- HSC</option>
                    <option value="diploma">Diploma</option>
                    
                  </select>
                </div>
              </div>
             
              {per12 === "hsc" && (
               <div className="row">
                 <div className="col-25">
                   <label>12th Percentage</label>
               </div>
                <div className="col-75">  
                 <input
                 type="number"
                  id="12th"
                  name="percent12th"
                  placeholder="Enter 12th percentage."
                  value={per12}
                  required
                   onChange={(e) => setPer12(e.target.value)}
                  />
               </div>
              </div>
              )}
              {per12 === "diploma" && (
              <div className="row">
                <div className="col-25">
                  <label>Diploma Marks</label>
              </div>
             <div className="col-75">
              <input
                type="number"
                id="diploma"
                name="diplomaMarks"
                placeholder="Enter diploma marks."
                value={percentageDip}
                required
                onChange={(e) => setPerDip(e.target.value)}
              />
            </div>
              </div>
            )}

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
                    <option value="en_tc">EN & TC</option>
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
