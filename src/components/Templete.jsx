import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { templete } from "../redux/action";

// The Templete component allows users to select a resume template
export const Templete = () => {
  const dispatch = useDispatch();

// Function to handle the template selection and dispatch the selected template to the Redux store
  const handleLink = (templeteData) => {
    dispatch(templete(templeteData));
  };

  return (
    <div className="container p-1">
      <div className="row justify-content-center" style={{ marginTop: "100px" }}>
        {["templete1", "templete2", "templete3", "templete4"].map((template, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          >

            {/* Link to navigate to the personal information form and set the selected template */}
            <div className="template-card">
              <Link
                onClick={() => handleLink(template)}
                className="adjustButton text-decoration-none"
                to="/personalinfo"
              >
                <h4 className="temp">Use Template</h4>
              </Link>
              {/* Display the image of the template */}
              <img
                src={
                  index === 0
                    ? "https://th.bing.com/th/id/R.866332ba4c19adaf833a529f58752cb0?rik=W73TBQNy3WT7kA&riu=http%3a%2f%2fmthomearts.com%2fwp-content%2fuploads%2f2019%2f08%2fteacher-resume-examples-teacher-resume-sample.jpg&ehk=niwFiSfHxoXjAxSo9o5C2wyPb94fBsWQZLLDieaHynQ%3d&risl=&pid=ImgRaw&r=0"
                    : index === 1
                    ? "https://images.freecreatives.com/wp-content/uploads/2015/05/Free-Resume-PSD-Template_full_preview.png"
                    : index === 2
                    ? "https://th.bing.com/th/id/OIP.EdefcUav0VkcASrsvZkFCwHaKf?pid=ImgDet&w=208&h=294&c=7&dpr=1.5"
                    : "https://cdn.enhancv.com/images/750/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9GTVRVcmh5SXlSNVVEemZUUlRPS0tDdmkzNTM5TUl1b09EM1FMSTZaL2ltYWdlLnBuZw~~..png"
                }
                className="img-fluid"
                alt={`Template ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
