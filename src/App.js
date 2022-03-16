import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Start from './pages/Start';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';

function App() {
  return (
    <div>
      <Start />
      <Navbar />
      <Home />
      <Products />
      <AboutUs />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
