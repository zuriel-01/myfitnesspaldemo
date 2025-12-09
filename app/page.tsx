import Navbar from "@/app/components/Navbar";
import Herosection from "@/app/components/Herosection";
import Section1 from "@/app/components/Section1";
import Section2 from "@/app/components/Section2";
import Section3 from "@/app/components/Section3";
import Section4 from "@/app/components/Section4";
import Section5 from "@/app/components/Section5";
import Section6 from "@/app/components/Section6";
import QandA from "@/app/components/QandA";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <QandA/>
      <Footer/>
    </div>
  );
}
