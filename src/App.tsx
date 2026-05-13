import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ClientForm from './components/ClientForm';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-['Inter']">
        <Navbar />
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Testimonials />
        <ClientForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
