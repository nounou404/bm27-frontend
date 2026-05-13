import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#C62128] font-bold text-lg font-['Poppins']">BM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Poppins'] font-bold text-lg leading-tight">BM27</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#D4AF37]">
                  SERVICES
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t('footer_tagline')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-['Poppins'] text-[#D4AF37]">
              {t('contact_title')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-[#C62128]" />
                <span className="text-sm">{t('contact_email')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-[#C62128]" />
                <span className="text-sm">{t('contact_phone')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#C62128]" />
                <span className="text-sm">{t('contact_address')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-['Poppins'] text-[#D4AF37]">
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                { label: t('nav_home'), id: 'hero' },
                { label: t('nav_services'), id: 'services' },
                { label: t('nav_contact'), id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BM27 SERVICES. {t('footer_rights')}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#C62128] flex items-center justify-center hover:bg-[#a81b22] transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
