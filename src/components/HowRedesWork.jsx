import React from "react";
import Email from "../assets/img/Icon-16.png";
import classRoom from "../assets/img/Icon-17.png";
import money from "../assets/img/Icon-18.png";
import stick from "../assets/img/Icon-19.png";
import { Container } from "react-bootstrap";

const HowRedesWork = () => {
  return (
    <div id="how-redes-work">
      <Container>
        <div className="how-redes-work">
          <p className="how-redes-work-heading">HOW REDES WORKS?</p>

          <div className="how-redes-work-content">
            <div className="how-redes-work-content-data">
              <img src={Email} alt="email" />
              <img src={stick} alt="stick" />

              <div>
                <p>Request <span className="left">Access</span> to join Redes</p>
                <p>
                  Our team vets the profile and sends a personalised invite once
                  your profile is approved
                </p>
              </div>
            </div>
            <div className="how-redes-work-content-data">
              <img src={classRoom} alt="email" />
              <img src={stick} alt="stick" />

              <div>
                <p>Meet <span className="mid">Relevant</span> connections every week</p>
                <p>
                  Based on your professional Goals interact with relevant
                  communities
                </p>
              </div>
            </div>
            <div className="how-redes-work-content-data">
              <img src={money} alt="email" />
              <img src={stick} alt="stick" />

              <div>
                <p>Find the <span className="right">right candidates</span> & Jobs</p>
                <p>
                  Interact with & Hire the right talent for your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowRedesWork;
