import SlideShow from './Carousel';
import About from './About';
import Services from './Services';
import Works from './Works';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <>
      <SlideShow />
      <div className="mt-5">
        <About />
      </div>
      <Services />
      <Works />
      <Newsletter />
    </>
  )
}

export default Home;
