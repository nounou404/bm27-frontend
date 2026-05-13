import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  { icon: Target, titleKey: 'why_1_title', descKey: 'why_1_desc', color: '#C62128' },
  { icon: Zap, titleKey: 'why_2_title', descKey: 'why_2_desc', color: '#D4AF37' },
  { icon: TrendingUp, titleKey: 'why_3_title', descKey: 'why_3_desc', color: '#000000' },
  { icon: Users, titleKey: 'why_4_title', descKey: 'why_4_desc', color: '#C62128' },
];

export default function WhyChoose() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-black/5 text-black text-sm font-semibold rounded-full mb-4">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Poppins']">
            {t('why_title')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 font-['Poppins']">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
