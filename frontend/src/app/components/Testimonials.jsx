import React from "react";
import person from "../../../public/person.jpg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="max-w-[800px] w-full h-[464px] bg-[#243137] rounded-[50px] flex flex-col items-center gap-[17px] py-[50px]">
      <div className="flex flex-col gap-[9px] items-center justify-center">
        <Image
          src={person}
          alt="person"
          className="w-[100px] h-[100px] object-cover rounded-full "
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <p className="font-poppins font-[600] text-[25px] leading-[30px] text-[#BD9F67] text-center">
            Dharmendra Pradhan
          </p>
          <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#BD9F67] text-center">
            Education Minister of India
          </p>
        </div>
      </div>
      <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#FFF] text-center w-[77%]">
        <span className="font-poppins font-[700] text-[30px]  text-[#BD9F67] leading-[16px] px-1">
          “
        </span>
        In a country like ours where job creation and entrepreneurship are
        critical to become a developed nation, the role of IIT students and
        alumni is vital. IIT Bombay has produced some of the most successful
        entrepreneurs who have gone on to create 1000s of jobs. E-Cell IIT
        Bombay has been instrumental in fostering a culture of innovation among
        its students. I encourage them to support and nurture budding
        entrepreneurs in the country who will play a vital role in shaping
        India’s future.
        <span className="font-poppins font-[700] text-[30px]  text-[#BD9F67] leading-[16px] px-1">
          ”
        </span>
      </p>
    </div>
  );
};

export default Testimonials;
