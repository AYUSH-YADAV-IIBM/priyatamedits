/* =========================================================
   PRIYATAM EDITS — MAIN SCRIPT
   Local portfolio videos + website interactions
   ========================================================= */


/* =========================================================
   HERO VIDEO
   ========================================================= */

const heroVideo = document.getElementById("heroVideo");
const soundBtn = document.getElementById("soundBtn");

if (heroVideo) {
    heroVideo.muted = true;

    const playHero = () => {
        const promise = heroVideo.play();

        if (promise !== undefined) {
            promise.catch(() => {
                // Browser autoplay restriction
            });
        }
    };

    playHero();

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            playHero();
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
            soundBtn.textContent = "🔊 Sound On";
            heroVideo.volume = 0.7;
        }
    });
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            menuBtn.classList.remove("active");
        });
    });
}


/* =========================================================
   PORTFOLIO DATA
   LOCAL VIDEO FILES
   ========================================================= */

const portfolioData = {

    client: {
        label: "CLIENT PROJECTS",
        title: "Edits built for real brands.",
        description:
            "Promotional reels, social media content and high-retention edits created for clients.",

        videos: [

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
const portfolioTabs = document.querySelectorAll(".portfolio-tab");

const portfolioCategoryLabel =
    document.getElementById("portfolioCategoryLabel");

const portfolioCategoryTitle =
    document.getElementById("portfolioCategoryTitle");

const portfolioCategoryDescription =
    document.getElementById("portfolioCategoryDescription");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


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

    const card = document.createElement("article");

    // Existing CSS classes preserved
    card.className = "card drive-card";

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

    const data = portfolioData[category];

    if (!data) return;

    currentCategory = category;


    /* -----------------------------------------
       Update category heading
       ----------------------------------------- */

    if (portfolioCategoryLabel) {
        portfolioCategoryLabel.textContent = data.label;
    }

    if (portfolioCategoryTitle) {
        portfolioCategoryTitle.textContent = data.title;
    }

    if (portfolioCategoryDescription) {
        portfolioCategoryDescription.textContent = data.description;
    }


    /* -----------------------------------------
       Clear old cards
       ----------------------------------------- */

    slider.innerHTML = "";


    /* -----------------------------------------
       Add new cards
       ----------------------------------------- */

    data.videos.forEach(video => {

        const card = createPortfolioCard(video);

        slider.appendChild(card);

    });


    /* -----------------------------------------
       Start from beginning
       ----------------------------------------- */

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

        const category = tab.dataset.category;

        renderPortfolio(category);

    });

});


/* =========================================================
   PORTFOLIO SLIDER
   ========================================================= */

function getScrollAmount() {

    if (!slider) return 0;

    const firstCard = slider.querySelector(".card");

    if (!firstCard) {
        return 330;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;

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
        prevBtn.disabled = slider.scrollLeft <= 5;
    }

    if (nextBtn) {
        const maxScroll =
            slider.scrollWidth - slider.clientWidth;

        nextBtn.disabled =
            slider.scrollLeft >= maxScroll - 5;
    }

}


if (slider) {

    slider.addEventListener("scroll", () => {
        updatePortfolioButtons();
    });

    window.addEventListener("resize", () => {
        updatePortfolioButtons();
    });

}


/* =========================================================
   INITIAL PORTFOLIO
   ========================================================= */

renderPortfolio("client");


/* =========================================================
   FEEDBACK SYSTEM
   ========================================================= */

const feedbackForm = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

const FEEDBACK_KEY = "priyatam_edits_feedback";


function getFeedback() {

    try {

        return JSON.parse(
            localStorage.getItem(FEEDBACK_KEY)
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveFeedback(data) {

    localStorage.setItem(
        FEEDBACK_KEY,
        JSON.stringify(data)
    );

}


function renderFeedback() {

    if (!feedbackList) return;

    const feedback = getFeedback();

    feedbackList.innerHTML = "";


    if (feedback.length === 0) {

        feedbackList.innerHTML = `
            <p class="empty-feedback">
                No feedback yet. Be the first to share your experience.
            </p>
        `;

        return;
    }


    feedback
        .slice()
        .reverse()
        .forEach(item => {

            const box = document.createElement("div");

            box.className = "feedback-item";

            box.innerHTML = `
                <div class="feedback-name">
                    ${escapeHTML(item.name)}
                </div>

                <div class="feedback-stars">
                    ${"★".repeat(Number(item.rating) || 5)}
                </div>

                <p>
                    ${escapeHTML(item.message)}
                </p>
            `;

            feedbackList.appendChild(box);

        });

}


if (feedbackForm) {

    feedbackForm.addEventListener("submit", event => {

        event.preventDefault();


        const nameInput =
            feedbackForm.querySelector(
                '[name="name"]'
            );

        const messageInput =
            feedbackForm.querySelector(
                '[name="message"]'
            );

        const ratingInput =
            feedbackForm.querySelector(
                '[name="rating"]'
            );


        const name =
            nameInput ? nameInput.value.trim() : "";

        const message =
            messageInput ? messageInput.value.trim() : "";

        const rating =
            ratingInput ? ratingInput.value : "5";


        if (!name || !message) {

            alert("Please fill in your name and feedback.");

            return;
        }


        const feedback = getFeedback();


        feedback.push({

            name,
            message,
            rating,
            date: new Date().toISOString()

        });


        saveFeedback(feedback);

        renderFeedback();

        feedbackForm.reset();


        alert("Thank you for your feedback ❤️");

    });

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


    question.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("active");


        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

        });


        if (!isOpen) {

            item.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

const scrollProgress =
    document.getElementById("scrollProgress");


function updateScrollProgress() {

    if (!scrollProgress) return;


    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        scrollProgress.style.width = "0%";

        return;
    }


    const percentage =
        (scrollTop / documentHeight) * 100;


    scrollProgress.style.width =
        `${Math.min(100, Math.max(0, percentage))}%`;

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
    document.getElementById("backToTop");


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   SHOW / HIDE BACK TO TOP
   ========================================================= */

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
   SMOOTH SCROLL FOR ANCHOR LINKS
   ========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");


        if (!targetId || targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

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
   PAGE READY
   ========================================================= */

document.documentElement.classList.add(
    "js-ready"
);

console.log(
    "Priyatam Edits website loaded successfully."
);