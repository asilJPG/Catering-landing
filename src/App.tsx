import {Corporate, Socials} from './components/Corporate';
import {Extras} from './components/Extras';
import {Faq} from './components/Faq';
import {Footer} from './components/Footer';
import {Formats} from './components/Formats';
import {Header} from './components/Header';
import {Hero, Promo} from './components/Hero';
import {MainMenu} from './components/MainMenu';
import {Menus} from './components/Menus';
import {Order, OrderBar} from './components/Order';
import {Cases, DeliveryAndPayment, Features, KitchenUniqueness, Reviews, Steps} from './components/Sections';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Promo />
        <Features />
        <Formats />
        <Menus />
        <MainMenu />
        <KitchenUniqueness />
        <Extras />
        <Cases />
        <Order />
        <Steps />
        <Reviews />
        <DeliveryAndPayment />
        <Corporate />
        <Socials />
        <Faq />
      </main>
      <Footer />
      <OrderBar />
    </>
  );
}
