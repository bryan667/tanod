import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ContactHeader from "components/Headers/ContactHeader";
import DarkFooter from "components/Footers/DarkFooter.js";
import ContactForm from "components/Contact/ContactForm";

function ContactMe() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ContactHeader />
        <ContactForm />
        <DarkFooter />
      </div>
    </>
  );
}

export default ContactMe;
