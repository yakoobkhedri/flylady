import { createI18n } from "vue-i18n";


const messages = {
    en: {
      nav: {
        home: "Home",
        about: "About"
      },
      home: {
        banner: "Explore the world together",
        bannerSubTitle: "Find awesome flights, hotel, tour, car and packages"
      },
      about: {
        header: "About us"
      }
    },
    ar: {
        nav: {
          home: "بيت",
          about: "عن"
        },
        home: {
          banner: "اكتشف العالم معًا",
          bannerSubTitle: "ابحث عن رحلات جوية رائعة وفندق وجولة وسيارة و الحزم"
        },
        about: {
          header: "معلومات عنا"
        }
      }
  }

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
  legacy: false, // <--- 3
  globalInjection: true,
  messages
})