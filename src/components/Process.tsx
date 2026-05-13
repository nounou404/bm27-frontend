import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, FileEdit, Send, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const steps = [
  { icon: MessageSquare, key: 'process_step1', color: '#C62128' },
  { icon: FileSearch, key: 'process_step2', color: '#D4AF37' },
  { icon: FileEdit, key: 'process_step3', color: '#000000' },
  { icon: Send, key: 'process_step4', color: '#C62128' },
  { icon: Headphones, key: 'process_step5', color: '#D4AF37' },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C62128]/10 text-[#C62128] text-sm font-semibold rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Poppins']">
            {t('process_title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#C62128] via-[#D4AF37] to-[#C62128]" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold" style={{ color: step.color }}>
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
                <h3 className="text-sm font-semibold text-black max-w-[140px]">
                  {t(step.key)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
