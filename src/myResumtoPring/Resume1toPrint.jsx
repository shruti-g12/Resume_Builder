import React, { useRef } from "react";
import { useSelector } from "react-redux";


//Here the selected resume is to displayed
export const Resume1toPrint = () => {
  const personalinfo = useSelector((state) => state.personalInfo);
  const experiences = useSelector((state) => state.workexperience);
  const educationData = useSelector((state) => state.educationInfo);
  const resumeRef = useRef();
  const skillList = useSelector((state) => state.skills);

  return (
    <div className="container">
      {/* Displayed the Secelct resume */}
      <div className="row">
        <div
          className="col-sm-10 border mt-3"
          style={{ paddingLeft: "12px", marginRight: "" }}
          ref={resumeRef}
        >
          <div className="row p-2" style={{ backgroundColor: "aquamarine" }}>
            <div className="col-sm-4 d-flex  flex-column">
              <h5>
                {personalinfo.firstName} {personalinfo.lastName}
              </h5>
            </div>
            <div>
              {/* displayed the objective of the project */}
              <p>{personalinfo.objective}</p>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
          </div>

          <div className="row mt-3 p-2">
            <div className="col-sm-5">
              {/* display  the personala details */}
              <h6>Personal Details</h6>
              <ul>
                <b>
                  <li>Email</li>
                </b>
                {personalinfo.email}
                <b>
                  <li>Mobile</li>
                </b>
                {personalinfo.mobile}
                <b>
                  <li>Address</li>
                </b>
                {personalinfo.address}
                <b>
                  <li>Country</li>
                </b>
                {personalinfo.state}
              </ul>
              <div>
                <h4 style={{ color: "aquamarine" }}>Skills</h4>
              </div>
              {/* displaye the skill  */}
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
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-10">
                  {/* display the wrok experience */}
                  <h4 style={{ color: "aquamarine" }}>Work Experience</h4>
                </div>
                <hr />
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
              </div>

              <div className="row">
                <h4>Work Experience List</h4>
                {Object.entries(experiences).map(([id, experience]) => (
                  <div key={id}>
                    <h5>Experience {id}</h5>
                    <p>Job Title: {experience.jobTitle}</p>
                    <p>Start Year: {experience.startYear}</p>
                    <p>Organization Name: {experience.organizationName}</p>
                    <p>End Year: {experience.endYear}</p>
                  </div>
                ))}
              </div>

              <div className="row mt-5">
                <div className="col-sm-10">
                  <div>
                    <h4 style={{ color: "aquamarine" }}>Education</h4>
                  </div>
                  {/* Display the education details */}
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
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
              </div>

              <div className="row mt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-2"
          style={{ paddingLeft: "140px", marginTop: "150px" }}
        ></div>
      </div>
    </div>
  );
};
