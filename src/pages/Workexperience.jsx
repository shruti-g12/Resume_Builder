import React, { useState } from "react";
import { SideComponent } from "./SideComponent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { experienceData } from "../redux/action";

export const Workexperience = () => {
  const dispatch = useDispatch();
  //user data that is store here
  const [experiences, setExperiences] = useState([
    { id: 1, jobTitle: "", startYear: "", organizationName: "", endYear: "" },
  ]);

  // adding new experience 
  const addNewExperience = () => {
    const newExperience = {
      id: experiences.length + 1,
      jobTitle: "",
      startYear: "",
      organizationName: "",
      endYear: "",
    };
    setExperiences([...experiences, newExperience]);
  };

  //dispatch the ata that can send to other component using redux
  const handleClick = () => {
    dispatch(experienceData(experiences));
  };

  //set the data to state
  const handleChange = (id, field, value) => {
    const updatedExperiences = experiences.map((experience) =>
      experience.id === id ? { ...experience, [field]: value } : experience
    );
    setExperiences(updatedExperiences);
  };

  //remove the new added experience
  const removeExperience = (id) => {
    const updatedExperiences = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperiences(updatedExperiences);
  };

  return (
    <div className="container">
      <div className="row">
        {/* side component is added in each page */}
        <div className="col-sm-4 ">
          <SideComponent />
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-12 mt-3">
              <h4>Work Experience</h4>
            </div>
            {/* mapping the experience */}
            {experiences.map((experience, index) => (
              <div className="row" key={experience.id}>
                <div className="col-sm-12">
                  <p>
                    <b>Experience {experience.id}</b>
                  </p>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-4 p-2">
                  <label>Job Title</label>
                  <input
                    className="form-control"
                    id={`jobTitle-${experience.id}`}
                    type="text"
                    value={experience.jobTitle}
                    onChange={(e) =>
                      handleChange(experience.id, "jobTitle", e.target.value)
                    }
                  />
                  <label>Start Year</label>
                  <input
                    className="form-control"
                    id={`startYear-${experience.id}`}
                    type="date"
                    value={experience.startYear}
                    onChange={(e) =>
                      handleChange(experience.id, "startYear", e.target.value)
                    }
                  />
                </div>
                <div className="col-sm-4 p-2">
                  <label>Organization Name</label>
                  <input
                    className="form-control"
                    id={`organizationName-${experience.id}`}
                    type="text"
                    value={experience.organizationName}
                    onChange={(e) =>
                      handleChange(
                        experience.id,
                        "organizationName",
                        e.target.value
                      )
                    }
                  />
                  <label>End Year</label>
                  <input
                    className="form-control"
                    id={`endYear-${experience.id}`}
                    type="date"
                    value={experience.endYear}
                    onChange={(e) =>
                      handleChange(experience.id, "endYear", e.target.value)
                    }
                  />
                </div>
                {/* delete the newly added experience */}
                <div className="col-sm-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeExperience(experience.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* adding the new experience */}
            <div className="col-sm-12 d-flex justify-content-center mt-3">
              <button className="btn text-primary" onClick={addNewExperience}>
                Add New
              </button>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-4"></div>
              <div className="col-sm-3 d-flex justify-content-end align-items-center">
                <button
                  className="form-control me-3"
                  style={{ border: "2px solid blue" }}
                >
                  <Link to="/personalinfo" className="text-decoration-none">
                    Back
                  </Link>
                </button>
                <Link
                  to="/education"
                  className="text-decoration-none bg-primary text-white p-2 rounded"
                  onClick={handleClick}
                >
                  Next
                </Link>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
