import React, { useRef } from "react";
import { useSelector } from "react-redux";

export const Resume2toPrint = () => {
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
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 border mt-3"
          style={{ paddingLeft: "12px" }}
          ref={resumeRef}
        >
          <div className="row p-2 bg-primary">
            <div className="col-sm-4 d-flex flex-column">
              {/* Display personal information */}
              <h5>
                {personalinfo.firstName} {personalinfo.lastName}
              </h5>
            </div>
            <div className="col-sm-8">
              <p>{personalinfo.objective}</p>
            </div>
          </div>

          <div className="row mt-3 p-2">
            <div className="col-sm-5">
              <h3 className="text-primary">Personal Details</h3>
              {/* Display personal details */}
              <ul>
                <b>
                  <li>Email:</li>
                </b>{" "}
                {personalinfo.email}
                <b>
                  <li>Mobile:</li>
                </b>{" "}
                {personalinfo.mobile}
                <b>
                  <li>Address:</li>
                </b>{" "}
                {personalinfo.address}
                <b>
                  <li>Country:</li>
                </b>{" "}
                {personalinfo.state}
              </ul>
              <div>
                <h4 className="text-primary">Skills</h4>
              </div>
              <div className="row">
                {/* Display list of skills */}
                {Object.entries(skillList).map(([id, data]) => (
                  <div key={id}>
                    <ul>
                      <li>{data.skill}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-12">
                  <h4 className="text-primary">Work Experience</h4>
                  <hr />
                </div>
              </div>
              <div className="row">
                {/* Display work experience */}
                {Object.entries(experiences).map(([id, experience]) => (
                  <div key={id}>
                    <h5>Experience {id}</h5>
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
              <div className="row mt-5">
                <div className="col-sm-12">
                  <h4 className="text-primary">Education</h4>
                  {/* Display education information */}
                  <div>
                    <b>Graduation - </b>
                    {educationData.graduation === ""
                      ? "Graduation"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
