import React from "react";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div>
        <ContactBanner />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
