/*
  SITE CONTENT — edit this file to update the website.
  ---------------------------------------------------
  - Text goes inside quotes. Keep the commas between items.
  - Leave a value as "" (empty) if you don't have it yet; the site will
    show a "coming soon" note or simply hide that line.
  - Images go in assets/img/ — then put the path here, e.g. "assets/img/ato.jpg".
*/

window.IIFC = {
  council: {
    name: "Independent Interfraternity Council",
    shortName: "IIFC",
    school: "University of Nevada, Reno",
    email: "",       // e.g. "iifc.unr@gmail.com"
    instagram: ""    // e.g. "https://instagram.com/unr_iifc"
  },

  // One entry per chapter. "id" is used in links, so keep it short with no spaces.
  chapters: [
    {
      id: "ato",
      name: "Alpha Tau Omega",
      letters: "ΑΤΩ",
      founded: "Founded in 1865 in Richmond, Virginia",
      blurb: "",       // 1–2 sentences about the UNR chapter
      instagram: "",
      website: "https://www.ato.org",
      photo: ""
    },
    {
      id: "theta-chi",
      name: "Theta Chi",
      letters: "ΘΧ",
      founded: "Founded in 1856 at Norwich University",
      blurb: "",
      instagram: "",
      website: "https://www.thetachi.org",
      photo: ""
    },
    {
      id: "lambda-chi",
      name: "Lambda Chi Alpha",
      letters: "ΛΧΑ",
      founded: "Founded in 1909 at Boston University",
      blurb: "",
      instagram: "",
      website: "https://www.lambdachi.org",
      photo: ""
    },
    {
      id: "kappa-alpha",
      name: "Kappa Alpha Order",
      letters: "ΚΑ",
      founded: "Founded in 1865 at Washington College",
      blurb: "",
      instagram: "",
      website: "https://www.ka.org",
      photo: ""
    },
    {
      id: "zeta-psi",
      name: "Zeta Psi",
      letters: "ΖΨ",
      founded: "Founded in 1847 at New York University",
      blurb: "",
      instagram: "",
      website: "https://www.zetapsi.org",
      photo: ""
    },
    {
      id: "pi-kapp",
      name: "Pi Kappa Phi",
      letters: "ΠΚΦ",
      founded: "Founded in 1904 at the College of Charleston",
      blurb: "",
      instagram: "",
      website: "https://www.pikapp.org",
      photo: ""
    }
  ],

  // Executive board. Leave "name" empty for positions not yet filled in.
  officers: [
    { name: "Ethan McNamara", role: "President", email: "", photo: "assets/img/officers/ethan-mcnamara.jpg" },
    { name: "Lance Zuniga", role: "Vice President of Judicial Affairs", email: "", photo: "" },
    { name: "Henry Owens", role: "Vice President of Recruitment", email: "", photo: "assets/img/officers/henry-owens.jpg" },
    { name: "Andy Sanchez", role: "Vice President of Finance", email: "", photo: "assets/img/officers/andy-sanchez.jpg" },
    { name: "Andrew Cicerone", role: "Vice President of Scholarship", email: "", photo: "" },
    { name: "Cole Riley", role: "Vice President of Member Development", email: "", photo: "assets/img/officers/cole-riley.jpg" },
    { name: "Luke Calderon", role: "Vice President of Community Relations", email: "", photo: "" },
    { name: "Lucas Premier", role: "Vice President of Administration", email: "", photo: "assets/img/officers/lucas-premier.jpg" },
    { name: "Mathew Dufer", role: "Vice President of Member Wellness", email: "", photo: "assets/img/officers/mathew-dufer.jpg" },
    { name: "Tristan Wyatt", role: "Special Events", email: "", photo: "" }
  ],

  recruitment: {
    season: "",           // e.g. "Spring 2027 recruitment runs January 20–27"
    interestFormUrl: "",  // link to a Google Form or similar
    requirements: [],     // e.g. ["Full-time UNR student", "Minimum 2.5 GPA"]
    steps: [
      { title: "Fill out the interest form", text: "Tell us who you are so chapters know to look out for you." },
      { title: "Meet the chapters", text: "Come to recruitment events, tour the houses, and talk with members." },
      { title: "Receive bids", text: "Chapters that think you're a good fit invite you to join." },
      { title: "Accept a bid", text: "Pick the chapter that feels like home and start the new member process." }
    ]
  },

  // Dates use the format "YYYY-MM-DD". Past events hide automatically.
  events: [
    // { date: "2026-11-12", title: "Council meeting", time: "7:00 pm", location: "Joe Crowley Student Union", description: "" }
  ]
};
