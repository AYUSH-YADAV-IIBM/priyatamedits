/* =========================================================
   PRIYATAM EDITS — MAIN SCRIPT
   Website + Portfolio + Feedback + FAQ + Chatbot
   ========================================================= */
const heroVideo = document.getElementById("heroVideo");
const soundBtn = document.getElementById("sound");

if (heroVideo) {

    heroVideo.muted = true;

    function playHeroVideo() {

        const promise = heroVideo.play();

        if (promise !== undefined) {
            promise.catch(() => {});
        }

    }

    playHeroVideo();

    document.addEventListener("visibilitychange", () => {

        if (!document.hidden) {
            playHeroVideo();
        }

    });

}

/* =========================================================
   HERO SOUND
========================================================= */

if (soundBtn && heroVideo) {

    soundBtn.addEventListener("click", () => {

        heroVideo.muted = !heroVideo.muted;

        if (heroVideo.muted) {

            soundBtn.textContent = "🔇 Sound Off";

        } else {

            heroVideo.volume = 0.7;

            soundBtn.textContent = "🔊 Sound On";

            const promise = heroVideo.play();

            if (promise !== undefined) {
                promise.catch(() => {});
            }

        }

    });

}

/* =========================================================
   MOBILE MENU
========================================================= */

/* =========================================================
   MOBILE MENU — FINAL
========================================================= */

const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile");

if (menuBtn && mobileMenu) {

    function openMobileMenu() {
        mobileMenu.classList.add("open");
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove("open");
    }

    menuBtn.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (mobileMenu.classList.contains("open")) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }

    });


    /* Menu links */

    mobileMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            closeMobileMenu();

        });

    });


    /* Click outside */

    document.addEventListener("click", function (event) {

        if (
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            closeMobileMenu();

        }

    });


    /* ESC */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    });

}


    

/* =========================================================
   PORTFOLIO DATA
========================================================= */

const portfolioData = {

    client: {

        label: "CLIENT PROJECTS",

        title: "Edits built for real brands.",

        description:
            "Promotional reels, social media content and high-retention edits created for clients.",

        videos: [
           {
    title: "Luxury Living – Home Theatre & Custom Interiors",
    type: "Client Project",
    createdFor: "Luxury Home Interiors",
    description:
        "Premium home theatre installations, elegant living spaces, customized sofa beds and luxury furniture showcased through cinematic visuals, smooth transitions and refined color grading.",
    file: "Home theater .mp4"
},

            {
                title: "Sunraaj – Construction Promotional Reel",
                type: "Client Project",
                createdFor: "Sunraaj",
                description:
                    "Construction-focused promotional reel with clean cuts, strong pacing and engaging visuals.",
                file: "videoclient1.mp4"
            },

            {
                title: "Crown Gym – Fitness Promotional Reel 💪🔥",
                type: "Client Project",
                createdFor: "Crown Gym",
                description:
                    "High-energy fitness promotional edit designed for social media engagement.",
                file: "videosclient2.mp4"
            },

            {
                title: "Brosin Finance – Financial Services Promotional Reel 💼📈",
                type: "Client Project",
                createdFor: "Brosin Finance",
                description:
                    "Professional finance promotional reel with clean visuals, captions and modern pacing.",
                file: "videosclient3.mp4"
            },

            {
                title: "Fitness Reel",
                type: "Client Project",
                createdFor: "Fitness Brand",
                description:
                    "Dynamic fitness-focused reel with energetic editing and social-first pacing.",
                file: "videosclient4.mp4"
            },

            {
                title: "Vinay Kumar – Goal Investment Promotional Reel 📈💼",
                type: "Client Project",
                createdFor: "Vinay Kumar",
                description:
                    "Investment-focused promotional video designed to communicate the message clearly and professionally.",
                file: "videosclient5.mp4"
            }

        ]

    },


    agency: {

        label: "AGENCY WORK",

        title: "Social content made to stand out.",

        description:
            "Creative campaigns, advertisements and social media edits developed for agency projects.",

        videos: [

            {
                title: "DigiHandler – Social Media Agency Promotional Reel 🚀📱",
                type: "Agency Work",
                createdFor: "DigiHandler",
                description:
                    "Fast-paced agency promotional reel designed to showcase social media services.",
                file: "videosagency1.mp4"
            },

            {
                title: "DigiHandler – Social Media Creative Reel 🚀",
                type: "Agency Work",
                createdFor: "DigiHandler",
                description:
                    "Creative social media reel featuring modern transitions, motion and engaging pacing.",
                file: "videosagency2.mp4"
            },

            {
                title: "Advertisement",
                type: "Agency Work",
                createdFor: "DigiHandler",
                description:
                    "Advertisement edit focused on visual storytelling, attention and conversion.",
                file: "videosagency3.mp4"
            }

        ]

    },


    ai: {

        label: "AI CHARACTER · FACELESS REELS",

        title: "AI content built for attention.",

        description:
            "AI character reels, faceless storytelling, captions, sound design and retention-focused editing.",

        videos: [

            {
                title: "AI Model – Skincare Product Promotional Reel ✨🧴",
                type: "AI / Faceless",
                createdFor: "AI Character Project",
                description:
                    "AI-powered skincare promotional reel combining product storytelling and cinematic visuals.",
                file: "videosai1.mp4"
            },

            {
                title: "AI Model – Skincare Product Promotional Reel ✨🧴",
                type: "AI / Faceless",
                createdFor: "AI Character Project",
                description:
                    "AI model promotional edit created for skincare content and social media attention.",
                file: "videosai2.mp4"
            }

        ]

    }

};


/* =========================================================
   PORTFOLIO ELEMENTS
========================================================= */

const slider = document.getElementById("slider");

const portfolioTabs =
    document.querySelectorAll(".portfolio-tab");

const portfolioCategoryLabel =
    document.getElementById("portfolioCategoryLabel");

const portfolioCategoryTitle =
    document.getElementById("portfolioCategoryTitle");

const portfolioCategoryDescription =
    document.getElementById("portfolioCategoryDescription");

const prevBtn =
    document.getElementById("prev");

const nextBtn =
    document.getElementById("next");


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   CREATE PORTFOLIO CARD
========================================================= */

function createPortfolioCard(video) {

    const card =
        document.createElement("article");

    card.className =
        "card drive-card";

    card.innerHTML = `

        <video
            class="drive-frame"
            controls
            playsinline
            preload="metadata"
        >

            <source
                src="${escapeHTML(video.file)}"
                type="video/mp4"
            >

            Your browser does not support HTML5 video.

        </video>


        <div class="info">

            <span class="tag">
                ${escapeHTML(video.type)}
            </span>

            <h3>
                ${escapeHTML(video.title)}
            </h3>

            <p>
                <strong>Created for:</strong>
                ${escapeHTML(video.createdFor)}
            </p>

            <p>
                ${escapeHTML(video.description)}
            </p>

            <a
                class="drive-open"
                href="${escapeHTML(video.file)}"
                target="_blank"
                rel="noopener"
            >
                Open Full Video ↗
            </a>

        </div>

    `;

    return card;

}


/* =========================================================
   RENDER PORTFOLIO
========================================================= */

let currentCategory = "client";

function renderPortfolio(category = "client") {

    if (!slider) return;

    const data =
        portfolioData[category];

    if (!data) return;

    currentCategory = category;


    if (portfolioCategoryLabel) {

        portfolioCategoryLabel.textContent =
            data.label;

    }


    if (portfolioCategoryTitle) {

        portfolioCategoryTitle.textContent =
            data.title;

    }


    if (portfolioCategoryDescription) {

        portfolioCategoryDescription.textContent =
            data.description;

    }


    slider.innerHTML = "";


    data.videos.forEach(video => {

        const card =
            createPortfolioCard(video);

        slider.appendChild(card);

    });


    slider.scrollTo({

        left: 0,

        behavior: "smooth"

    });


    updatePortfolioButtons();

}


/* =========================================================
   PORTFOLIO TABS
========================================================= */

portfolioTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        portfolioTabs.forEach(item => {

            item.classList.remove("active");

        });

        tab.classList.add("active");


        const category =
            tab.dataset.category;

        renderPortfolio(category);

    });

});


/* =========================================================
   PORTFOLIO SLIDER
========================================================= */

