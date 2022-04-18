import React from "react";

const StudentsComments = () => {
  return (
    <div className="container">
      <h1 className="text-info text-center m-5 pt-3">Students Comments</h1>
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Saimun</h5>
              <p className="card-text">
                Classes with Sohanur Rahman have been so worthwhile! Sohanur
                Rahman has an amazing way of breaking things down so that they
                are understandable, and always keeping it light and fun.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Maria</h5>
              <p className="card-text">
                Sohanur Rahman! You are amazing at what you do! Your passion and
                dedication is beyond words! Thank you for getting me through
                this hard quick semester, I honestly would have never passed if
                it was not for your help! Thank you so much once again!
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Imran</h5>
              <p className="card-text">
                Sohanur Rahman has an incredible gift for teaching. His classes
                seem like play but there is a lot of serious learning going on.
                I was already an intermediate/advanced student, but I learned
                something from every class, plus had a lot of fun doing it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsComments;
