// src/pages/Home.tsx
import Hero from '../sections/Hero';
import Partners from '../sections/Partners';
// import About from '../sections/About';
import Services from '../sections/Services';
import Blog from '../sections/Blog';
// import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      {/* <About /> */}
      <Services />
      <Blog />
      {/* <Contact /> */}
    </>
  );
};

export default Home;