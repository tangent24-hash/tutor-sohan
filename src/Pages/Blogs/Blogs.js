import React from "react";
import PageTitle from "../Shared/PageTitle";

const Blogs = () => {
  return (
    <div className="row g-3 m-2">
      <PageTitle title="Blogs"></PageTitle>
      <div className="col-12 col-md-4">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">
              Difference between authorization and authentication
            </h5>
            <p className="card-text">
              Simply put, authentication is the process of verifying who someone
              is, whereas authorization is the process of verifying what
              specific applications, files, and data a user has access to. The
              situation is like that of an airline that needs to determine which
              people can come on board.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h5>
            <p className="card-text">
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more. Other options are Auth0, Okta, JWT etc.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">
              What other services does firebase provide other than
              authentication
            </h5>
            <p className="card-text">
              Here are many services which Firebase provides, Most useful of
              them are: Cloud Firestore, Cloud Functions, Hosting, Cloud
              Storage, Google Analytics, Predictions, Cloud Messaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
