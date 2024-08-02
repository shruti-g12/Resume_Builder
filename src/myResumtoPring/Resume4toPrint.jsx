import React, { useRef } from "react";

import { useSelector } from "react-redux";

export const Resume4toPrint = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const skillList = useSelector((state) => state.skills);
  const resumeRef = useRef();

  return (
    <div>
      <div className="row">
        <div
          className="col-sm-12 border mt-3"
          style={{ paddingLeft: "40px" }}
          ref={resumeRef}
        >
          <div className="row bg-primary text-white">
            <div className="col-sm-6">
              <div>
                <h3 className="">
                  {personalinfo.firstName} {personalinfo.lastName}
                </h3>
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
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
          <div>
            <div>
              <h3 className="text-primary">About</h3>
            </div>
            <div>{personalinfo.objective}</div>
          </div>

          <div className="row">
            <h4 className="text-primary">Work Experience</h4>
            <hr></hr>
            {Object.entries(experiences).map(([id, experience]) => (
              <div key={id}>
                <h5 className="text-primary">Experience {id}</h5>
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
              <div>
                <h3 className="text-primary">Education</h3>
              </div>
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
            <div className="col-sm-6">
              <div>
                <h4 className="text-primary">Skills</h4>
              </div>
              <ul>
                {Object.entries(skillList).map(([id, data]) => (
                  <li key={id}>{data.skill}</li>
                ))}
              </ul>
            </div>
            <div
              className="bg-success container mt-2"
              style={{ height: "10px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
