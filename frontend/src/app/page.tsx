import Footer from '../components/Footer/footer';
import Navbar from '../components/Header/navbar';
import Slider from '../components/slider';
import Title from '../components/title';


export default function Home() {
  return (
    <>
      <div style={{ color: 'black', background: 'linear-gradient(to bottom, white, #b2f5ea)' }}>
        <main className="flex flex-col min-h-screen mt-16 lg:mt-[84px]">
          <Navbar />
          <Slider />
          <Title />
        </main>
        <Footer />
      </div>
    </>
  );
}
