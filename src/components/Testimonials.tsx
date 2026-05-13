import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonials = [
  {
    quoteKey: 'testimonial_1',
    nameKey: 'testimonial_1_name',
    roleKey: 'testimonial_1_role',
    color: '#C62128',
  },
  {
    quoteKey: 'testimonial_2',
    nameKey: 'testimonial_2_name',
    roleKey: 'testimonial_2_role',
    color: '#D4AF37',
  },
  {
    quoteKey: 'testimonial_3',
    nameKey: 'testimonial_3_name',
    roleKey: 'testimonial_3_role',
    color: '#000000',
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Poppins']">
            {t('testimonial_title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 mb-4 opacity-20" style={{ color: item.color }} />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{t(item.quoteKey)}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: item.color }}
                >
                  {t(item.nameKey).charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">{t(item.nameKey)}</p>
                  <p className="text-gray-500 text-xs">{t(item.roleKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
