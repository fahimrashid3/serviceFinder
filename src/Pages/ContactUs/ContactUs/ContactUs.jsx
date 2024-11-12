import { Helmet } from "react-helmet";
import SectionBanner from "../../../Compunents/SectionBanner/SectionBanner";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";
import Information from "../Information/Information";
import ContactForm from "../ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div className="-mt-20">
      <Helmet>
        <title>ServiceFinder | Contact Us</title>
      </Helmet>
      <SectionBanner
        img={"https://i.ibb.co.com/gVxQNWv/contact-Us.jpg"}
        title="Contact Us"
      ></SectionBanner>
      <SectionTitle
        subHeading={"Visit Us"}
        heading={"Our Location"}
      ></SectionTitle>
      <Information></Information>
      <SectionTitle
        heading="Contact Form"
        subHeading={"Sent Us a Message"}
      ></SectionTitle>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactUs;