function getScrollAmount() {

    if (!slider) return 0;


    const firstCard =
        slider.querySelector(".card");


    if (!firstCard) {

        return 330;

    }


    const cardWidth =
        firstCard.getBoundingClientRect().width;


    return cardWidth + 20;

}


if (nextBtn && slider) {

    nextBtn.addEventListener("click", () => {

        slider.scrollBy({

            left: getScrollAmount(),

            behavior: "smooth"

        });

    });

}


if (prevBtn && slider) {

    prevBtn.addEventListener("click", () => {

        slider.scrollBy({

            left: -getScrollAmount(),

            behavior: "smooth"

        });

    });

}


/* =========================================================
   UPDATE SLIDER BUTTONS
========================================================= */

function updatePortfolioButtons() {

    if (!slider) return;


    if (prevBtn) {

        prevBtn.disabled =
            slider.scrollLeft <= 5;

    }


    if (nextBtn) {

        const maxScroll =
            slider.scrollWidth -
            slider.clientWidth;

        nextBtn.disabled =
            slider.scrollLeft >= maxScroll - 5;

    }

}


if (slider) {

    slider.addEventListener(
        "scroll",
        updatePortfolioButtons
    );

    window.addEventListener(
        "resize",
        updatePortfolioButtons
    );

}


/* =========================================================
   INITIAL PORTFOLIO
========================================================= */

renderPortfolio("client");


/* =========================================================
   FEEDBACK SYSTEM
========================================================= */

const nameInput =
    document.getElementById("name");

const feedbackText =
    document.getElementById("text");

const submitFeedback =
    document.getElementById("submit");

const reviews =
    document.getElementById("reviews");

const stars =
    document.querySelectorAll(".star");

const FEEDBACK_KEY =
    "priyatam_edits_feedback";


let selectedRating = 5;


/* =========================================================
   STAR RATING
========================================================= */

function updateStars() {

    stars.forEach(star => {

        const rating =
            Number(star.dataset.r);

        if (rating <= selectedRating) {

            star.classList.add("active");

        } else {

            star.classList.remove("active");

        }

    });

}


stars.forEach(star => {

    star.addEventListener("click", () => {

        selectedRating =
            Number(star.dataset.r);

        updateStars();

    });

});


updateStars();


/* =========================================================
   GET FEEDBACK user
========================================================= */

function getFeedback() {

    try {

        return JSON.parse(
            localStorage.getItem(FEEDBACK_KEY)
        ) || [];

    } catch (error) {

        return [];

    }

}


/* =========================================================
   FEEDBACK SAVE!
========================================================= */

function saveFeedback(data) {

    try {

        localStorage.setItem(
            FEEDBACK_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.error(
            "Unable to save feedback.",
            error
        );

    }

}


/* =========================================================
   RENDER FEEDBACK
========================================================= */

function renderFeedback() {

    if (!reviews) return;


    const feedback =
        getFeedback();


    if (feedback.length === 0) {

        reviews.innerHTML = `

            <p class="none">

                No reviews yet.
                Be the first to share
                your experience.

            </p>

        `;

        return;

    }


    reviews.innerHTML = "";


    feedback
        .slice()
        .reverse()
        .forEach(item => {

            const box =
                document.createElement("div");


            box.className =
                "feedback-item";


            const rating =
                Math.min(
                    5,
                    Math.max(
                        1,
                        Number(item.rating) || 5
                    )
                );


            box.innerHTML = `

                <div class="feedback-name">

                    ${escapeHTML(item.name)}

                </div>


                <div class="feedback-stars">

                    ${"★".repeat(rating)}

                </div>


                <p>

                    ${escapeHTML(item.message)}

                </p>

            `;


            reviews.appendChild(box);

        });

}


/* =========================================================
   SUBMIT FEEDBACK
========================================================= */

if (submitFeedback) {

    submitFeedback.addEventListener(
        "click",
        () => {

            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const message =
                feedbackText
                    ? feedbackText.value.trim()
                    : "";


            if (!name) {

                alert(
                    "Please enter your name."
                );

                if (nameInput) {
                    nameInput.focus();
                }

                return;

            }


            if (!message) {

                alert(
                    "Please write your feedback."
                );

                if (feedbackText) {
                    feedbackText.focus();
                }

                return;

            }


            const feedback =
                getFeedback();


            feedback.push({

                name: name,

                message: message,

                rating: selectedRating,

                date:
                    new Date().toISOString()

            });


            saveFeedback(feedback);

            renderFeedback();


            if (nameInput) {
                nameInput.value = "";
            }


            if (feedbackText) {
                feedbackText.value = "";
            }


            selectedRating = 5;

            updateStars();


            alert(
                "Thank you for your feedback ❤️"
            );

        }
    );

}


renderFeedback();


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");


    if (!question) return;


    question.addEventListener(
        "click",
        () => {

            const isOpen =
                item.classList.contains("active");


            faqItems.forEach(otherItem => {

                otherItem.classList.remove(
                    "active"
                );

            });


            if (!isOpen) {

                item.classList.add("active");

            }

        }
    );

});


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollProgress =
    document.getElementById("progress");


