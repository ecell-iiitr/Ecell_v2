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
      className="bg-[#00000080] relative  md:px-12 sm:px-8 px-4 w-[100%] min-h-[100vh]"
    >
      <h1 className="text-center mb-8 font-[Varela] text-[#8F8EE9] font-bold text-5xl">
        TIMELINE
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="1 Dec - 1 Feb"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className=" font-bold text-xl text-[#72F37B]">
            REGISTRATION BEGINS
          </h1>
          <p>
            Registration opens up for students to register with their respective
            teams and project ideas for Hackathon.
          </p>
        </VerticalTimelineElement>
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
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="22 Feb - 23 Feb"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-[#72F37B] font-bold text-xl">
            Code Kurukshetra MAIN EVENT
          </h1>
          <p>
            Code Kurukshetra will be a two-day event consisting of various guest
            lectures, workshops, and project evaluation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="23 Feb"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-[#72F37B] font-bold text-xl">
            RESULT DECLARATION
          </h1>
          <p>
            The ultimate hacker will be revealed by our Judging Panel on 17th
            April 2023
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;
