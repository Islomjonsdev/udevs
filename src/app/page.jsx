import ErpSystem from "@/components/ErpSystem/ErpSystem";
import Hero from "@/components/Hero/Hero";
import Mobile from "@/components/Mobile/Mobile";
import OurServices from "@/components/OurServices/OurServices";
import Team from "@/components/Team/Team";
import UiUx from "@/components/UiUx/UiUx";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <Team />
      <Mobile />
      <ErpSystem />
      <UiUx />
    </>
  );
}
