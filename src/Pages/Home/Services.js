import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="container">
      <h1 className="text-info text-center m-5">Take My Tution</h1>
      <div className="row g-4">
        {services.map((service) => (
          <div className="col-12 col-md-3">
            <Service key={service.id} service={service}></Service>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
