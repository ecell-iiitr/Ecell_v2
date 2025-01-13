import Image from "next/image";
import ContactForm from "./components/ContactForm";
import TeamMemberCard from "./components/TeamMemberCard";
import InspirationalSpeakerCard from "./components/InspirationalSpeakerCard";
import HighlightsFlipCard from "./components/HighlightsFlipCard";
import GalleryMassonary from "./components/GalleryMassonary";
import Navbar from "./components/NavBar";
export default function Home() {
  return (
  <div>
  <main className="min-h-screen bg-gray-100">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-white-600 text-white">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to E-Cell</h1>
        <p className="text-xl mb-8">Empowering Future Entrepreneurs</p>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </div>
    </section>

    {/* Speakers Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Inspirational Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InspirationalSpeakerCard />
          <InspirationalSpeakerCard />
          <InspirationalSpeakerCard />
        </div>
      </div>
    </section>

    {/* Highlights Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightsFlipCard />
          <HighlightsFlipCard />
          <HighlightsFlipCard />
          <HighlightsFlipCard />
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <GalleryMassonary />
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
  </div>
  );
}
