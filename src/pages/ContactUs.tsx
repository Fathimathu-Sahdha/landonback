import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import aboutHero from "/assets/images/contact-us-banner.webp";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactUs = () => {
  const { pageContent, isRtl } = useLanguage();
  const content = pageContent.contactUs;
  const fieldClassName =
    "w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" +
    (isRtl ? " text-start placeholder:text-start" : "");
  const textareaClassName = `${fieldClassName} resize-none`;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Get current time for the template
      const currentTime = new Date().toLocaleString();

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_wwy4rbl", // Service ID
        "template_cl4m27i", // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,
          to_email: "info@londonbakery.qa"
        },
        "tEbKEF9Ck9rfERE6n" // Public Key
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message: content.form.successMessage
        });
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: content.form.errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background pt-[4.5rem]">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-[25rem] lg:h-[33rem] w-full overflow-hidden">
        <img
          src={aboutHero}
          alt={content.hero.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">{content.hero.title}</h1>
        </div>
        {/* Bottom Curved SVG */}
        <svg
          className="absolute -bottom-px left-0 w-full h-20 md:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L120,240C240,224,480,192,720,176C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </section>

      {/* Contact Info & Form Section */}
      <section className="container mx-auto px-6 pt-8 pb-8 md:pt-16 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Contact Information (4 columns) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2A3C88' }}>
                {content.intro.title}
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {content.intro.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <img src="/assets/icons/phone-aboutus.webp" alt={content.contactDetails.phone.iconAlt} className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-3">{content.contactDetails.phone.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    <span className="font-medium">{content.contactDetails.phone.tollFreeLabel}</span>{" "}
                    <a href="tel:+97444479785" className="text-muted-foreground hover:text-orange-600 transition-colors">
                      {content.contactDetails.phone.tollFreeNumber}
                    </a>
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    <span className="font-medium">{content.contactDetails.phone.landlineLabel}</span>{" "}
                    <a href="tel:+97444479785" className="text-muted-foreground hover:text-orange-600 transition-colors">
                      {content.contactDetails.phone.landlineNumber}
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <img src="/assets/icons/email-aboutus.webp" alt={content.contactDetails.email.iconAlt} className="w-12 h-12 shrink-0" />
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{content.contactDetails.email.title}</h3>
                  
                  {/* General Enquiries - Highlighted */}
                  <div className="space-y-1 bg-orange-50/50 p-4 rounded-xl border-l-4 border-orange-600 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{content.contactDetails.email.generalLabel}</p>
                    <a href={`mailto:${content.contactDetails.email.generalEmail}`} className="text-base md:text-lg font-semibold text-foreground hover:text-orange-700 transition-colors block">
                      {content.contactDetails.email.generalEmail}
                    </a>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-2">
                    {content.contactDetails.email.enquiries.map((enquiry) => (
                      <div key={enquiry.email} className="space-y-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-orange-600/80">{enquiry.label}</p>
                        <a href={`mailto:${enquiry.email}`} className="text-sm md:text-base text-muted-foreground hover:text-orange-600 transition-colors block">
                          {enquiry.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <img src="/assets/icons/location-aboutus.webp" alt={content.contactDetails.address.iconAlt} className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{content.contactDetails.address.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {content.contactDetails.address.lines.map((line, index) => (
                      <span key={line}>
                        {line}
                        {index < content.contactDetails.address.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <img src="/assets/icons/clock-aboutus.webp" alt={content.contactDetails.workingHours.iconAlt} className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{content.contactDetails.workingHours.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                   {content.contactDetails.workingHours.value}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right - Contact Form (8 columns) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border"
            >
              <h3 className="text-xl md:text-3xl font-bold mb-8" style={{ color: '#2A3C88' }}>
                {content.form.title}
              </h3>

              {/* Success/Error Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {content.form.fields.name.label} <span className="text-red-500">{content.form.requiredMark}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    dir={isRtl ? "rtl" : undefined}
                    className={fieldClassName}
                    placeholder={content.form.fields.name.placeholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {content.form.fields.email.label} <span className="text-red-500">{content.form.requiredMark}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    dir={isRtl ? "rtl" : undefined}
                    className={fieldClassName}
                    placeholder={content.form.fields.email.placeholder}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {content.form.fields.phone.label} <span className="text-red-500">{content.form.requiredMark}</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    dir={isRtl ? "rtl" : undefined}
                    className={fieldClassName}
                    placeholder={content.form.fields.phone.placeholder}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {content.form.fields.message.label} <span className="text-red-500">{content.form.requiredMark}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    dir={isRtl ? "rtl" : undefined}
                    className={textareaClassName}
                    placeholder={content.form.fields.message.placeholder}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
                >
                  {isSubmitting ? content.form.submittingLabel : content.form.submitLabel}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12" style={{ color: '#2A3C88' }}>
            {content.map.title}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0798208455935!2d51.39712120000001!3d25.166782500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d7749e25415b%3A0x5e535541d2884b20!2sLondon%20Bakery%20(%20Al%20Baker%20Factory%20)!5e0!3m2!1sen!2sin!4v1766471383171!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={content.map.iframeTitle}
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
