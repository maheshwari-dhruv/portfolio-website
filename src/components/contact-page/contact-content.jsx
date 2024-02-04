import { sendMail } from "@/api/contact-api";
import ContactFormData from "@/models/contact-model";
import { useState } from "react";

export const ContactContent = () => {
  const [contactData, setContactData] = useState(new ContactFormData());

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", contactData);

    sendMail(contactData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <span className="text-6xl font-bold">Thanks for Connecting!</span>
        <hr className="border-black" />
        <span>Social Media</span>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-stretch gap-2 m-2 justify-stretch name">
            <input
              className="flex-1 p-2"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={contactData.name}
              onChange={handleInputChange}
            />
            <span className="text-5xl font-bold">Name</span>
          </div>
          <div className="flex items-stretch gap-2 m-2 justify-stretch email">
            <input
              className="flex-1 p-2"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={contactData.email}
              onChange={handleInputChange}
            />
            <span className="text-5xl font-bold">Email</span>
          </div>
          <div className="flex items-stretch gap-2 m-2 justify-stretch message">
            <span className="text-5xl font-bold">Message</span>
            <textarea
              className="flex-1 p-2"
              id="message"
              name="message"
              placeholder="Enter your message"
              value={contactData.message}
              onChange={handleInputChange}
            />
            <button className="px-2 py-10 border-2 border-black">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
