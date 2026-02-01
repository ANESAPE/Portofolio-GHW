/* POPUP DATA */
const data = {
  about: ["About Me", "Saya tertarik pada IT & data"],
  edu: ["Education", "Riwayat pendidikan saya"],
  exp1: ["Assistant Internship - Data Analytic", "Responsibilities include cleaning and analyzing micro and consumer data, creating visual dashboards to display key insights, and generating daily summaries of consumer data to inform business decisions."],
  exp2: ["Staff", "Responsibilities include maintaining and organizing the study room schedule at Solo Urbana Apartment to ensure a conducive atmosphere, assisting users with package management (receiving, borrowing, and returning), and reporting any facility damage or technical issues to administrative staff."],
  exp3: ["Staff", "To develop the PerpusKita digital library application, strategies will be developed to target agencies and companies for trial installation, including educational institutions, public libraries, and government agencies. Partnerships will be established with willing partners, and surveys will be created to gather insights from ushers and agencies. A schedule will be developed for application testing, feedback, iterative development, and full launch preparation, with key activities including outreach, survey distribution, testing, and launch planning."],

  skill1: ["Hard Skills",
    "Data Processing in Data Analytics, Data Visualization and Communication with AI Tools, Web Development, FrontEnd Development with AI Tools, Career Development with AI Tools."
  ],

  skill2: ["Soft Skills",
    "Time Management, Problem Solving, Analytical Thinking, Effective Communication, Collaboration and Teamwork."
  ],

  skill3: ["Project",
    "Data Analytics 2024."
  ]
};

/* POPUP */
function openPopup(key) {
  document.getElementById("popup-title").innerText = data[key][0];
  document.getElementById("popup-text").innerText = data[key][1];
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/* MENU MOBILE */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* EDUCATION SLIDER LOOP */
const eduSlides = document.querySelector(".edu-slides");
const eduImages = document.querySelectorAll(".edu-slides img");

const slideWidth = 260;
let index = 1;

/* clone first & last */
const firstClone = eduImages[0].cloneNode(true);
const lastClone = eduImages[eduImages.length - 1].cloneNode(true);

eduSlides.appendChild(firstClone);
eduSlides.insertBefore(lastClone, eduSlides.firstChild);

eduSlides.style.transform = `translateX(-${slideWidth}px)`;

/* auto slide */
setInterval(() => {
  index++;

  eduSlides.style.transition = "transform .7s ease";
  eduSlides.style.transform =
    `translateX(-${index * slideWidth}px)`;

  if (index === eduImages.length + 1) {
    setTimeout(() => {
      eduSlides.style.transition = "none";
      index = 1;
      eduSlides.style.transform =
        `translateX(-${slideWidth}px)`;
    }, 700);
  }
}, 3000);



