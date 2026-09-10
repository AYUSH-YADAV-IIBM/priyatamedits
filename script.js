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

const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile");

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
   GET FEEDBACK
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
   SAVE FEEDBACK
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
   CHATBOT
   SINGLE CLEAN VERSION
========================================================= */

/* =========================================================
   SHrii — PRIYATAM EDITS PERSONAL ASSISTANT
========================================================= */

const chatbotBtn =
    document.getElementById("chatbotBtn");

const chatbotBox =
    document.getElementById("chatbotBox");

const chatbotClose =
    document.getElementById("chatbotClose");

const chatbotMessages =
    document.getElementById("chatbotMessages");

const chatbotInput =
    document.getElementById("chatbotInput");

const chatbotSend =
    document.getElementById("chatbotSend");


/* =========================================================
   OPEN CHATBOT
========================================================= */

if (chatbotBtn && chatbotBox) {

    chatbotBtn.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            chatbotBox.classList.toggle("active");

            if (
                chatbotBox.classList.contains("active") &&
                chatbotInput
            ) {
                setTimeout(
                    function() {
                        chatbotInput.focus();
                    },
                    150
                );
            }

        }
    );

}


/* =========================================================
   CLOSE CHATBOT
========================================================= */

if (chatbotClose && chatbotBox) {

    chatbotClose.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            chatbotBox.classList.remove("active");

        }
    );

}


/* =========================================================
   SHrii BOT REPLIES
========================================================= */

const botReplies = {

    greeting: `
        <strong>Hey! I'm Shrii ✨</strong><br><br>

        It's lovely to have you here. 😊<br>

        I'm here to help you with anything related to
        <strong>Priyatam Edits</strong> — whether you'd like
        to know about pricing, services, portfolio or the
        editing process.<br><br>

        What would you like to know?
    `,


    pricing: `
        <strong>Of course 😊 Let me help you with the pricing.</strong>
        <br><br>

        <strong>Starter — ₹249 / video</strong><br>
        Clean cuts • Basic captions • Basic sound design •
        2 revisions
        <br><br>

        <strong>Creator — ₹1,499 / 3 videos</strong><br>
        Advanced editing • Captions + Motion • Sound design •
        Color grading • 3 revisions
        <br><br>

        <strong>Pro — ₹2,999 / 5 videos</strong><br>
        Premium editing • Advanced motion graphics •
        Cinematic color • Sound design • Priority delivery
        <br><br>

        If you're not sure which package would be best for
        your content, just tell me what kind of videos you
        make and I'll guide you. 💛
    `,


    portfolio: `
        <strong>Absolutely! I'd love to show you the work. 🎬</strong>
        <br><br>

        You can explore the <strong>Portfolio</strong> section
        to see Client Projects, Agency Work and AI / Faceless edits.
        <br><br>

        If you find an editing style you like, feel free to
        tell me about it. 😊
    `,


    services: `
        <strong>Sure 😊 Here's what Priyatam Edits offers:</strong>
        <br><br>

        ✂️ Instagram Reels<br>
        🎬 YouTube Shorts<br>
        🎥 YouTube Videos<br>
        💬 Captions & Subtitles<br>
        ✨ Motion Graphics<br>
        🎨 Color Grading<br>
        🔊 Sound Design
        <br><br>

        If you already have a particular style in mind,
        just describe it to me and I'll guide you.
    `,


    process: `
        <strong>It's quite simple 😊</strong>
        <br><br>

        <strong>1.</strong> You send your footage.<br>
        <strong>2.</strong> You tell us your requirements
        and preferred style.<br>
        <strong>3.</strong> Editing starts.<br>
        <strong>4.</strong> A preview is shared with you.<br>
        <strong>5.</strong> Revisions are made if needed.<br>
        <strong>6.</strong> The final video is delivered
        ready to publish.
        <br><br>

        I'll make sure the process stays simple and
        comfortable for you. 💛
    `,


    revisions: `
        <strong>Yes, revisions are available. 😊</strong>
        <br><br>

        <strong>Starter:</strong> 2 revisions<br>
        <strong>Creator:</strong> 3 revisions<br>
        <strong>Pro:</strong> Priority delivery
        <br><br>

        So if you'd like a few changes after seeing the
        first version, that's absolutely okay.
    `,


    contact: `
        <strong>I'd be happy to help you get in touch. 😊</strong>
        <br><br>

        You can contact Priyatam Edits through:
        <br><br>

        <a
            href="https://wa.me/916205706883"
            target="_blank"
            rel="noopener"
            style="color:#ffd21c;"
        >
            💬 WhatsApp
        </a>

        <br><br>

        <a
            href="mailto:Priyatamkumar84@gmail.com"
            style="color:#ffd21c;"
        >
            📧 Email
        </a>

        <br><br>

        <a
            href="https://www.instagram.com/priyatam.cuts/"
            target="_blank"
            rel="noopener"
            style="color:#ffd21c;"
        >
            📸 Instagram
        </a>

        <br><br>

        Just choose whichever option is easiest for you. 💛
    `,


    thanks: `
        You're very welcome! 😊💛
        <br><br>

        I'm always happy to help.

        If there's anything else you'd like to know
        about Priyatam Edits, just ask me.
    `,


    goodbye: `
        It was lovely chatting with you. 😊
        <br><br>

        Take care, and whenever you're ready to start
        your project, I'll be here to help. ✨
    `
};


/* =========================================================
   ADD BOT MESSAGE
========================================================= */

function addBotMessage(message) {

    if (!chatbotMessages) return;

    const div =
        document.createElement("div");

    div.className =
        "bot-message";

    div.innerHTML =
        message;

    chatbotMessages.appendChild(div);

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;
}


