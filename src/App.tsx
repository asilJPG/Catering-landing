import {BagDrawer} from './components/BagDrawer';
import {Configurator} from './components/Configurator';
import {EquipmentCatalog} from './components/EquipmentCatalog';
import {Footer} from './components/Footer';
import {MenuCatalog} from './components/MenuCatalog';
import {Navbar} from './components/Navbar';
import {PackagesSection} from './components/PackagesSection';
import {Showcase} from './components/Showcase';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Showcase />
        <MenuCatalog />
        <EquipmentCatalog />
        <PackagesSection />
        <Configurator />
      </main>
      <Footer />
      <BagDrawer />
    </>
  );
}
