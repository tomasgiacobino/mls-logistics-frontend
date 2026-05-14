import Hero from '../sections/Hero';
import Partners from '../sections/Partners';
import Services from '../sections/Services';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import AsesoriaManu from '../sections/AsesoriaManu';
import CierreSection from '../sections/CierreSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AsesoriaManu />
      <Services />
      <Partners />
      <Blog />
      <CierreSection />
      <Contact />
    </>
  );
};

export default Home;