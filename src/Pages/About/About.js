import React from "react";
import PageTitle from "../Shared/PageTitle";

const About = () => {
  return (
    <div className="card  border-0 m-5">
      <PageTitle title="About me"></PageTitle>
      <div className="card-body text-center">
        <h5 className="card-title">Sohanur Rahman</h5>
        <p className="card-text">
          I am a private tutor and I have been teaching for the last 4years. I
          expect and I give my 200% for student's bright future. My teaching
          method is flexible, changes depending on the student's interest.
          However, for a better understanding of the topic, I often use audio
          visual aids. I also take a weekly test to make sure the student is
          thorough with the topic that has been taught.
        </p>
      </div>
    </div>
  );
};

export default About;
