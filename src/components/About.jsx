import React from "react";

export const About = () => {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-lg-7 mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1>Resume Builder</h1>
            </div>
            <div className="col-md-6"></div>
          </div>

          <div className="row mt-5">
            <div>
              In today's competitive job market, having a well-crafted resume is
              essential to making a great first impression. Our mission is to
              empower job seekers by providing them with the tools they need to
              create exceptional resumes that showcase their skills, experience,
              and personality. We believe that everyone deserves a chance to
              shine and secure their dream job, and we're here to help you do
              just that.
              In today's competitive job market, having a well-crafted resume is essential to making a great first impression. Our mission is to empower job seekers by providing them with the tools they need to create exceptional resumes that showcase their skills, experience, and personality. We believe that everyone deserves a chance to shine and secure their dream job, and we're here to help you do just that.
            </div>
          </div>

          <div>
            <h6 className="mt-4">
              <b>Share With Your Friend</b>
            </h6>
          </div>
          {/* here provide the links about the about project that navigate to other pages like instgram github email that you can share */}
          <div className="row">
            <div className="d-flex">
              <div className="">
                <a href="https://github.com/">
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG53.png"
                    alt="GitHub"
                    style={{ height: "30px" }}
                    className="m-2"
                  ></img>
                </a>
              </div>
              <div className="">
                <a href="https://www.instagram.com/accounts/emailsignup/">
                  <img
                    src="https://th.bing.com/th/id/OIP.xa0FgRBsvMi7bmVNCDYsCgAAAA?rs=1&pid=ImgDetMain"
                    alt="Instagram"
                    style={{ height: "30px" }}
                    className="m-2"
                  ></img>
                </a>
              </div>
              <div className="">
                <a href="https://www.linkedin.com/feed/">
                  <img
                    src="https://th.bing.com/th/id/OIP.Wy02oz3GuA6iKVjI7OLvvQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="LinkedIn"
                    style={{ height: "30px" }}
                    className="m-2"
                  ></img>
                </a>
              </div>
              <div className="">
                <a href="mailto:example@example.com">
                  <img
                    src="https://th.bing.com/th/id/OIP.PMTXHvDUmx3pdx09IVmlfQHaHa?w=205&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="Email"
                    style={{ height: "30px" }}
                    className="m-2"
                  ></img>
                </a>
              </div>
            </div>
          </div>

          
        </div>

        <div className="col-lg-5 d-flex align-items-center">
        <img
            class="img-fluid custom-img"
            src="https://thumbs.dreamstime.com/b/designers-concept-flat-design-employees-working-office-scene-man-woman-creating-new-product-development-interface-242916908.jpg"
            alt="Office Scene"
        />
        </div>
      </div>
    </div>
  );
};
