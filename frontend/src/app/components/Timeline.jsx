import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkHistory } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
const Timeline = () => {
  return (
    <div
      id="schedule"
      className=" relative  md:px-12 sm:px-8 px-4 w-[100%] min-h-[100vh]"
    >
      <h1 className="text-center mb-8 font-[Varela] text-[#BD9F67] font-bold text-5xl pt-10">
        TIMELINE
      </h1>
      <VerticalTimeline>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work bg-bl"
          contentStyle={{ background: "rgb(255,255,255,0.9)", color: "#5c5a5a" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="1 Dec - 1 Feb"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className=" font-bold text-xl text-[#daa94f]">
            REGISTRATION BEGINS
          </h1>
          <p className="text-black">
            Registration opens up for students to register with their respective
            teams and project ideas for Hackathon.
          </p>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
            date=" Apr - 8 Apr"
            iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
            icon={<IoIosSchool className="text-slate-100" />}
          >
            <h1 className="text-yellow-500 font-bold text-xl">PHASE 1 RESULT</h1>
            <p>
              Top 50 teams will be selected based on Idea submission for Round 2
            </p>
          </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255,255,255,0.1)",
            color: "#5c5a5a",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="2021"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-[#daa94f] font-bold text-xl">
            E-Cell, IIIT Ranchi
          </h1>
          <p className="text-black">Establishment of E-Cell in IIIT Ranchi.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255,255,255,0.1)",
            color: "#5c5a5a",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="2016"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-[#daa94f] font-bold text-xl">IIIT RANCHI</h1>
          <p className="text-black">Establishment of IIIT Ranchi.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;
