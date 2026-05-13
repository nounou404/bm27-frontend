import { motion } from 'framer-motion';
import { Handshake, Lightbulb, Star, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    id: 'analysis',
    icon: Handshake,
    titleKey: 'service1_title',
    descKey: 'service1_desc',
    durationKey: 'service1_duration',
    color: '#C62128',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100',
  },
  {
    id: 'creation',
    icon: Lightbulb,
    titleKey: 'service2_title',
    descKey: 'service2_desc',
    durationKey: 'service2_duration',
    color: '#D4AF37',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
  },
  {
    id: 'management',
    icon: Star,
    titleKey: 'service3_title',
    descKey: 'service3_desc',
    durationKey: 'service3_duration',
    color: '#000000',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
  },
];

export default function Services() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Poppins'] mb-4">
            {t('services_title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('services_subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-2xl border ${service.borderColor} ${service.bgColor} hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: service.color }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3 font-['Poppins']">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(service.descKey)}
              </p>

              {/* Duration Badge */}
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-4 h-4" style={{ color: service.color }} />
                <span className="text-sm font-medium" style={{ color: service.color }}>
                  {t(service.durationKey)}
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 text-sm font-semibold group/btn"
                style={{ color: service.color }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>

              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                <span className="text-lg font-bold" style={{ color: service.color }}>
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
