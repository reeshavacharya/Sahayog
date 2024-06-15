import Footer from '@app/components/Footer/footer';
import Navbar from '@app/components/Header/navbar'
import Slider from '@app/components/slider';
import Title from '@app/components/title';


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
