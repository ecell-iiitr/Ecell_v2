import Image from "next/image";
import ContactForm from "./components/ContactForm";
import TeamMemberCard from "./components/TeamMemberCard";
import InspirationalSpeakerCard from "./components/InspirationalSpeakerCard";
import HighlightsFlipCard from "./components/HighlightsFlipCard";
import GalleryMassonary from "./components/GalleryMassonary";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <GalleryMassonary />
    </div>
  );
}
