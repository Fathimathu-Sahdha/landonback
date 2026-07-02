import type { ContactUsContent } from "../types";

export const contactUsContent: ContactUsContent = {
    hero: {
      title: "Contact Us",
      imageAlt: "Contact Us Hero",
    },
    intro: {
      title: "Get In Touch",
      description:
        "We'd love to hear from you! Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.",
    },
    contactDetails: {
      phone: {
        iconAlt: "Phone Icon",
        title: "Phone",
        tollFreeLabel: "Toll Free:",
        tollFreeNumber: "800 6246",
        landlineLabel: "Landline:",
        landlineNumber: "4447 9785",
      },
      email: {
        iconAlt: "Email Icon",
        title: "Email Enquiries",
        generalLabel: "General Enquiries",
        generalEmail: "info@londonbakery.qa",
        enquiries: [
          { label: "Procurement & Purchase Enquiries", email: "purchase@loafie.com" },
          { label: "Sales & Order Enquiries", email: "sales@londonbakery.qa" },
          { label: "Human Resources & Careers", email: "hr@loafie.com" },
          { label: "Quality Assurance & Feedback", email: "quality@loafie.com" },
          { label: "Marketing & Promotions", email: "marketing@londonbakery.qa" },
        ],
      },
      address: {
        iconAlt: "Location Icon",
        title: "Address",
        lines: [
          "London Bakery, Building no 63",
          "Zone 81, Street 40",
          "New industrial area",
          "Doha, Qatar",
        ],
      },
      workingHours: {
        iconAlt: "Clock Icon",
        title: "Working Hours",
        value: "Opens 24/7",
      },
    },
    form: {
      title: "Send Us a Message",
      requiredMark: "*",
      successMessage: "Message sent successfully! We'll get back to you soon.",
      errorMessage:
        "Failed to send message. Please try again or contact us directly at info@londonbakery.qa",
      submitLabel: "Send Message",
      submittingLabel: "Sending...",
      fields: {
        name: {
          label: "Full Name",
          placeholder: "Enter your full name",
        },
        email: {
          label: "Email Address",
          placeholder: "Enter your email address",
        },
        phone: {
          label: "Phone Number",
          placeholder: "Enter your phone number",
        },
        message: {
          label: "Message",
          placeholder: "Tell us what you're thinking about...",
        },
      },
    },
    map: {
      title: "Find Us Here",
      iframeTitle: "London Bakery Location",
    },
};
