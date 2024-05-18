import { AboutSection, ContactSection, HeroSection, ProjectsSection } from "@/components/sections";
import { unstable_setRequestLocale } from "next-intl/server";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
