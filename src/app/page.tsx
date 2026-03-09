import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CareerSection } from "@/components/CareerSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CareerSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <footer className="border-t border-border/50 py-8">
        <p className="text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Torin. Built with Next.js.
        </p>
      </footer>
    </>
  );
}
