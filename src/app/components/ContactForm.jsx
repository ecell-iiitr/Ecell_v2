"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && subject && message) {
      // Process the form submission
      console.log({ name, email, subject, message });
    }
  };

  const isButtonDisabled = !name || !email || !subject || !message;

  return (
    <div className="flex flex-col gap-[32px] w-full items-center justify-center">
      <p
        className="text-center"
        style={{
          fontFamily: "var(--font-bebas-neue), sans-serif",
          fontSize: "54px",
          color: "#BD9F67",
        }}
      >
        Want to GET In touch? mail us
      </p>
      <form
        className="flex flex-col gap-[15px] w-full items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="max-w-[684px] w-full rounded-[8px] h-[50px] py-[11.5px] px-[20px] bg-[#D9D9D9]"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="max-w-[684px] w-full rounded-[8px] h-[50px] py-[11.5px] px-[20px] bg-[#D9D9D9]"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="max-w-[684px] w-full rounded-[8px] h-[50px] py-[11.5px] px-[20px] bg-[#D9D9D9]"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="max-w-[684px] w-full rounded-[8px] h-[150px] py-[11.5px] px-[20px] bg-[#D9D9D9] resize-none"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-[200px] h-[54px] mt-[15px] bg-[#BD9F67] rounded-[9999px] flex items-center justify-center gap-[12px] ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{
            border: "3px solid #FFFFFF4D",
            boxShadow: "0px 10px 20px 0px #00000033",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="font-[500] text-[20px] text-[#FFF] font-poppins">
            Send
          </p>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${
              isHovered ? "transform translate-x-2" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4951 2.43896C7.11012 2.43896 2.74512 6.80396 2.74512 12.189C2.74512 17.574 7.11012 21.939 12.4951 21.939C17.8801 21.939 22.2451 17.574 22.2451 12.189C22.2451 6.80396 17.8801 2.43896 12.4951 2.43896ZM16.7751 12.719C16.9156 12.5783 16.9945 12.3877 16.9945 12.189C16.9945 11.9902 16.9156 11.7996 16.7751 11.659L13.7751 8.65897C13.7065 8.58528 13.6237 8.52618 13.5317 8.48518C13.4397 8.44419 13.3403 8.42215 13.2396 8.42037C13.1389 8.4186 13.0389 8.43712 12.9455 8.47484C12.8521 8.51256 12.7673 8.56871 12.6961 8.63993C12.6249 8.71115 12.5687 8.79598 12.531 8.88937C12.4933 8.98276 12.4747 9.08278 12.4765 9.18349C12.4783 9.28419 12.5003 9.3835 12.5413 9.4755C12.5823 9.5675 12.6414 9.6503 12.7151 9.71896L14.4351 11.439H8.74512C8.54621 11.439 8.35544 11.518 8.21479 11.6586C8.07413 11.7993 7.99512 11.9901 7.99512 12.189C7.99512 12.3879 8.07413 12.5786 8.21479 12.7193C8.35544 12.8599 8.54621 12.939 8.74512 12.939H14.4351L12.7151 14.659C12.6414 14.7276 12.5823 14.8104 12.5413 14.9024C12.5003 14.9944 12.4783 15.0937 12.4765 15.1944C12.4747 15.2951 12.4933 15.3952 12.531 15.4886C12.5687 15.582 12.6249 15.6668 12.6961 15.738C12.7673 15.8092 12.8521 15.8654 12.9455 15.9031C13.0389 15.9408 13.1389 15.9593 13.2396 15.9576C13.3403 15.9558 13.4397 15.9337 13.5317 15.8927C13.6237 15.8518 13.7065 15.7927 13.7751 15.719L16.7751 12.719Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
