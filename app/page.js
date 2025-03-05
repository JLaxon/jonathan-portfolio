import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flext-col bg-[#121212]">
      <Navbar />
      <container class="container mx-auto px-12 py-4">
        <HeroSection />
      </container>
    </main>
  );
}
