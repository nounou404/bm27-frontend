import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle, FileText, Handshake, Lightbulb, Star, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const serviceOptions = [
  { value: 'analysis', labelKey: 'service1_title', icon: Handshake, color: '#C62128' },
  { value: 'creation', labelKey: 'service2_title', icon: Lightbulb, color: '#D4AF37' },
  { value: 'management', labelKey: 'service3_title', icon: Star, color: '#000000' },
];

export default function ClientForm() {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files) {
      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !formData.name || !formData.email) return;
    try {
      const response = await fetch('https://bm27-control-center-backend.up.railway.app/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: formData.name,
          prenom: '',
          email: formData.email,
          telephone: formData.phone
        })
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setSelectedService('');
          setFormData({ name: '', email: '', phone: '' });
          setFiles([]);
        }, 4000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C62128]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold rounded-full mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Poppins'] mb-4">
            {t('form_title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('form_subtitle')}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-lg mx-auto text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Poppins']">
                {t('form_success')}
              </h3>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
            >
              {/* Service Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  {t('form_service_label')} <span className="text-[#C62128]">*</span>
                </label>
                <div className="grid sm:grid-cols-3 gap-4">
                  {serviceOptions.map((service) => (
                    <motion.button
                      key={service.value}
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedService(service.value)}
                      className={`relative p-5 rounded-xl border-2 transition-all text-left ${
                        selectedService === service.value
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                          : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                      }`}
                    >
                      <service.icon
                        className="w-6 h-6 mb-3"
                        style={{ color: selectedService === service.value ? service.color : '#9CA3AF' }}
                      />
                      <span className={`text-sm font-medium block ${
                        selectedService === service.value ? 'text-white' : 'text-gray-400'
                      }`}>
                        {t(service.labelKey)}
                      </span>
                      {selectedService === service.value && (
                        <motion.div
                          layoutId="serviceCheck"
                          className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center"
                        >
                          <CheckCircle className="w-3 h-3 text-black" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form_name_label')} <span className="text-[#C62128]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('form_email_label')} <span className="text-[#C62128]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('form_phone_label')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      placeholder="+49 123 456 7890"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form_docs_label')}
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                      dragOver
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                        : 'border-gray-700 hover:border-gray-600 bg-gray-800/30'
                    }`}
                  >
                    <Upload className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                    <p className="text-sm text-gray-400 mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-600">
                      {t('form_docs_hint')}
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  {/* File List */}
                  <AnimatePresence>
                    {files.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 space-y-2"
                      >
                        {files.map((file, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex items-center justify-between px-3 py-2 bg-gray-800/50 rounded-lg"
                          >
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-[#D4AF37]" />
                              <span className="text-sm text-gray-300 truncate max-w-[200px]">
                                {file.name}
                              </span>
                              <span className="text-xs text-gray-600">
                                ({(file.size / 1024 / 1024).toFixed(1)} MB)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="p-1 hover:bg-gray-700 rounded transition-colors"
                            >
                              <X className="w-4 h-4 text-gray-500" />
                            </button>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedService}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                    selectedService
                      ? 'bg-gradient-to-r from-[#C62128] to-[#a81b22] text-white shadow-lg shadow-[#C62128]/25 hover:shadow-xl hover:shadow-[#C62128]/30'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {t('form_submit')}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
