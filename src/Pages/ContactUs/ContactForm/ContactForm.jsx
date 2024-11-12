import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <form className="bg-dark-300 dark:bg-dark-700 rounded-lg text-dark-900 dark:text-white py-5 md:py-14 lg:my-20 space-y-5">
      <div className="md:flex gap-5 justify-center lg:px-36 md:px-20 px-5">
        <label className="form-control w-full lg:max-w-xl md:max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full lg:max-w-xl md:max-w-xs"
          />
        </label>
        <label className="form-control w-full lg:max-w-xl md:max-w-xs">
          <div className="label">
            <span className="label-text">Phone Number</span>
          </div>
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            className="input input-bordered w-full lg:max-w-xl md:max-w-xs"
          />
        </label>
      </div>
      <label className="form-control w-full lg:px-36 md:px-20 px-5 mx-auto">
        <div className="label">
          <span className="label-text">Email address</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="input input-bordered w-full "
        />
      </label>
      <div className="lg:px-36 md:px-20 px-5 mx-auto">
        <label>
          <div className="label">
            <span className="label-text">Type Your Message</span>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full textarea textarea-bordered lg:h-60 md:h-40 h-28"
          ></textarea>
        </label>
      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className="btn btn-primary btn-outline flex gap-3 md:text-xl text-lg"
        >
          <FaPaperPlane />
          Sent Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
