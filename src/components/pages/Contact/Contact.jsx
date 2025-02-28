import React from "react";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import ServiceTime from "./ServiceTime";

const Contact = () => {
  return (
    <>
      <div>
        <ContactBanner />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ContactForm />
      </div>
      <div className="bg-[#071c1f]">
        <ServiceTime/>
      </div>
    </>
  );
};

export default Contact;