function updateScrollProgress() {

    if (!scrollProgress) return;


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        scrollProgress.style.width =
            "0%";

        return;

    }


    const percentage =
        (scrollTop / documentHeight) * 100;


    scrollProgress.style.width =
        `${Math.min(
            100,
            Math.max(0, percentage)
        )}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);


updateScrollProgress();


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("top");


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


function updateBackToTop() {

    if (!backToTop) return;


    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


updateBackToTop();


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });


/* =========================================================
   IMAGE LAZY LOADING
========================================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        if (!img.hasAttribute("loading")) {

            img.setAttribute(
                "loading",
                "lazy"
            );

        }

    });



/* =========================================================
   SHrii PREMIUM CHATBOT — PRIYATAM EDITS
   Multilingual | Welcome Popup | Developer | Enquiry
   AG Digital Hub removed
   ========================================================= */

(() => {
  "use strict";

  // Existing website HTML IDs
  const btn = document.getElementById("chatbotBtn");
  const box = document.getElementById("chatbotBox");
  const close = document.getElementById("chatbotClose");
  const messages = document.getElementById("chatbotMessages");
  const input = document.getElementById("chatbotInput");
  const send = document.getElementById("chatbotSend");

  if (!box || !messages || !input) {
    console.error("Shrii: Chatbot HTML elements not found.");
    return;
  }

  // Business details
  const WHATSAPP = "6205706883";
  const EMAIL = "Priyatamkumar84@gmail.com";
  const INSTAGRAM = "https://www.instagram.com/priyatam.cuts/";

  // Developer details
  const DEVELOPER = "Ayush Yadav";
  const DEVELOPER_EMAIL = "ayushkumar85890@gmail.com";
  const DEVELOPER_INSTAGRAM =
    "https://www.instagram.com/ayush_yadav1_/";

  let language = "hinglish";
  let enquiry = null;
  let welcomeShown = false;
  let welcomePopup = null;
  let developerPopup = null;

  const languageNames = {
    en: "English",
    hi: "हिन्दी",
    hinglish: "Hinglish",
    es: "Español",
    fr: "Français"
  };

  // ---------------------------------------------------------
  // TRANSLATIONS
  // ---------------------------------------------------------

  const translations = {
    en: {
      choose: "Choose your language",
      welcomeTitle: "Meet Shrii ✨",
      welcome: "Your personal assistant at Priyatam Edits. Explore services, pricing, portfolio or start a video project.",
      start: "Start chatting",
      cancel: "Close",
      greet: "Hey! Welcome to Priyatam Edits ✨ I'm Shrii. I can help you with pricing, services, portfolio, revisions and video project enquiries.",
      pricing: "<strong>Our Editing Packages 💰</strong><br><br><strong>Starter — ₹249 / video</strong><br>Basic cuts, captions, sound design and 2 revisions.<br><br><strong>Creator — ₹1,499 / 3 videos</strong><br>Advanced editing, captions, motion graphics, color grading and 3 revisions.<br><br><strong>Pro — ₹2,999 / 5 videos</strong><br>Premium editing, motion graphics, cinematic color and priority delivery.",
      services: "<strong>Our Services 🎬</strong><br><br>• Instagram Reels<br>• YouTube Shorts and videos<br>• Captions and subtitles<br>• Motion graphics<br>• Color grading<br>• Sound design<br>• AI / faceless video editing",
      portfolio: "Visit the Portfolio section on our website to explore our available video samples and editing styles. 🎥",
      process: "<strong>How It Works</strong><br><br>1. Share your video requirements.<br>2. Discuss style, footage and budget.<br>3. Confirm the price and deadline.<br>4. We edit and share a preview.<br>5. Final delivery after agreed revisions. ✅",
      revisions: "Starter includes 2 revisions. Creator includes 3 revisions. Please confirm the revision terms for Pro before starting your project.",
      contact: "Contact Priyatam Edits:<br><br><a href='https://wa.me/916205706883' target='_blank' rel='noopener noreferrer'>💬 WhatsApp</a><br><br><a href='mailto:Priyatamkumar84@gmail.com'>📧 Email</a><br><br><a href='https://www.instagram.com/priyatam.cuts/' target='_blank' rel='noopener noreferrer'>📸 Instagram</a>",
      enquiry: "Let's plan your video project! 🎬<br><br>What type of video do you need? For example: Reel, YouTube Short, long video, cinematic or faceless video.",
      quantity: "How many videos do you need? Example: 1 Reel, 3 Shorts or 10 videos.",
      deadline: "When do you need the videos delivered? Example: 2 days, 1 week or a specific date.",
      budget: "What is your approximate budget? Example: ₹500, ₹1,500 or negotiable.",
      ready: "Your project brief is ready! 🎉 Review the details in WhatsApp and press Send when you're ready.",
      unknown: "I can help with pricing, services, portfolio, revisions, contact details and project enquiries. Try asking about one of these!",
      typing: "Shrii is typing",
      devTitle: "Meet the Developer",
      devText: "Website Developer & Digital Creator",
      devClose: "Back to chat",
      developer: "About Developer",
      cancelEnquiry: "Enquiry cancelled. You can start again whenever you're ready.",
      footer: "Website developed by",
      sendWhatsApp: "💬 Continue on WhatsApp",
      cancelProject: "Type 'cancel' to stop this enquiry."
    },

    hi: {
      choose: "अपनी भाषा चुनें",
      welcomeTitle: "Shrii से मिलिए ✨",
      welcome: "Priyatam Edits की आपकी निजी सहायक। सर्विस, कीमत, पोर्टफोलियो देखें या अपना वीडियो प्रोजेक्ट शुरू करें।",
      start: "चैट शुरू करें",
      cancel: "बंद करें",
      greet: "नमस्ते! Priyatam Edits में आपका स्वागत है ✨ मैं Shrii हूँ। मैं आपको कीमत, वीडियो एडिटिंग सर्विस, पोर्टफोलियो और प्रोजेक्ट पूछताछ में मदद कर सकती हूँ।",
      pricing: "<strong>हमारे एडिटिंग पैकेज 💰</strong><br><br><strong>Starter — ₹249 / वीडियो</strong><br>बेसिक कट्स, कैप्शन, साउंड डिजाइन और 2 रिवीजन।<br><br><strong>Creator — ₹1,499 / 3 वीडियो</strong><br>एडवांस एडिटिंग, कैप्शन, मोशन ग्राफिक्स, कलर ग्रेडिंग और 3 रिवीजन।<br><br><strong>Pro — ₹2,999 / 5 वीडियो</strong><br>प्रीमियम एडिटिंग, मोशन ग्राफिक्स, सिनेमैटिक कलर और प्राथमिकता वाली डिलीवरी।",
      services: "<strong>हमारी सर्विसेज 🎬</strong><br><br>• Instagram Reels<br>• YouTube Shorts और वीडियो<br>• कैप्शन और सबटाइटल<br>• मोशन ग्राफिक्स<br>• कलर ग्रेडिंग<br>• साउंड डिजाइन<br>• AI / Faceless वीडियो एडिटिंग",
      portfolio: "हमारी वेबसाइट के Portfolio सेक्शन में जाकर वीडियो सैंपल और एडिटिंग स्टाइल देखें। 🎥",
      process: "<strong>काम करने का तरीका</strong><br><br>1. वीडियो की जरूरत बताएं।<br>2. स्टाइल, फुटेज और बजट पर बात करें।<br>3. कीमत और समय तय करें।<br>4. एडिटिंग और प्रीव्यू मिलेगा।<br>5. तय रिवीजन के बाद फाइनल वीडियो। ✅",
      revisions: "Starter में 2 और Creator में 3 रिवीजन शामिल हैं। Pro के रिवीजन की शर्तें प्रोजेक्ट शुरू करने से पहले कन्फर्म करें।",
      contact: "Priyatam Edits से संपर्क करें:<br><br><a href='https://wa.me/916205706883' target='_blank' rel='noopener noreferrer'>💬 WhatsApp</a><br><br><a href='mailto:Priyatamkumar84@gmail.com'>📧 Email</a><br><br><a href='https://www.instagram.com/priyatam.cuts/' target='_blank' rel='noopener noreferrer'>📸 Instagram</a>",
      enquiry: "चलिए आपका वीडियो प्रोजेक्ट शुरू करते हैं! 🎬<br><br>किस तरह का वीडियो एडिट करवाना है? जैसे Reel, YouTube Short, लंबा वीडियो या Cinematic वीडियो।",
      quantity: "कितने वीडियो एडिट करवाने हैं? जैसे 1 Reel, 3 Shorts या 10 वीडियो।",
      deadline: "वीडियो कब तक चाहिए? जैसे 2 दिन, 1 हफ्ता या कोई खास तारीख।",
      budget: "आपका लगभग बजट कितना है? जैसे ₹500, ₹1,500 या बातचीत से तय करेंगे।",
      ready: "आपकी प्रोजेक्ट डिटेल तैयार है! 🎉 WhatsApp पर जानकारी देखें और तैयार होने पर Send दबाएं।",
      unknown: "मैं कीमत, सर्विस, पोर्टफोलियो, रिवीजन, संपर्क और प्रोजेक्ट की जानकारी दे सकती हूँ। 😊",
      typing: "Shrii जवाब लिख रही है",
      devTitle: "डेवलपर से मिलिए",
      devText: "वेबसाइट डेवलपर और डिजिटल क्रिएटर",
      devClose: "चैट पर वापस जाएं",
      developer: "डेवलपर के बारे में",
      cancelEnquiry: "पूछताछ रद्द कर दी गई है। आप चाहें तो दोबारा शुरू कर सकते हैं।",
      footer: "वेबसाइट डेवलपर",
      sendWhatsApp: "💬 WhatsApp पर आगे बढ़ें",
      cancelProject: "पूछताछ रोकने के लिए 'cancel' लिखें।"
    },

    hinglish: {
      choose: "Apni language select karo",
      welcomeTitle: "Meet Shrii ✨",
      welcome: "Priyatam Edits ki personal assistant. Pricing, services, portfolio dekho ya apna video project start karo.",
      start: "Chat start karo",
      cancel: "Close",
      greet: "Hey! Priyatam Edits mein welcome hai ✨ Main Shrii hoon. Pricing, editing services, portfolio, revisions aur project enquiry mein help karungi.",
      pricing: "<strong>Editing Packages 💰</strong><br><br><strong>Starter — ₹249 / video</strong><br>Basic cuts, captions, sound design aur 2 revisions.<br><br><strong>Creator — ₹1,499 / 3 videos</strong><br>Advanced editing, captions, motion graphics, color grading aur 3 revisions.<br><br><strong>Pro — ₹2,999 / 5 videos</strong><br>Premium editing, cinematic color, motion graphics aur priority delivery.",
      services: "<strong>Our Services 🎬</strong><br><br>• Instagram Reels<br>• YouTube Shorts aur videos<br>• Captions & subtitles<br>• Motion graphics<br>• Color grading<br>• Sound design<br>• AI / Faceless editing",
      portfolio: "Website ke Portfolio section mein available samples aur editing styles explore karo. 🎥",
      process: "<strong>Project Process</strong><br><br>1. Video requirements batao.<br>2. Style, footage aur budget discuss karo.<br>3. Price aur deadline confirm karo.<br>4. Editing aur preview milega.<br>5. Agreed revisions ke baad final delivery. ✅",
      revisions: "Starter mein 2 aur Creator mein 3 revisions hain. Pro ke revision terms project start hone se pehle confirm kar lena.",
      contact: "Priyatam Edits se connect karo:<br><br><a href='https://wa.me/916205706883' target='_blank' rel='noopener noreferrer'>💬 WhatsApp</a><br><br><a href='mailto:Priyatamkumar84@gmail.com'>📧 Email</a><br><br><a href='https://www.instagram.com/priyatam.cuts/' target='_blank' rel='noopener noreferrer'>📸 Instagram</a>",
      enquiry: "Chalo tumhara video project plan karte hain! 🎬<br><br>Kis type ka video edit karwana hai? Reel, YouTube Short, long video, cinematic ya faceless video?",
      quantity: "Kitne videos chahiye? Example: 1 Reel, 3 Shorts ya 10 videos.",
      deadline: "Delivery kab tak chahiye? Example: 2 din, 1 week ya specific date.",
      budget: "Approx budget kitna hai? Example: ₹500, ₹1,500 ya negotiable.",
      ready: "Project brief ready hai! 🎉 WhatsApp par details check karo aur Send button dabao.",
      unknown: "Main pricing, services, portfolio, revisions, contact aur project enquiry mein help kar sakti hoon. 😊",
      typing: "Shrii type kar rahi hai",
      devTitle: "Meet the Developer",
      devText: "Website Developer & Digital Creator",
      devClose: "Chat par wapas jao",
      developer: "About Developer",
      cancelEnquiry: "Enquiry cancel ho gayi. Jab chaho dobara start kar sakte ho.",
      footer: "Website developed by",
      sendWhatsApp: "💬 WhatsApp par continue karo",
      cancelProject: "Enquiry cancel karne ke liye 'cancel' type karo."
    },

    es: {
      choose: "Elige tu idioma",
      welcomeTitle: "Conoce a Shrii ✨",
      welcome: "Tu asistente personal de Priyatam Edits. Consulta servicios, precios, portafolio o inicia un proyecto.",
      start: "Comenzar chat",
      cancel: "Cerrar",
      greet: "¡Hola! Bienvenido a Priyatam Edits ✨ Soy Shrii. Puedo ayudarte con precios, servicios, portafolio y proyectos.",
      pricing: "<strong>Paquetes de edición 💰</strong><br><br><strong>Starter — ₹249 / vídeo</strong><br>Cortes básicos, subtítulos, sonido y 2 revisiones.<br><br><strong>Creator — ₹1,499 / 3 vídeos</strong><br>Edición avanzada, gráficos, color y 3 revisiones.<br><br><strong>Pro — ₹2,999 / 5 vídeos</strong><br>Edición premium y entrega prioritaria.",
      services: "Servicios: Reels de Instagram, YouTube Shorts, subtítulos, motion graphics, corrección de color, sonido y edición AI.",
      portfolio: "Visita la sección Portfolio de nuestra web para ver los ejemplos disponibles. 🎥",
      process: "Comparte tus requisitos, confirma estilo y precio, revisa la vista previa y recibe el vídeo final tras las revisiones acordadas.",
      revisions: "Starter incluye 2 revisiones y Creator incluye 3. Confirma las condiciones de Pro antes de comenzar.",
      contact: "Contacta con Priyatam Edits:<br><br><a href='https://wa.me/916205706883' target='_blank' rel='noopener noreferrer'>💬 WhatsApp</a><br><br><a href='mailto:Priyatamkumar84@gmail.com'>📧 Email</a><br><br><a href='https://www.instagram.com/priyatam.cuts/' target='_blank' rel='noopener noreferrer'>📸 Instagram</a>",
      enquiry: "¿Qué tipo de vídeo necesitas? Por ejemplo, Reel, YouTube Short o vídeo largo.",
      quantity: "¿Cuántos vídeos necesitas?",
      deadline: "¿Cuándo necesitas la entrega?",
      budget: "¿Cuál es tu presupuesto aproximado?",
      ready: "¡Tu resumen está listo! Revisa el mensaje de WhatsApp y pulsa Enviar.",
      unknown: "Puedo ayudarte con precios, servicios, portafolio, revisiones y proyectos.",
      typing: "Shrii está escribiendo",
      devTitle: "Conoce al desarrollador",
      devText: "Desarrollador web y creador digital",
      devClose: "Volver al chat",
      developer: "Sobre el desarrollador",
      cancelEnquiry: "Consulta cancelada. Puedes comenzar de nuevo.",
      footer: "Desarrollado por",
      sendWhatsApp: "💬 Continuar en WhatsApp",
      cancelProject: "Escribe 'cancel' para detener la consulta."
    },

    fr: {
      choose: "Choisissez votre langue",
      welcomeTitle: "Découvrez Shrii ✨",
      welcome: "Votre assistante personnelle chez Priyatam Edits. Découvrez les services, les tarifs ou démarrez un projet.",
      start: "Commencer la discussion",
      cancel: "Fermer",
      greet: "Bonjour et bienvenue chez Priyatam Edits ✨ Je suis Shrii. Je peux vous aider avec les tarifs, les services et les projets.",
      pricing: "<strong>Forfaits de montage 💰</strong><br><br><strong>Starter — ₹249 / vidéo</strong><br>Coupes simples, sous-titres, son et 2 révisions.<br><br><strong>Creator — ₹1,499 / 3 vidéos</strong><br>Montage avancé, animations, étalonnage et 3 révisions.<br><br><strong>Pro — ₹2,999 / 5 vidéos</strong><br>Montage premium et livraison prioritaire.",
      services: "Services : Reels Instagram, YouTube Shorts, sous-titres, motion design, étalonnage, design sonore et montage AI.",
      portfolio: "Consultez la section Portfolio de notre site pour découvrir les exemples disponibles. 🎥",
      process: "Partagez vos besoins, confirmez le style et le prix, vérifiez l'aperçu et recevez la vidéo finale après les révisions convenues.",
      revisions: "Starter comprend 2 révisions et Creator en comprend 3. Confirmez les conditions de Pro avant de commencer.",
      contact: "Contactez Priyatam Edits :<br><br><a href='https://wa.me/916205706883' target='_blank' rel='noopener noreferrer'>💬 WhatsApp</a><br><br><a href='mailto:Priyatamkumar84@gmail.com'>📧 Email</a><br><br><a href='https://www.instagram.com/priyatam.cuts/' target='_blank' rel='noopener noreferrer'>📸 Instagram</a>",
      enquiry: "Quel type de vidéo souhaitez-vous ? Par exemple, Reel, YouTube Short ou vidéo longue.",
      quantity: "Combien de vidéos souhaitez-vous ?",
      deadline: "Pour quand souhaitez-vous la livraison ?",
      budget: "Quel est votre budget approximatif ?",
      ready: "Votre demande est prête ! Vérifiez le message WhatsApp et appuyez sur Envoyer.",
      unknown: "Je peux vous aider avec les tarifs, les services, le portfolio, les révisions et les projets.",
      typing: "Shrii écrit",
      devTitle: "Rencontrez le développeur",
      devText: "Développeur web et créateur numérique",
      devClose: "Retour au chat",
      developer: "À propos du développeur",
      cancelEnquiry: "Demande annulée. Vous pouvez recommencer.",
      footer: "Développé par",
      sendWhatsApp: "💬 Continuer sur WhatsApp",
      cancelProject: "Écrivez 'cancel' pour arrêter la demande."
    }
  };

  const t = key =>
    (translations[language] && translations[language][key]) ||
    translations.en[key] || "";

  // ---------------------------------------------------------
  // PREMIUM BLACK & GOLD DESIGN
  // ---------------------------------------------------------

  if (!document.getElementById("shrii-premium-styles")) {
    const style = document.createElement("style");
    style.id = "shrii-premium-styles";

    style.textContent = `
      #chatbotBox {
        overflow: hidden !important;
        border: 1px solid rgba(255,210,28,.35) !important;
        border-radius: 20px !important;
        box-shadow: 0 22px 75px rgba(0,0,0,.42),
                    0 0 28px rgba(255,210,28,.08) !important;
        backdrop-filter: blur(18px);
      }

      #chatbotBox .shrii-toolbar {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:8px;
        padding:10px 13px;
        background:linear-gradient(135deg,#171717,#292619);
        border-bottom:1px solid rgba(255,210,28,.2);
      }

      #chatbotBox .shrii-toolbar label {
        color:#f8d84c;
        font-size:12px;
        font-weight:700;
      }

      #chatbotBox .shrii-language {
        max-width:145px;
        padding:8px 10px;
        border-radius:10px;
        color:#fff;
        background:#242424;
        border:1px solid rgba(255,210,28,.35);
        font-size:12px;
      }

      #chatbotBox #chatbotMessages {
        scroll-behavior:smooth;
      }

      #chatbotBox .bot-message,
      #chatbotBox .user-message {
        box-sizing:border-box;
        max-width:90%;
        width:fit-content;
        padding:12px 14px;
        margin:10px 0;
        line-height:1.65;
        overflow-wrap:anywhere;
        font-size:14px;
        border-radius:16px;
        animation:shriiAppear .22s ease-out;
      }

      #chatbotBox .bot-message {
        border:1px solid rgba(255,210,28,.16);
        border-bottom-left-radius:5px;
      }

      #chatbotBox .user-message {
        margin-left:auto;
        border:1px solid rgba(255,210,28,.35);
        border-bottom-right-radius:5px;
      }

      #chatbotBox .bot-message a {
        color:#ffd21c;
        overflow-wrap:anywhere;
      }

      #chatbotBox .shrii-typing {
        color:#ffd21c;
        font-style:italic;
      }

      #chatbotBox .shrii-dots {
        display:inline-flex;
        gap:4px;
        margin-left:6px;
      }

      #chatbotBox .shrii-dots i {
        width:5px;
        height:5px;
        display:inline-block;
        border-radius:50%;
        background:#ffd21c;
        animation:shriiBounce .8s infinite alternate;
      }

      #chatbotBox .shrii-dots i:nth-child(2) {
        animation-delay:.2s;
      }

      #chatbotBox .shrii-dots i:nth-child(3) {
        animation-delay:.4s;
      }

      #chatbotBox .shrii-project-button {
        display:inline-block;
        padding:11px 15px;
        border-radius:11px;
        text-decoration:none;
        font-weight:800;
        color:#171717 !important;
        background:linear-gradient(135deg,#ffe66b,#ffc800);
      }

      #chatbotBox .shrii-footer {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        gap:5px;
        padding:9px 8px;
        border-top:1px solid rgba(255,210,28,.13);
        color:#aaa;
        font-size:10px;
        text-align:center;
      }

      #chatbotBox .shrii-footer button {
        padding:3px 5px;
        border:0;
        background:none;
        color:#ffd21c;
        cursor:pointer;
        font-size:10px;
      }

      .shrii-overlay {
        position:fixed;
        inset:0;
        z-index:2147483000;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:18px;
        background:rgba(4,4,4,.78);
        backdrop-filter:blur(10px);
        animation:shriiAppear .2s ease-out;
      }

      .shrii-modal {
        box-sizing:border-box;
        width:min(100%,410px);
        max-height:90vh;
        overflow:auto;
        padding:27px 23px;
        color:#f7f7f7;
        text-align:center;
        background:linear-gradient(145deg,#1c1c1c,#101010);
        border:1px solid rgba(255,210,28,.4);
        border-radius:24px;
        box-shadow:0 25px 90px rgba(0,0,0,.55);
      }

      .shrii-modal .shrii-logo {
        width:58px;
        height:58px;
        margin:0 auto 15px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:18px;
        color:#171717;
        font-size:27px;
        background:linear-gradient(135deg,#ffe875,#ffca05);
      }

      .shrii-modal h2 {
        margin:0 0 10px;
        font-size:25px;
        color:#fff;
      }

      .shrii-modal p {
        margin:8px 0 18px;
        color:#c3c3c3;
        line-height:1.65;
        font-size:14px;
      }

      .shrii-modal label {
        display:block;
        margin:15px 0 7px;
        text-align:left;
        color:#f6d85b;
        font-size:12px;
        font-weight:700;
      }

      .shrii-modal select {
        box-sizing:border-box;
        width:100%;
        padding:13px;
        color:#fff;
        background:#252525;
        border:1px solid #484848;
        border-radius:11px;
        font-size:14px;
      }

      .shrii-modal .shrii-primary {
        display:block;
        width:100%;
        margin-top:17px;
        padding:13px;
        border:0;
        border-radius:12px;
        background:linear-gradient(135deg,#ffe875,#ffc800);
        color:#171717;
        font-size:14px;
        font-weight:800;
        cursor:pointer;
      }

      .shrii-modal .shrii-secondary {
        margin-top:12px;
        padding:9px 12px;
        border:1px solid #454545;
        border-radius:10px;
        background:transparent;
        color:#ddd;
        cursor:pointer;
      }

      .shrii-modal .shrii-dev-name {
        color:#ffdc42;
        font-weight:800;
        font-size:20px;
      }

      .shrii-modal .shrii-dev-link {
        display:inline-block;
        margin:5px;
        color:#ffd21c;
        overflow-wrap:anywhere;
      }

      @keyframes shriiAppear {
        from { opacity:0; transform:translateY(7px); }
        to { opacity:1; transform:translateY(0); }
      }

      @keyframes shriiBounce {
        from { transform:translateY(0); opacity:.45; }
        to { transform:translateY(-4px); opacity:1; }
      }

      @media(max-width:480px) {
        #chatbotBox { border-radius:18px !important; }
        #chatbotBox .shrii-toolbar { padding:9px; }
        .shrii-modal { padding:23px 18px; }
        .shrii-modal h2 { font-size:23px; }
      }

      @media(prefers-reduced-motion:reduce) {
        #chatbotBox .bot-message,
        #chatbotBox .user-message,
        .shrii-overlay {
          animation:none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // ---------------------------------------------------------
  // TOOLBAR
  // ---------------------------------------------------------

  let toolbar = box.querySelector(".shrii-toolbar");

  if (!toolbar) {
    toolbar = document.createElement("div");
    toolbar.className = "shrii-toolbar";
    toolbar.innerHTML = `
      <label for="shriiLanguage">
        🌐 <span class="shrii-language-label"></span>
      </label>
      <select class="shrii-language" id="shriiLanguage"
              aria-label="Choose chat language">
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="hinglish">Hinglish</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    `;
    box.insertBefore(toolbar, messages);
  }

  const languageSelect = toolbar.querySelector("select");

  let footer = box.querySelector(".shrii-footer");

  if (!footer) {
    footer = document.createElement("div");
    footer.className = "shrii-footer";
    footer.innerHTML = `
      <span class="shrii-footer-label"></span>
      <strong class="shrii-footer-name"></strong>
      <button type="button" class="shrii-developer-open"></button>
    `;
    box.appendChild(footer);
  }

  // ---------------------------------------------------------
  // CHAT MESSAGES
  // ---------------------------------------------------------

  function addBotMessage(html) {
    const div = document.createElement("div");
    div.className = "bot-message";
    div.innerHTML = html;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function addUserMessage(text) {
    const div = document.createElement("div");
    div.className = "user-message";
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function botRespond(html, delay = 1000) {
    const typing = document.createElement("div");
    typing.className = "bot-message shrii-typing";
    typing.innerHTML = `
      ${t("typing")}
      <span class="shrii-dots" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
    `;

    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    window.setTimeout(() => {
      typing.remove();
      addBotMessage(html);
    }, delay);
  }

  function updateToolbar() {
    const label = toolbar.querySelector(".shrii-language-label");
    if (label) label.textContent = t("choose");

    footer.querySelector(".shrii-footer-label").textContent =
      t("footer");

    footer.querySelector(".shrii-footer-name").textContent =
      DEVELOPER;

    footer.querySelector(".shrii-developer-open").textContent =
      t("developer");

    languageSelect.value = language;
  }

  // ---------------------------------------------------------
  // WELCOME POPUP
  // ---------------------------------------------------------

  function buildWelcomePopup() {
    if (welcomePopup) welcomePopup.remove();

    welcomePopup = document.createElement("div");
    welcomePopup.className = "shrii-overlay";
    welcomePopup.setAttribute("role", "dialog");
    welcomePopup.setAttribute("aria-modal", "true");

    welcomePopup.innerHTML = `
      <div class="shrii-modal">
        <div class="shrii-logo">✦</div>
        <h2 class="shrii-welcome-title"></h2>
        <p class="shrii-welcome-text"></p>
        <label for="shriiWelcomeLanguage"></label>
        <select id="shriiWelcomeLanguage">
          <option value="en">🇬🇧 English</option>
          <option value="hi">🇮🇳 हिन्दी</option>
          <option value="hinglish">💬 Hinglish</option>
          <option value="es">🇪🇸 Español</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
        <button type="button" class="shrii-primary"></button>
        <button type="button" class="shrii-secondary"></button>
      </div>
    `;

    document.body.appendChild(welcomePopup);

    const select = welcomePopup.querySelector("select");

    function updateWelcome() {
      language = select.value;
      welcomePopup.querySelector(".shrii-welcome-title").textContent =
        t("welcomeTitle");
      welcomePopup.querySelector(".shrii-welcome-text").textContent =
        t("welcome");
      welcomePopup.querySelector("label").textContent = t("choose");
      welcomePopup.querySelector(".shrii-primary").textContent =
        t("start");
      welcomePopup.querySelector(".shrii-secondary").textContent =
        t("cancel");
      updateToolbar();
    }

    select.addEventListener("change", updateWelcome);

    welcomePopup.querySelector(".shrii-primary").addEventListener(
      "click",
      () => {
        language = select.value;
        welcomeShown = true;
        updateToolbar();
        welcomePopup.remove();
        welcomePopup = null;

        botRespond(t("greet"), 150);
        input.focus();
      }
    );

    welcomePopup.querySelector(".shrii-secondary").addEventListener(
      "click",
      () => {
        welcomePopup.remove();
        welcomePopup = null;
      }
    );

    updateWelcome();
  }

  // ---------------------------------------------------------
  // DEVELOPER POPUP — AG DIGITAL HUB REMOVED
  // ---------------------------------------------------------

  function showDeveloper() {
    if (developerPopup) developerPopup.remove();

    developerPopup = document.createElement("div");
    developerPopup.className = "shrii-overlay";
    developerPopup.setAttribute("role", "dialog");
    developerPopup.setAttribute("aria-modal", "true");

    developerPopup.innerHTML = `
      <div class="shrii-modal">
        <div class="shrii-logo">✦</div>
        <h2>${t("devTitle")}</h2>
        <p>${t("devText")}</p>
        <div class="shrii-dev-name">${DEVELOPER}</div>
        <p>Website Developer & Digital Creator</p>
        <p>
          <a class="shrii-dev-link"
             href="mailto:${DEVELOPER_EMAIL}">
            ✉ Developer Email
          </a>
          <br>
          <a class="shrii-dev-link"
             href="${DEVELOPER_INSTAGRAM}"
             target="_blank" rel="noopener noreferrer">
            📸 Developer Instagram
          </a>
        </p>
        <button type="button" class="shrii-primary shrii-dev-email">
          Contact Developer
        </button>
        <button type="button" class="shrii-secondary shrii-dev-close">
          ${t("devClose")}
        </button>
      </div>
    `;

    document.body.appendChild(developerPopup);

    developerPopup.querySelector(".shrii-dev-email").addEventListener(
      "click",
      () => {
        window.location.href =
          "mailto:" + DEVELOPER_EMAIL +
          "?subject=" +
          encodeURIComponent("Website enquiry — Priyatam Edits");
      }
    );

    function closeDeveloper() {
      if (developerPopup) {
        developerPopup.remove();
        developerPopup = null;
      }
    }

    developerPopup.querySelector(".shrii-dev-close")
      .addEventListener("click", closeDeveloper);

    developerPopup.addEventListener("click", event => {
      if (event.target === developerPopup) closeDeveloper();
    });
  }

  footer.querySelector(".shrii-developer-open")
    .addEventListener("click", showDeveloper);

  // ---------------------------------------------------------
  // PROJECT ENQUIRY FLOW
  // ---------------------------------------------------------

  function startEnquiry() {
    enquiry = {
      step: "type",
      type: "",
      quantity: "",
      deadline: "",
      budget: ""
    };

    botRespond(t("enquiry"));
  }

  function handleEnquiry(answer) {
    if (!enquiry) return false;

    const normalized = answer.toLowerCase().trim();

    if (["cancel", "stop", "cancel enquiry", "band karo", "रद्द"]
      .includes(normalized)) {
      enquiry = null;
      botRespond(t("cancelEnquiry"));
      return true;
    }

    if (enquiry.step === "type") {
      enquiry.type = answer;
      enquiry.step = "quantity";
      botRespond(t("quantity"));
      return true;
    }

    if (enquiry.step === "quantity") {
      enquiry.quantity = answer;
      enquiry.step = "deadline";
      botRespond(t("deadline"));
      return true;
    }

    if (enquiry.step === "deadline") {
      enquiry.deadline = answer;
      enquiry.step = "budget";
      botRespond(t("budget"));
      return true;
    }

    if (enquiry.step === "budget") {
      enquiry.budget = answer;

      const details = [
        "Hello Priyatam Edits!",
        "",
        "Video type: " + enquiry.type,
        "Quantity: " + enquiry.quantity,
        "Deadline: " + enquiry.deadline,
        "Budget: " + enquiry.budget,
        "Preferred language: " + languageNames[language],
        "Please share the final quote and next steps."
      ].join("\n");

      const whatsappURL =
        "https://wa.me/" + WHATSAPP +
        "?text=" + encodeURIComponent(details);

      enquiry = null;

      botRespond(
        t("ready") +
        "<br><br><a class='shrii-project-button' href='" +
        whatsappURL +
        "' target='_blank' rel='noopener noreferrer'>" +
        t("sendWhatsApp") +
        "</a>"
      );

      return true;
    }

    return false;
  }

  // ---------------------------------------------------------
  // SMART KEYWORD REPLIES
  // ---------------------------------------------------------

  function replyFor(message) {
    const s = message.toLowerCase().trim();

    if (
      ["hi", "hello", "hey", "namaste", "namaskar"].includes(s) ||
      s.includes("good morning") ||
      s.includes("kaise ho") ||
      s.includes("नमस्ते")
    ) return t("greet");

    if (
      s.includes("thank") ||
      s.includes("shukriya") ||
      s.includes("धन्यवाद")
    ) {
      if (language === "hi") {
        return "आपका स्वागत है! 😊 और कुछ पूछना हो तो बताइए।";
      }
      if (language === "hinglish") {
        return "Welcome! 😊 Aur kuch poochna ho toh batao.";
      }
      return "You're welcome! 😊 What else can I help you with?";
    }

    if (
      s.includes("developer") ||
      s.includes("who made") ||
      s.includes("kisne banaya") ||
      s.includes("ayush") ||
      s.includes("website kisne")
    ) {
      showDeveloper();
      return null;
    }

    if (
      s.includes("cancel enquiry") ||
      s === "cancel" ||
      s === "stop"
    ) {
      enquiry = null;
      return t("cancelEnquiry");
    }

    if (
      s.includes("enquiry") ||
      s.includes("inquiry") ||
      s.includes("project") ||
      s.includes("order") ||
      s.includes("book") ||
      s.includes("hire") ||
      s.includes("करवाना") ||
      s.includes("edit karwana")
    ) {
      startEnquiry();
      return null;
    }

    if (
      s.includes("price") ||
      s.includes("pricing") ||
      s.includes("cost") ||
      s.includes("rate") ||
      s.includes("package") ||
      s.includes("budget") ||
      s.includes("kitna") ||
      s.includes("kitne") ||
      s.includes("paisa") ||
      s.includes("paise") ||
      s.includes("कीमत") ||
      s.includes("कितना")
    ) return t("pricing");

    if (
      s.includes("portfolio") ||
      s.includes("sample") ||
      s.includes("your work") ||
      s.includes("work dikhao") ||
      s.includes("काम दिखाओ")
    ) return t("portfolio");

    if (
      s.includes("service") ||
      s.includes("editing") ||
      s.includes("edit") ||
      s.includes("reel") ||
      s.includes("short") ||
      s.includes("youtube") ||
      s.includes("caption") ||
      s.includes("subtitle") ||
      s.includes("motion") ||
      s.includes("color") ||
      s.includes("sound") ||
      s.includes("सेवा")
    ) return t("services");

    if (
      s.includes("revision") ||
      s.includes("change") ||
      s.includes("correction") ||
      s.includes("रिवीजन")
    ) return t("revisions");

    if (
      s.includes("process") ||
      s.includes("how to") ||
      s.includes("kaise") ||
      s.includes("कैसे")
    ) return t("process");

    if (
      s.includes("contact") ||
      s.includes("whatsapp") ||
      s.includes("email") ||
      s.includes("instagram") ||
      s.includes("number") ||
      s.includes("संपर्क")
    ) return t("contact");

    return t("unknown");
  }

  // ---------------------------------------------------------
  // SEND MESSAGE
  // ---------------------------------------------------------

  function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    addUserMessage(message);
    input.value = "";

    if (handleEnquiry(message)) return;

    const reply = replyFor(message);
    if (reply) botRespond(reply);
  }

  if (send) {
    send.addEventListener("click", event => {
      event.stopPropagation();
      sendMessage();
    });
  }

  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  // Keep existing quick-reply buttons compatible:
  // botReply('pricing'), botReply('services'), etc.
  window.botReply = function(type) {
    const key = String(type || "").toLowerCase();

    if (key === "enquiry" || key === "project") {
      startEnquiry();
      return;
    }

    const validKeys = [
      "pricing", "services", "portfolio",
      "process", "revisions", "contact"
    ];

    if (validKeys.includes(key)) {
      botRespond(t(key), 200);
      return;
    }

    const response = replyFor(key);
    if (response) botRespond(response, 200);
  };

  // ---------------------------------------------------------
  // OPEN / CLOSE — SUPPORTS BOTH CSS CLASS NAMES
  // ---------------------------------------------------------

  function openChat() {
    box.classList.add("active");
    box.classList.add("open");

    if (!welcomeShown) {
      if (!welcomePopup) buildWelcomePopup();
    } else {
      input.focus();
    }
  }

  function closeChat() {
    box.classList.remove("active");
    box.classList.remove("open");
  }

  if (btn) {
    btn.addEventListener("click", event => {
      event.stopPropagation();

      const isOpen =
        box.classList.contains("active") ||
        box.classList.contains("open");

      if (isOpen) {
        closeChat();
      } else {
        openChat();
      }
    });
  }

  if (close) {
    close.addEventListener("click", event => {
      event.stopPropagation();
      closeChat();
    });
  }

  document.addEventListener("click", event => {
    if (
      !box.contains(event.target) &&
      btn &&
      !btn.contains(event.target)
    ) {
      closeChat();
    }
  });

  // Update existing chatbot heading, if present
  const brand = box.querySelector(".chatbot-brand strong");
  const status = box.querySelector(".chatbot-brand small");

  if (brand) brand.textContent = "Shrii";

  if (status) {
    status.innerHTML =
      '<span class="online-dot"></span> Online · Multilingual Assistant';
  }

  updateToolbar();

})();

/* =========================================================
   PRICING 3D MOUSE TILT
========================================================= */

const pricingVisual = document.querySelector(".pricing-3d-visual");
const pricingAvatar = document.querySelector(".pricing-3d-avatar");

if (pricingVisual && pricingAvatar && window.innerWidth > 700) {

    pricingVisual.addEventListener("mousemove", function (event) {

        const rect = pricingVisual.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 6;
        const rotateX = ((centerY - y) / centerY) * 5;

        pricingAvatar.style.transform =
            `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    });

    pricingVisual.addEventListener("mouseleave", function () {

        pricingAvatar.style.transform =
            "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";

    });

}
/* =========================================================
   PREMIUM PRICING POPUP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const pricingModal = document.getElementById("pricingModal");
    const pricingModalBackdrop =
        document.getElementById("pricingModalBackdrop");

    const pricingModalClose =
        document.getElementById("pricingModalClose");

    const modalPackageName =
        document.getElementById("modalPackageName");

    const modalPackageDescription =
        document.getElementById("modalPackageDescription");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalPriceUnit =
        document.getElementById("modalPriceUnit");

    const modalFeatures =
        document.getElementById("modalFeatures");

    const modalStartBtn =
        document.getElementById("modalStartBtn");


    /* =====================================================
       PACKAGE DATA
    ===================================================== */

    const packages = {

        starter: {
            name: "Starter",

            description:
                "Perfect for creators who want clean and engaging short-form content.",

            price: "₹249",

            unit: "/ video",

            features: [
                "1 Reel / Short",
                "Clean cuts",
                "Basic captions",
                "Basic sound design",
                "2 revisions"
            ]
        },


        creator: {
            name: "Creator",

            description:
                "Built for creators who want consistent, polished and engaging content.",

            price: "₹1,499",

            unit: "/ 3 videos",

            features: [
                "Advanced editing",
                "Captions + motion",
                "Sound design",
                "Color grading",
                "3 revisions"
            ]
        },


        pro: {
            name: "Pro",

            description:
                "For creators and brands who want premium cinematic editing and stronger visual impact.",

            price: "₹2,999",

            unit: "/ 5 videos",

            features: [
                "Premium editing",
                "Advanced motion graphics",
                "Cinematic color",
                "Professional sound design",
                "Priority delivery"
            ]
        }

    };


    /* =====================================================
       OPEN POPUP
    ===================================================== */

    function openPricingModal(packageType) {

        const selectedPackage = packages[packageType];

        if (!selectedPackage || !pricingModal) return;


        /* Update content */

        if (modalPackageName) {
            modalPackageName.textContent =
                selectedPackage.name;
        }

        if (modalPackageDescription) {
            modalPackageDescription.textContent =
                selectedPackage.description;
        }

        if (modalPrice) {
            modalPrice.textContent =
                selectedPackage.price;
        }

        if (modalPriceUnit) {
            modalPriceUnit.textContent =
                selectedPackage.unit;
        }


        /* Update features */

        if (modalFeatures) {

            modalFeatures.innerHTML = "";

            selectedPackage.features.forEach(function (feature) {

                const featureElement =
                    document.createElement("div");

                featureElement.className =
                    "modal-feature";

                featureElement.innerHTML = `
                    <span>✓</span>
                    ${feature}
                `;

                modalFeatures.appendChild(
                    featureElement
                );

            });

        }


        /* Open */

        pricingModal.classList.add("active");

        document.body.classList.add(
            "pricing-modal-open"
        );

    }


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    function closePricingModal() {

        if (!pricingModal) return;

        pricingModal.classList.remove("active");

        document.body.classList.remove(
            "pricing-modal-open"
        );

    }


    /* =====================================================
       PRICING BUTTONS
    ===================================================== */

    const pricingButtons =
        document.querySelectorAll(
            '#pricing .price .btn'
        );


    pricingButtons.forEach(function (button, index) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            let packageType;

            if (index === 0) {
                packageType = "starter";
            }

            else if (index === 1) {
                packageType = "creator";
            }

            else if (index === 2) {
                packageType = "pro";
            }

            openPricingModal(packageType);

        });

    });


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (pricingModalClose) {

        pricingModalClose.addEventListener(
            "click",
            closePricingModal
        );

    }


    /* =====================================================
       BACKDROP CLICK
    ===================================================== */

    if (pricingModalBackdrop) {

        pricingModalBackdrop.addEventListener(
            "click",
            closePricingModal
        );

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                pricingModal.classList.contains("active")
            ) {
                closePricingModal();
            }

        }
    );


    /* =====================================================
       PREVENT BACKGROUND SCROLL
    ===================================================== */

    const pricingModalStyle =
        document.createElement("style");

    pricingModalStyle.innerHTML = `
        body.pricing-modal-open {
            overflow: hidden !important;
        }
    `;

    document.head.appendChild(
        pricingModalStyle
    );

});
/* =========================================================
   PRICING POPUP — 3D MOUSE TILT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const modalCard =
        document.getElementById("pricingModalCard");

    const modalVisual =
        document.querySelector(".pricing-modal-visual");

    const modalAvatar =
        document.querySelector(".pricing-modal-avatar");

    if (!modalCard || !modalVisual || !modalAvatar) return;


    /* Desktop only */

    if (window.innerWidth <= 760) return;


    modalVisual.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                modalVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) / centerX) * 8;

            const rotateX =
                ((centerY - y) / centerY) * 6;


            modalAvatar.style.animation =
                "none";

            modalAvatar.style.transform =
                `
                translateY(-5px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.04)
                `;
        }
    );


    /* Reset when mouse leaves */

    modalVisual.addEventListener(
        "mouseleave",
        function () {

            modalAvatar.style.transform =
                "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";

            modalAvatar.style.animation =
                "modalAvatarFloat 5s ease-in-out infinite";

        }
    );

});
/* =========================================================
   PREMIUM PRICING POPUP — 3D PARALLAX DEPTH
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const visual = document.querySelector(".pricing-modal-visual");

    if (!visual || window.innerWidth <= 760) return;

    const avatar = visual.querySelector(".pricing-modal-avatar");
    const orbitOne = visual.querySelector(".orbit-one");
    const orbitTwo = visual.querySelector(".orbit-two");

    const chipOne = visual.querySelector(".chip-one");
    const chipTwo = visual.querySelector(".chip-two");
    const chipThree = visual.querySelector(".chip-three");

    const light = visual.querySelector(".modal-3d-light");


    visual.addEventListener("mousemove", function (event) {

        const rect = visual.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const mouseX =
            (x - rect.width / 2) /
            (rect.width / 2);

        const mouseY =
            (y - rect.height / 2) /
            (rect.height / 2);


        /* ---------------------------------------------
           MAIN CHARACTER — deepest visual
        --------------------------------------------- */

        if (avatar) {

            avatar.style.animation = "none";

            avatar.style.transform = `
                translate3d(
                    ${mouseX * 10}px,
                    ${mouseY * 7}px,
                    35px
                )
                rotateX(${-mouseY * 6}deg)
                rotateY(${mouseX * 9}deg)
                scale(1.04)
            `;
        }


        /* ---------------------------------------------
           ORBIT 1
        --------------------------------------------- */

        if (orbitOne) {

            orbitOne.style.animation = "none";

            orbitOne.style.transform = `
                translate3d(
                    ${mouseX * 8}px,
                    ${mouseY * 5}px,
                    15px
                )
                rotateX(66deg)
                rotateZ(${mouseX * 12 - 18}deg)
            `;
        }


        /* ---------------------------------------------
           ORBIT 2
        --------------------------------------------- */

        if (orbitTwo) {

            orbitTwo.style.animation = "none";

            orbitTwo.style.transform = `
                translate3d(
                    ${mouseX * -6}px,
                    ${mouseY * -4}px,
                    5px
                )
                rotateX(66deg)
                rotateZ(${mouseX * -10 + 38}deg)
            `;
        }


        /* ---------------------------------------------
           FLOATING CHIP 1
        --------------------------------------------- */

        if (chipOne) {

            chipOne.style.animation = "none";

            chipOne.style.transform = `
                translate3d(
                    ${mouseX * -14}px,
                    ${mouseY * -10}px,
                    45px
                )
                rotate(-6deg)
            `;
        }


        /* ---------------------------------------------
           FLOATING CHIP 2
        --------------------------------------------- */

        if (chipTwo) {

            chipTwo.style.animation = "none";

            chipTwo.style.transform = `
                translate3d(
                    ${mouseX * 18}px,
                    ${mouseY * 12}px,
                    65px
                )
                rotate(5deg)
            `;
        }


        /* ---------------------------------------------
           FLOATING CHIP 3
        --------------------------------------------- */

        if (chipThree) {

            chipThree.style.animation = "none";

            chipThree.style.transform = `
                translate3d(
                    ${mouseX * -10}px,
                    ${mouseY * 15}px,
                    30px
                )
                rotate(4deg)
            `;
        }


        /* ---------------------------------------------
           LIGHT
        --------------------------------------------- */

        if (light) {

            light.style.animation = "none";

            light.style.transform = `
                translate3d(
                    ${mouseX * 30}px,
                    ${mouseY * 20}px,
                    80px
                )
            `;
        }

    });


    /* =====================================================
       RESET WHEN MOUSE LEAVES
    ===================================================== */

    visual.addEventListener("mouseleave", function () {

        if (avatar) {
            avatar.style.animation =
                "modalAvatarFloat 5s ease-in-out infinite";

            avatar.style.transform =
                "";
        }

        if (orbitOne) {
            orbitOne.style.animation =
                "orbitSpin 12s linear infinite";

            orbitOne.style.transform =
                "";
        }

        if (orbitTwo) {
            orbitTwo.style.animation =
                "orbitSpinReverse 17s linear infinite";

            orbitTwo.style.transform =
                "";
        }

        if (chipOne) {
            chipOne.style.animation =
                "chipFloatOne 4s ease-in-out infinite";

            chipOne.style.transform =
                "";
        }

        if (chipTwo) {
            chipTwo.style.animation =
                "chipFloatTwo 4.5s ease-in-out infinite";

            chipTwo.style.transform =
                "";
        }

        if (chipThree) {
            chipThree.style.animation =
                "chipFloatThree 5s ease-in-out infinite";

            chipThree.style.transform =
                "";
        }

        if (light) {
            light.style.animation =
                "lightOrbit 6s linear infinite";

            light.style.transform =
                "";
        }

    });

});
/* =========================================================
   PRICING POPUP — PACKAGE SPECIFIC WHATSAPP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const startBtn =
        document.getElementById("modalStartBtn");

    const packageName =
        document.getElementById("modalPackageName");

    const packagePrice =
        document.getElementById("modalPrice");

    const packageUnit =
        document.getElementById("modalPriceUnit");


    if (!startBtn) return;


    startBtn.addEventListener("click", function (event) {

        event.preventDefault();


        const selectedPackage =
            packageName
                ? packageName.textContent.trim()
                : "Video Editing";


        const selectedPrice =
            packagePrice
                ? packagePrice.textContent.trim()
                : "";


        const selectedUnit =
            packageUnit
                ? packageUnit.textContent.trim()
                : "";


        const message =
`Hello Priyatam Edits 👋

I want to discuss the ${selectedPackage} package.

Package: ${selectedPackage}
Price: ${selectedPrice} ${selectedUnit}

I would like to know more about the editing process and delivery.

Thank you!`;


        const whatsappURL =
            "https://wa.me/916205706883?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

});
/* =========================================================
   PRIYATAM EDITS — CINEMATIC INTRO CONTROLLER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const intro =
        document.getElementById("cinematicIntro");

    const progress =
        document.getElementById("introProgress");

    const percent =
        document.getElementById("introPercent");

    if (!intro) return;


    /* Prevent scrolling */

    document.body.style.overflow = "hidden";


    /* Percentage counter */

    let value = 0;

    const counter = setInterval(function () {

        value += 2;

        if (value > 100) {
            value = 100;
        }

        if (percent) {
            percent.textContent =
                String(value).padStart(2, "0") + "%";
        }

        if (value >= 100) {
            clearInterval(counter);
        }

    }, 48);


    /* Finish intro */

    setTimeout(function () {

        intro.classList.add("intro-finished");

        document.body.style.overflow = "";


        /* Remove intro */

        setTimeout(function () {

            intro.remove();

        }, 1100);

    }, 4500);

});
/* =========================================================
   PREMIUM CUSTOM CURSOR
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const cursor = document.querySelector(".custom-cursor");
    const glow = document.querySelector(".cursor-glow");

    if (!cursor || !glow || window.innerWidth <= 768) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    document.addEventListener("mousemove", function (e) {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });

    function animateGlow() {

        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;

        glow.style.left = glowX + "px";
        glow.style.top = glowY + "px";

        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    const hoverElements = document.querySelectorAll(
        "a, button, .price, .portfolio-card, .service-card, .chatbot-btn"
    );

    hoverElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {
            document.body.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", function () {
            document.body.classList.remove("cursor-hover");
        });

    });

});
/* =========================================================
   MAGNETIC BUTTON EFFECT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth <= 768) return;

    const magneticButtons = document.querySelectorAll(
        ".btn, .chatbot-btn"
    );

    magneticButtons.forEach(function (button) {

        button.addEventListener("mousemove", function (event) {

            const rect = button.getBoundingClientRect();

            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            const moveX = x * 0.18;
            const moveY = y * 0.18;

            button.style.transform =
                `translate(${moveX}px, ${moveY}px)`;
        });

        button.addEventListener("mouseleave", function () {

            button.style.transform = "translate(0, 0)";
        });

    });

});
/* =========================================================
   PORTFOLIO 3D TILT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth <= 768) return;

    const cards = document.querySelectorAll(".portfolio-card");

    cards.forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 7;

            const rotateX =
                ((centerY - y) / centerY) * 6;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        });

        card.addEventListener("mouseleave", function () {

            card.style.transform =
                "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });

    });

});
/* =========================================================
   BEFORE / AFTER SLIDER FUNCTION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".before-after");
    const range = document.querySelector(".before-after-range");
    const beforeImage = document.querySelector(".before-image");
    const sliderLine = document.querySelector(".slider-line");

    if (!slider || !range || !beforeImage || !sliderLine) return;

    function updateBeforeAfter(value) {

        beforeImage.style.width = value + "%";
        sliderLine.style.left = value + "%";

    }

    range.addEventListener("input", function () {

        updateBeforeAfter(this.value);

    });

    updateBeforeAfter(range.value);

});
