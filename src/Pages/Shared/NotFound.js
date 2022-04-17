import React from "react";
import notfound from "../../images/notfound.webp";
import PageTitle from "./PageTitle";

const NotFound = () => {
  return (
    <div>
      <PageTitle title="Page Not Found"></PageTitle>
      <img className="w-100" src={notfound} alt="404 error" />
    </div>
  );
};

export default NotFound;
