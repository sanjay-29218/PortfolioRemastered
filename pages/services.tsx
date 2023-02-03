import React from "react";
import Layout from "../components/Layout";
import ServiceBox from "../components/ServiceBox";
const ServiceScreen = () => {
  return (
    <Layout>
      <div>
        <p className='text-white text-2xl'>
          My <span className="primary ml-1">Services</span>
        </p>
        <h1 className="font-bold text-white p-4 text-4xl">What I Do</h1>
        <div className="flex gap-20 p-5 ">
          {[
            "webdev",
            "mobiledev",
            "ui/ux",
          ].map((service) => (
            <ServiceBox service={service} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServiceScreen;
