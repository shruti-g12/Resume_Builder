import React, { useRef } from "react";
import { useSelector } from "react-redux";

export const Resume3toPrint = () => {
  // Get personal information from Redux store
  const personalinfo = useSelector((state) => state.personalInfo);
  // Get work experience data from Redux store
  const experiences = useSelector((state) => state.workexperience);
  // Get education information from Redux store
  const educationData = useSelector((state) => state.educationInfo);
  // Get skills data from Redux store
  const skillList = useSelector((state) => state.skills);
  // Reference for the resume to be printed
  const resumeRef = useRef();

  return (
    <div>
      <div className="row">
        {/* Resume content with border and padding */}
        <div
          className="col-sm-12 border mt-3"
          style={{ paddingLeft: "40px", marginRight: "" }}
          ref={resumeRef}
        >
          <div className="row bg-success text-white">
            <div className="col-sm-6">
              {/* Display personal name */}
              <div>
                <h3>
                  {personalinfo.firstName} {personalinfo.lastName}
                </h3>
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              {/* Display personal contact details */}
              <ul type="none">
                {personalinfo.email}
                <br></br>
                <div className="d-flex justify-content-end">
                  {personalinfo.mobile}
                  <br></br>
                </div>
                <div className="d-flex justify-content-end">
                  {personalinfo.address}
                  <br></br>
                </div>
                <div className="d-flex justify-content-end">
                  {personalinfo.state}
                </div>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div>
            <div>
              <h3 className="text-success">About</h3>
            </div>
            <div>
              {/* Display personal objective */}
              {personalinfo.objective}
            </div>
          </div>

          <div className="row">
            <h4 className="text-success">Work Experience</h4>
            <hr></hr>
            {/* Display work experience */}
            {Object.entries(experiences).map(([id, experience]) => (
              <div key={id}>
                <h5 className="text-success">Experience {id}</h5>
                <p>
                  <b>Job Title: </b>
                  {experience.jobTitle}
                </p>
                <p>
                  <b>Organization Name: </b>
                  {experience.organizationName}
                </p>
                <p>
                  <b>Start Year: </b>
                  {experience.startYear}
                </p>
                <p>
                  <b>End Year: </b>
                  {experience.endYear}
                </p>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-sm-6">
              {/* Display education information */}
              <div>
                <h3 className="text-success">Education</h3>
              </div>
              <div>
                <b>Graduation - </b>
                {educationData.graduation === ""
                  ? "Graducation"
                  : `${educationData.graduation}`}
              </div>
              <div>
                <b>University - </b>
                {educationData.university}
              </div>
              <div>
                <b>Degree - </b>
                {educationData.degree}
              </div>
              <div>
                <div>
                  {educationData.startYear} - {educationData.endYear}
                </div>
              </div>
            </div>
            <div className="col-sm-6"></div>
            <div className="mt-2">
              <h4 className="text-success">Skills</h4>
            </div>
            <div>
              {/* Display list of skills */}
              <div className="row">
                {Object.entries(skillList).map(([id, data]) => (
                  <div key={id}>
                    <ul>
                      <li>{data.skill}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-success mt-2" style={{ height: "10px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
