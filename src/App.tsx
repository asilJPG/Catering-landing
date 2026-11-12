import {Corporate, Socials} from './components/Corporate';
import {Extras} from './components/Extras';
import {Faq} from './components/Faq';
import {Footer} from './components/Footer';
import {Formats} from './components/Formats';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {MainMenu} from './components/MainMenu';
import {Marquee} from './components/Marquee';
import {Menus} from './components/Menus';
import {Order, OrderBar} from './components/Order';
import {Features, Steps} from './components/Sections';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Formats />
        <Menus />
        <MainMenu />
        <Extras />
        <Order />
        <Features />
        <Steps />
        <Corporate />
        <Socials />
        <Faq />
      </main>
      <Footer />
      <OrderBar />
    </>
  );
}
