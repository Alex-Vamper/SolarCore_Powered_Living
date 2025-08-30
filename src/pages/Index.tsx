import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import PromoVideo from "@/components/PromoVideo";
import ProductAdvertisement from "@/components/ProductAdvertisement";
import TiersCarousel from "@/components/TiersCarousel";
import Testimonials from "@/components/Testimonials";
import DistributorBanner from "@/components/DistributorBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <PromoVideo />
      <ProductAdvertisement />
      <TiersCarousel />
      <Testimonials />
      <DistributorBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
