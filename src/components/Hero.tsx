import { motion } from 'framer-motion';
import { ChevronDown, Shield, Clock, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C62128] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C62128]/10 rounded-full"
            >
              <span className="w-2 h-2 bg-[#C62128] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#C62128]">Ausbildung Specialists</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight font-['Poppins']"
            >
              {t('hero_title').split(' ').map((word, i) => (
                <span key={i}>
                  {word === 'Ausbildung' || word === 'Allemande' || word === 'l\'Ausbildung' || word === 'الألماني' || word === 'l\'' ? (
                    <span className="text-[#C62128]">{word}</span>
                  ) : (
                    word
                  )}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#C62128] text-white font-semibold rounded-full hover:bg-[#a81b22] transition-colors shadow-lg shadow-[#C62128]/25"
              >
                {t('hero_cta')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors"
              >
                {t('hero_scroll')}
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Shield, text: 'Trusted' },
                { icon: Clock, text: 'Fast' },
                { icon: Award, text: 'Proven' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-500">
                  <badge.icon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-8 rounded-full border-2 border-[#D4AF37]/30" />
              <div className="absolute inset-16 rounded-full border-2 border-[#C62128]/20" />
              
              {/* Center Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-black rounded-2xl flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-[#D4AF37] font-['Poppins'] font-bold text-4xl">BM27</span>
                  <span className="text-white/60 text-xs tracking-widest mt-1">SERVICES</span>
                  <div className="mt-3 w-12 h-0.5 bg-[#C62128]" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                  <div className="w-12 h-12 bg-[#C62128] rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4"
              >
                <div className="absolute bottom-0 right-0 translate-x-2 translate-y-2">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-black" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12"
              >
                <div className="absolute top-0 right-0 translate-x-4 -translate-y-2">
                  <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center shadow-lg">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToServices}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