/* =========================================================
   ADD USER MESSAGE
========================================================= */

function addUserMessage(message) {

    if (!chatbotMessages) return;

    const div =
        document.createElement("div");

    div.className =
        "user-message";

    div.textContent =
        message;

    chatbotMessages.appendChild(div);

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;
}


/* =========================================================
   QUICK BUTTON REPLY
========================================================= */

window.botReply = function(type) {

    if (!botReplies[type]) return;

    addBotMessage(
        botReplies[type]
    );

};


/* =========================================================
   TEXT REPLY
========================================================= */

function getTextReply(message) {

    const text =
        message.toLowerCase().trim();


    /* GREETING */

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text === "hii" ||
        text === "hiii" ||
        text.includes("good morning") ||
        text.includes("good afternoon") ||
        text.includes("good evening") ||
        text.includes("namaste") ||
        text.includes("kaise ho")
    ) {

        return botReplies.greeting;

    }


    /* THANK YOU */

    if (
        text.includes("thank you") ||
        text.includes("thank u") ||
        text.includes("thanks") ||
        text.includes("thnx") ||
        text.includes("dhanyavad")
    ) {

        return botReplies.thanks;

    }


    /* GOODBYE */

    if (
        text === "bye" ||
        text.includes("goodbye") ||
        text.includes("see you") ||
        text.includes("good night")
    ) {

        return botReplies.goodbye;

    }


    /* PRICING */

    if (
        text.includes("price") ||
        text.includes("pricing") ||
        text.includes("cost") ||
        text.includes("rate") ||
        text.includes("package") ||
        text.includes("budget") ||
        text.includes("₹") ||
        text.includes("kitna") ||
        text.includes("kitne")
    ) {

        return botReplies.pricing;

    }


    /* PORTFOLIO */

    if (
        text.includes("portfolio") ||
        text.includes("work") ||
        text.includes("sample") ||
        text.includes("samples") ||
        text.includes("show me") ||
        text.includes("your work")
    ) {

        return botReplies.portfolio;

    }


    /* SERVICES */

    if (
        text.includes("service") ||
        text.includes("services") ||
        text.includes("editing") ||
        text.includes("edit") ||
        text.includes("reel") ||
        text.includes("short") ||
        text.includes("youtube") ||
        text.includes("caption") ||
        text.includes("subtitle") ||
        text.includes("motion") ||
        text.includes("color") ||
        text.includes("sound")
    ) {

        return botReplies.services;

    }


    /* PROCESS */

    if (
        text.includes("process") ||
        text.includes("how") ||
        text.includes("kaise") ||
        text.includes("order") ||
        text.includes("start") ||
        text.includes("work with you")
    ) {

        return botReplies.process;

    }


    /* REVISIONS */

    if (
        text.includes("revision") ||
        text.includes("revisions") ||
        text.includes("change") ||
        text.includes("changes") ||
        text.includes("modify") ||
        text.includes("correction")
    ) {

        return botReplies.revisions;

    }


    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("whatsapp") ||
        text.includes("email") ||
        text.includes("instagram") ||
        text.includes("talk") ||
        text.includes("hire") ||
        text.includes("reach")
    ) {

        return botReplies.contact;

    }


    /* NATURAL DEFAULT */

    const naturalReplies = [

        `
            I understand 😊
            <br><br>

            Could you tell me a little more about what
            you're looking for? I'll do my best to guide you.
        `,

        `
            Of course! 😊 I'm happy to help.
            <br><br>

            You can ask me about
            <strong>pricing, portfolio, services,
            process or contact details</strong>.
        `,

        `
            I got you. ✨
            <br><br>

            Just tell me what you need help with,
            and we'll take it from there. 😊
        `,

        `
            Hmm, let me help you with that. 😊
            <br><br>

            I can help with
            <strong>pricing, portfolio, services,
            editing process, revisions and contact</strong>.
        `,

        `
            No worries at all. 💛
            <br><br>

            Tell me a little more about your project
            and I'll point you in the right direction.
        `
    ];


    return naturalReplies[
        Math.floor(
            Math.random() *
            naturalReplies.length
        )
    ];
}


/* =========================================================
   SEND MESSAGE
========================================================= */

function sendChatMessage() {

    if (!chatbotInput) return;

    const message =
        chatbotInput.value.trim();

    if (!message) return;

    addUserMessage(message);

    chatbotInput.value = "";


    /* NATURAL RESPONSE DELAY */

    setTimeout(
        function() {

            addBotMessage(
                getTextReply(message)
            );

        },
        500
    );

}


/* =========================================================
   SEND BUTTON
========================================================= */

if (chatbotSend) {

    chatbotSend.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            sendChatMessage();

        }
    );

}


/* =========================================================
   ENTER KEY
========================================================= */

if (chatbotInput) {

    chatbotInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendChatMessage();

            }

        }
    );

}


/* =========================================================
   PREVENT CHATBOX FROM CLOSING
========================================================= */

if (chatbotBox) {

    chatbotBox.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

        }
    );

}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            !chatbotBox ||
            !chatbotBtn
        ) {
            return;
        }


        if (
            !chatbotBox.classList.contains("active")
        ) {
            return;
        }


        if (
            !chatbotBox.contains(event.target) &&
            !chatbotBtn.contains(event.target)
        ) {

            chatbotBox.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   SET CHATBOT NAME = SHrii
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const chatbotName =
            document.querySelector(
                ".chatbot-brand strong"
            );

        if (chatbotName) {

            chatbotName.textContent =
                "Shrii";

        }


        const chatbotStatus =
            document.querySelector(
                ".chatbot-brand small"
            );

        if (chatbotStatus) {

            chatbotStatus.innerHTML =
                '<span class="online-dot"></span>Online · Here to help';

        }

    }
);