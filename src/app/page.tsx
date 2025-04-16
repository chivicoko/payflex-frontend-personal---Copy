import CallToAction from "@/components/home/CallToAcion";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import GiftCards from "@/components/home/GiftCards";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Testimonials from "@/components/home/Testimonials";
import VirtualCards from "@/components/home/VirtualCards";

const HomePage: React.FC = () => {

  return (
    <div className='min-h-screen' id="home">
      <Navbar/>
      <Hero />
      <Features />
      <VirtualCards />
      <GiftCards />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
