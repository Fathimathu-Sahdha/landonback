import type { DeepPartial } from "../merge";
import type { ContactUsContent } from "../types";

export const contactUsContentAr: DeepPartial<ContactUsContent> = {
    hero: {
      title: " اتصل بنا",
      imageAlt: "Contact Us Hero",
    },
    intro: {
      title: "تواصل معنا",
      description:
        "يسعدنا أن نسمع منك! سواء كان لديك سؤال حول منتجاتنا أو خدماتنا أو أي شيء آخر، فإن فريقنا مستعد للإجابة على جميع أسئلتك.",
    },
    contactDetails: {
      phone: {
        iconAlt: "Phone Icon",
        title: " هاتف",
        tollFreeLabel: "ارقم مجاني:",
        tollFreeNumber: " ٨٠٠ ٦٢٤٦",
        landlineLabel: "الهاتف الأرضي:",
        landlineNumber: "٤٤٤٧ ٩٧٨٥",
      },
      email: {
        iconAlt: "Email Icon",
        title: " استفسارات البريد الإلكتروني",
        generalLabel: "استفسارات عامة",
        generalEmail: "info@londonbakery.qa",
        enquiries: [
          { label: "استفسارات المشتريات والتوريد", email: "purchase@loafie.com" },
          { label: " استفسارات المبيعات والطلبات", email: "sales@londonbakery.qa" },
          { label: " الموارد البشرية والوظائف", email: "hr@loafie.com" },
          { label: " ضمان الجودة والتقييم", email: "quality@loafie.com" },
          { label: "التسويق والترويج", email: "marketing@londonbakery.qa" },
        ],
      },
      address: {
        iconAlt: "Location Icon",
        title: "عنوان",
        lines: [
          "مخبز لندن، المبنى رقم 63 ،",
          "  المنطقة81، شارع40 ،",
          "المنطقة الصناعية الجديدة،",
          "الدوحة، قطر",
        ],
      },
      workingHours: {
        iconAlt: "Clock Icon",
        title: "ساعات العمل",
        value: "مفتوح على مدار الساعة طوال أيام الاسبوع",
      },
    },
    form: {
      title: "إرسال لنا رسالة",
      requiredMark: "*",
      successMessage: "Message sent successfully! We'll get back to you soon.",
      errorMessage:
        "Failed to send message. Please try again or contact us directly at info@londonbakery.qa",
      submitLabel: " إرسال رسالة",
      submittingLabel: "Sending...",
      fields: {
        name: {
          label: "اﻻسم الكامل",
          placeholder: "Enter your full name",
        },
        email: {
          label: "عنوان البريد الإلكتروني",
          placeholder: "Enter your email address",
        },
        phone: {
          label: "رقم التليفون",
          placeholder: "Enter your phone number",
        },
        message: {
          label: "رسالة",
          placeholder: "Tell us what you're thinking about...",
        },
      },
    },
    map: {
      title: "تجدنا هنا",
      iframeTitle: "London Bakery Location",
    },
};
