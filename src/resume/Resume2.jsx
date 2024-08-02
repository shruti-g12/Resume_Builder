import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Component for Resume2 page
export const Resume2 = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const skillList = useSelector((state) => state.skills);
  const [fileName, setFileName] = useState("Resume");
  const resumeRef = useRef();

  // Function to handle saving the resume as PDF
  const handleSave = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2, scrollY: -window.scrollY })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
          heightLeft -= pdfHeight;
        }

        pdf.save(`${fileName}.pdf`);
      })
      .catch((err) => console.error("Error creating PDF:", err));
  };
  // Return JSX for Resume2 component
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-8 border mt-3"
          style={{ paddingLeft: "12px" }}
          ref={resumeRef}
        >
          {/* personal details */}
          <div className="row p-2 bg-primary">
            <div className="col-sm-4 d-flex flex-column">
              <h5>{personalinfo.firstName}</h5>
            </div>
            <div className="col-sm-8">
              <p>{personalinfo.objective}</p>
            </div>
          </div>

          <div className="row mt-3 p-2">
            <div className="col-sm-5">
              <h3 className="text-primary">Personal Details</h3>
              <ul>
                <li>
                  <b>Email:</b> {personalinfo.email}
                </li>
                <li>
                  <b>Mobile:</b> {personalinfo.mobile}
                </li>
                <li>
                  <b>Address:</b> {personalinfo.address}
                </li>
                <li>
                  <b>Country:</b> {personalinfo.state}
                </li>
              </ul>
              <div>
                {/* Mapping skills */}
                <h4 className="text-primary">Skills</h4>
                <ul>
                  {Object.entries(skillList).map(([id, data]) => (
                    <li key={id}>{data.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-sm-7">
              <h4 className="text-primary">Work Experience</h4>
              {/* Mapping work experience */}
              <hr />
              {Object.entries(experiences).map(([id, experience]) => (
                <div key={id}>
                  <h5>Experience {id}</h5>
                  <p>
                    <b>Job Title:</b> {experience.jobTitle}
                  </p>
                  <p>
                    <b>Organization Name:</b> {experience.organizationName}
                  </p>
                  <p>
                    <b>Start Year:</b> {experience.startYear}
                  </p>
                  <p>
                    <b>End Year:</b> {experience.endYear}
                  </p>
                </div>
              ))}
              <div className="row mt-5">
                <div className="col-sm-12">
                  <h4 className="text-primary">Education</h4>
                  <p>
                    <b>Graduation:</b>{" "}
                    {educationData.graduation || "Graduation"}
                  </p>
                  <p>
                    <b>University:</b> {educationData.university}
                  </p>
                  <p>
                    <b>Degree:</b> {educationData.degree}
                  </p>
                  <p>
                    {educationData.startYear} - {educationData.endYear}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4 d-flex justify-content-center mt-5">
          <div>
            {/* save resume name as your choice */}
            <h5>Create File Name</h5>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <div className="d-flex mt-2">
              <button className="form-control me-3">
                <Link to="/skills" className="text-decoration-none">
                  Back
                </Link>
              </button>
              {/* Create resume button */}
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
