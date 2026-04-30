import Hero from '../sections/Hero';
import Partners from '../sections/Partners';
import Services from '../sections/Services';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import AsesoriaCTA from '../sections/AsesoriaCTA';
import PresentacionManu from '../sections/PresentacionManu';
import CierreSection from '../sections/CierreSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AsesoriaCTA />
      <Services />
      <PresentacionManu />
      <Partners />
      <Blog />
      <CierreSection />
      <Contact />
    </>
  );
};

export default Home;