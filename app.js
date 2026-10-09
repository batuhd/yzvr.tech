(function () {
  "use strict";

  var I18N = {
    tr: {
      title: "Yapay Zeka ve Robotik Kulübü | Altınbaş Üniversitesi",
      desc: "Yapay Zeka ve Robotik Kulübü — Instagram, WhatsApp topluluk grubu, LinkedIn sayfamız ve üyelik başvuru formu.",
      university: "Altınbaş Üniversitesi",
      name: "Yapay Zeka ve Robotik Kulübü",
      join: "Üye Ol",
      joinDesc: "Başvuru formunu doldur",
      ig: "Instagram",
      igDesc: "@auyapayzekaverobotik",
      wa: "WhatsApp Topluluk Grubu",
      waDesc: "Duyurular ve etkinlikler",
      li: "LinkedIn",
      liDesc: "Kulüp sayfamızı takip edin",
      lang: "EN"
    },
    en: {
      title: "AI & Robotics Club | Altınbaş University",
      desc: "AI & Robotics Club — Instagram, WhatsApp group, our LinkedIn page and the membership form.",
      university: "Altınbaş University",
      name: "AI & Robotics Club",
      join: "Join Us",
      joinDesc: "Fill in the application form",
      ig: "Instagram",
      igDesc: "@auyapayzekaverobotik",
      wa: "WhatsApp Group",
      waDesc: "Announcements and events",
      li: "LinkedIn",
      liDesc: "Follow our club page",
      lang: "TR"
    }
  };

  var saved = null;
  try { saved = localStorage.getItem("yzvr-lang"); } catch (e) {}
  var lang = saved === "en" ? "en" : "tr";

  function applyLang() {
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict.desc);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
  }

  var toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      lang = lang === "tr" ? "en" : "tr";
      try { localStorage.setItem("yzvr-lang", lang); } catch (e) {}
      applyLang();
    });
  }

  applyLang();
})();
