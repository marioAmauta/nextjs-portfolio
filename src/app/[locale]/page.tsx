import { unstable_setRequestLocale } from "next-intl/server";

import { AboutSection, ContactSection, HeroSection, ProjectsSection } from "@/components/sections";

export default function HomePage({ params: { locale } }: NextPageProps) {
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
