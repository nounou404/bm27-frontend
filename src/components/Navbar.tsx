import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, type Language } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: t('lang_en') },
    { code: 'fr', label: t('lang_fr') },
    { code: 'ar', label: t('lang_ar') },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollTo('hero')}
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-[#D4AF37] font-bold text-lg font-['Poppins']">BM</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-['Poppins'] font-bold text-lg leading-tight ${scrolled ? 'text-black' : 'text-black'}`}>
                BM27
              </span>
              <span className={`text-[10px] font-semibold tracking-widest uppercase ${scrolled ? 'text-[#C62128]' : 'text-[#C62128]'}`}>
                SERVICES
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { key: 'nav_home', id: 'hero' },
              { key: 'nav_services', id: 'services' },
              { key: 'nav_contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#C62128] ${
                  scrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {t(item.key)}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#D4AF37] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#C62128]" />
                <span className="text-sm font-medium">{t(`lang_${language}`)}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[120px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${
                          language === lang.code ? 'text-[#C62128] font-semibold bg-red-50' : 'text-gray-700'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-[#C62128] text-white text-sm font-semibold rounded-full hover:bg-[#a81b22] transition-colors"
            >
              {t('hero_cta')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {[
                { key: 'nav_home', id: 'hero' },
                { key: 'nav_services', id: 'services' },
                { key: 'nav_contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#C62128] hover:bg-red-50 rounded-lg transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}
              <div className="flex gap-2 px-4 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-sm border ${
                      language === lang.code
                        ? 'bg-[#C62128] text-white border-[#C62128]'
                        : 'border-gray-200 text-gray-600 hover:border-[#D4AF37]'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
