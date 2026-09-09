
        /* =========================================
           HERO SOUND
        ========================================= */

        const heroVideo =
            document.getElementById("heroVideo");

        const soundButton =
            document.getElementById("sound");


        soundButton.addEventListener(
            "click",
            function () {

                if (heroVideo.muted) {

                    heroVideo.muted = false;

                    heroVideo.volume = 1;

                    soundButton.textContent =
                        "🔊 Sound On";

                    heroVideo
                        .play()
                        .catch(() => { });

                } else {

                    heroVideo.muted = true;

                    soundButton.textContent =
                        "🔇 Sound Off";

                }

            }
        );



        /* =========================================
           MOBILE MENU
        ========================================= */

        const menuButton =
            document.getElementById("menu");

        const mobileMenu =
            document.getElementById("mobile");


        menuButton.addEventListener(
            "click",
            function () {

                mobileMenu.classList.toggle(
                    "open"
                );

                document.body.classList.toggle(
                    "no-scroll"
                );


                menuButton.textContent =
                    mobileMenu.classList.contains("open")
                        ? "×"
                        : "☰";

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mobileMenu.classList.remove(
                            "open"
                        );

                        document.body.classList.remove(
                            "no-scroll"
                        );

                        menuButton.textContent =
                            "☰";

                    }
                );

            });



        /* =========================================
           PORTFOLIO DATA · 4 CATEGORIES × 10 VIDEOS
        ========================================= */
        const portfolioData = {

            // =========================================
            // 1. CLIENT PROJECTS
            // =========================================

            client: {
                label: "CLIENT PROJECTS",
                title: "Edits made for real projects.",
                description: "Client-focused reels and videos built around the brief, audience, platform and brand style.",

                videos: [
                    [
                        "Client Reel 01",
                        "Sunraaj – Construction Promotional Reel",
                        "Client Project",
                        "Social media reel edited for strong hooks, clean cuts and audience retention.",
                        "1M7C5BiP3Oj-5U1HOFXjmlE90rsDcxTQ_"
                    ],

                    [
                        "Client Reel 02",
                        "Crown Gym – Fitness Promotional Reel 💪🔥",
                        "Client Project",
                        "Creator-focused edit with captions, pacing and platform-ready storytelling.",
                        "1RE7fuBC1DXQTSuapkCZIaJZSnUQ6ta4j"
                    ],

                    [
                        "Client Reel 03",
                        "Brosin Finance – Financial Services Promotional Reel 💼📈",
                        "Client Project",
                        "Brand content with polished visuals, music sync and professional color.",
                        "10Tp4FnmKSCnQfwHd6pfkvDQncapPUYIQ"
                    ],

                    [
                        "Client Reel 04",
                        "Fitness Reel",
                        "Client Project",
                        "Energetic fitness edit with dynamic cuts, sound effects and captions.",
                        "1vBHc0xGWWMG4J7s0l73VnYZe5k67i2l-"
                    ],

                    [
                        "Client Reel 05",
                        "Vinay Kumar – Goal Investment Promotional Reel 📈💼",
                        "Client Project",
                        "Personal branding reel designed to feel clean, premium and engaging.",
                        "15mgSq9-3SFyj_2tIU_tH4ircvKBiXdt2"
                    ]
                ]
            },


            // =========================================
            // 2. AGENCY WORK
            // =========================================

            agency: {
                label: "AGENCY · CREATIVE WORK",
                title: "Built for agency-level delivery.",
                description: "Creative edits prepared for agency campaigns, social media clients, brands and commercial content.",

                videos: [
                    [
                        "Agency Campaign 01",
                        "DigiHandler – Social Media Agency Promotional Reel 🚀📱",
                        "Creative Agency",
                        "Campaign edit built around brand messaging, motion graphics and strong pacing.",
                        "1DZcucfptiFhP76xglb59_h1nnOyzG4NL"
                    ],

                    [
                        "Agency Reel 02",
                        "DigiHandler – Social Media Creative Reel 🚀",
                        "Creative Agency",
                        "Social-first brand edit with captions, transitions and music sync.",
                        "1yt6OOOicpJt0vhpZ27NoQw9KxF7GPqZu"
                    ],

                    [
                        "Agency Ad 03",
                        "Advertisement",
                        "Creative Agency",
                        "Commercial-style edit focused on product presentation and visual impact.",
                        "16Ntqwmt3S3VmDIDoXkzdLNx4LzdAaEJu"
                    ]
                ]
            },


            // =========================================
            // 3. AI CHARACTER / FACELESS
            // =========================================

            ai: {
                label: "AI CHARACTER · FACELESS REELS",

                title: "AI content built for attention.",

                description: "AI character reels, faceless storytelling, captions, sound design and retention-focused editing.",

                videos: [

                    [
                        "AI Reel 01",
                        "AI Model – Skincare Product Promotional Reel ✨🧴",
                        "Creator Project",
                        "AI character storytelling with cinematic pacing, captions and sound design.",
                        "1VKaEddF11OzmKpnYW5qsNU4cNe3Ipkod"
                    ],

                    [
                        "AI Reel 02",
                        "AI Model – Skincare Product Promotional Reel ✨🧴",
                        "Creator Project",
                        "Faceless short-form edit focused on hooks, pacing and visual storytelling.",
                        "1jK9fHQbn4ytQq2Lx3x7MVFVwuBw74fuN"
                    ]

                ]
            }

            /*
            // =========================================
            // 4. CREATIVE / EXPERIMENTAL EDITS
            // =========================================
        
            creative: {
                label: "CREATIVE · EXPERIMENTAL EDITS",
                title: "Where editing becomes creative.",
                description: "Experimental edits, cinematic concepts, motion design, transitions and visual storytelling.",
                videos: []
            }
            */

        };


        // =========================================
        // PORTFOLIO ELEMENTS
        // =========================================

        const slider = document.getElementById("slider");

        const categoryLabel = document.getElementById(
            "portfolioCategoryLabel"
        );

        const categoryTitle = document.getElementById(
            "portfolioCategoryTitle"
        );

        const categoryDescription = document.getElementById(
            "portfolioCategoryDescription"
        );


        // =========================================
        // GOOGLE DRIVE URL
        // =========================================

        function drivePreviewUrl(id) {
            return "https://drive.google.com/file/d/" + id + "/preview";
        }

        function driveOpenUrl(id) {
            return "https://drive.google.com/file/d/" + id + "/view";
        }


        // =========================================
        // RENDER PORTFOLIO
        // =========================================

        function renderPortfolio(category) {

            const data = portfolioData[category];

            if (!data) {
                return;
            }

            categoryLabel.textContent = data.label;

            categoryTitle.textContent = data.title;

            categoryDescription.textContent =
                data.description;

            slider.innerHTML = "";


            data.videos.forEach(function (video, index) {

                const number =
                    String(index + 1).padStart(2, "0");

                const fileId = video[4];


                const card =
                    document.createElement("article");

                card.className =
                    "card drive-card";


                card.innerHTML = `
            <iframe
                class="drive-frame"
                src="${drivePreviewUrl(fileId)}"
                title="${video[0]}"
                loading="lazy"
                allow="autoplay; fullscreen"
                allowfullscreen>
            </iframe>

            <div class="info">

                <small>
                    ${number} · ${video[1]}
                </small>

                <h3>
                    ${video[0]}
                </h3>

                <p>
                    <strong>Created for:</strong>
                    ${video[2]}
                </p>

                <p>
                    ${video[3]}
                </p>

                <a
                    class="drive-open"
                    href="${driveOpenUrl(fileId)}"
                    target="_blank"
                    rel="noopener">
                    Open Full Video ↗
                </a>

            </div>
        `;


                slider.appendChild(card);

            });
        }


        // =========================================
        // CATEGORY TABS
        // =========================================

        document
            .querySelectorAll(".portfolio-tab")
            .forEach(function (tab) {

                tab.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(".portfolio-tab")
                            .forEach(function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            });


                        tab.classList.add("active");


                        slider.scrollTo({
                            left: 0,
                            behavior: "smooth"
                        });


                        renderPortfolio(
                            tab.dataset.category
                        );

                    }
                );

            });


        // =========================================
        // NEXT BUTTON
        // =========================================

        document
            .getElementById("next")
            .addEventListener(
                "click",
                function () {

                    slider.scrollBy({

                        left:
                            slider.clientWidth > 700
                                ? 350
                                : slider.clientWidth * 0.82,

                        behavior: "smooth"

                    });

                }
            );


        // =========================================
        // PREVIOUS BUTTON
        // =========================================

        document
            .getElementById("prev")
            .addEventListener(
                "click",
                function () {

                    slider.scrollBy({

                        left:
                            -(slider.clientWidth > 700
                                ? 350
                                : slider.clientWidth * 0.82),

                        behavior: "smooth"

                    });

                }
            );


        // =========================================
        // FIRST LOAD = CLIENT PROJECTS
        // =========================================

        renderPortfolio("client");


        /* =========================================
           STAR RATING
        ========================================= */

        let rating = 0;


        document
            .querySelectorAll(".star")
            .forEach(function (star) {

                star.addEventListener(
                    "click",
                    function () {

                        rating =
                            Number(
                                star.dataset.r
                            );


                        document
                            .querySelectorAll(".star")
                            .forEach(
                                function (item) {

                                    item.classList.toggle(
                                        "active",
                                        Number(
                                            item.dataset.r
                                        ) <= rating
                                    );

                                }
                            );

                    }
                );

            });



        /* =========================================
           SECURITY
        ========================================= */

        function escapeHTML(value) {

            const div =
                document.createElement("div");

            div.textContent = value;

            return div.innerHTML;

        }



        /* =========================================
           LOAD REVIEWS
        ========================================= */

        function loadReviews() {

            let reviews = [];


            try {

                reviews =
                    JSON.parse(
                        localStorage.getItem(
                            "priyatamReviews"
                        ) || "[]"
                    );

            } catch (error) {

                reviews = [];

            }


            const reviewsBox =
                document.getElementById(
                    "reviews"
                );


            reviewsBox.innerHTML = "";


            if (reviews.length === 0) {

                reviewsBox.innerHTML = `

                    <p class="none">

                        No reviews yet.
                        Be the first to share
                        your experience.

                    </p>

                `;

                return;

            }


            reviews.forEach(
                function (review) {

                    const article =
                        document.createElement(
                            "article"
                        );


                    article.className =
                        "review";


                    article.innerHTML = `

                        <div class="review-head">

                            <b>
                                ${escapeHTML(
                        review.name
                    )}
                            </b>

                            <span class="review-stars">

                                ${"★".repeat(
                        Number(
                            review.rating
                        )
                    )}

                            </span>

                        </div>

                        <p class="review-text">

                            ${escapeHTML(
                        review.text
                    )}

                        </p>

                    `;


                    reviewsBox.appendChild(
                        article
                    );

                }
            );

        }



        /* =========================================
           SUBMIT FEEDBACK
        ========================================= */

        document
            .getElementById("submit")
            .addEventListener(
                "click",
                function () {

                    const name =
                        document
                            .getElementById("name")
                            .value
                            .trim();


                    const text =
                        document
                            .getElementById("text")
                            .value
                            .trim();


                    if (!name) {

                        alert(
                            "Please enter your name."
                        );

                        return;

                    }


                    if (!text) {

                        alert(
                            "Please write your feedback."
                        );

                        return;

                    }


                    if (!rating) {

                        alert(
                            "Please select a rating."
                        );

                        return;

                    }


                    let reviews = [];


                    try {

                        reviews =
                            JSON.parse(
                                localStorage.getItem(
                                    "priyatamReviews"
                                ) || "[]"
                            );

                    } catch (error) {

                        reviews = [];

                    }


                    reviews.unshift({

                        name: name,

                        text: text,

                        rating: rating

                    });


                    localStorage.setItem(
                        "priyatamReviews",
                        JSON.stringify(reviews)
                    );


                    document
                        .getElementById("name")
                        .value = "";


                    document
                        .getElementById("text")
                        .value = "";


                    rating = 0;


                    document
                        .querySelectorAll(".star")
                        .forEach(
                            function (star) {

                                star.classList.remove(
                                    "active"
                                );

                            }
                        );


                    loadReviews();


                    alert(
                        "Thank you for your feedback!"
                    );

                }
            );



        /* =========================================
           FAQ
        ========================================= */

        document
            .querySelectorAll(".faq-question")
            .forEach(
                function (question) {

                    question.addEventListener(
                        "click",
                        function () {

                            const item =
                                question.parentElement;


                            document
                                .querySelectorAll(
                                    ".faq-item"
                                )
                                .forEach(
                                    function (other) {

                                        if (
                                            other !== item
                                        ) {

                                            other.classList.remove(
                                                "active"
                                            );

                                        }

                                    }
                                );


                            item.classList.toggle(
                                "active"
                            );

                        }
                    );

                }
            );



        /* =========================================
           SCROLL PROGRESS
        ========================================= */

        const progress =
            document.getElementById(
                "progress"
            );


        window.addEventListener(
            "scroll",
            function () {

                const scrollTop =
                    window.scrollY;

                const pageHeight =
                    document.documentElement
                        .scrollHeight
                    - window.innerHeight;


                const percentage =
                    pageHeight > 0
                        ? (scrollTop / pageHeight) * 100
                        : 0;


                progress.style.width =
                    percentage + "%";

            }
        );



        /* =========================================
           BACK TO TOP
        ========================================= */

        const topButton =
            document.getElementById("top");


        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 700) {

                    topButton.classList.add(
                        "show"
                    );

                } else {

                    topButton.classList.remove(
                        "show"
                    );

                }

            }
        );


        topButton.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );



        /* =========================================
           INITIAL LOAD
        ========================================= */

        loadReviews();


        /* =========================================
           TRY HERO AUTOPLAY
        ========================================= */

        heroVideo
            .play()
            .catch(() => { });
            /* =========================================
   PRIYATAM EDITS — FREE CHATBOT
========================================= */

/* =========================================
   PRIYATAM EDITS CHATBOT
========================================= */

/* =========================================
   PRIYATAM EDITS — ANANYA CHATBOT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const chatbotBtn =
        document.getElementById("chatbotBtn");

    const chatbotBox =
        document.getElementById("chatbotBox");

    const chatbotClose =
        document.getElementById("chatbotClose");

    const chatbotInput =
        document.getElementById("chatbotInput");

    const chatbotSend =
        document.getElementById("chatbotSend");

    const chatbotMessages =
        document.getElementById("chatbotMessages");


    /* =========================================
       CHECK ELEMENTS
    ========================================= */

    if (
        !chatbotBtn ||
        !chatbotBox ||
        !chatbotClose ||
        !chatbotInput ||
        !chatbotSend ||
        !chatbotMessages
    ) {
        console.log("Sheraya chatbot elements not found.");
        return;
    }


    /* =========================================
       CHATBOT STATE
    ========================================= */

    let step = "start";

    let clientData = {
        name: "",
        service: "",
        videos: "",
        deadline: "",
        budget: ""
    };


    /* =========================================
       OPEN CHAT
    ========================================= */

    chatbotBtn.addEventListener("click", function () {

        chatbotBox.classList.add("open");

        chatbotInput.focus();

        /* First welcome message */
        if (!chatbotMessages.dataset.started) {

            chatbotMessages.dataset.started = "true";

            setTimeout(function () {

                addMessage(`
                    Hey 👋 I'm <strong>Sheraya</strong> from
                    <strong>Priyatam Edits</strong>.
                    <br><br>
                    I'd love to help you with your video project 😊
                    <br><br>
                    What should I call you?
                `, "bot");

                step = "name";

            }, 400);
        }

    });


    /* =========================================
       CLOSE CHAT
    ========================================= */

    chatbotClose.addEventListener("click", function () {

        chatbotBox.classList.remove("open");

    });


    /* =========================================
       ADD MESSAGE
    ========================================= */

    function addMessage(text, type) {

        const message =
            document.createElement("div");

        message.className =
            type === "user"
                ? "user-message"
                : "bot-message";

        message.innerHTML = text;

        chatbotMessages.appendChild(message);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;
    }


    /* =========================================
       TYPING EFFECT
    ========================================= */

    function botTyping(reply, delay = 700) {

        const typing =
            document.createElement("div");

        typing.className = "bot-message";

        typing.innerHTML = `
            <span class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        `;

        chatbotMessages.appendChild(typing);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;


        setTimeout(function () {

            typing.remove();

            addMessage(reply, "bot");

        }, delay);
    }


    /* =========================================
       QUICK REPLY
    ========================================= */

    window.botReply = function (type) {

        let userText = "";
        let reply = "";


        /* ===============================
           PRICING
        =============================== */

        if (type === "pricing") {

            userText =
                "What is your pricing?";

            reply = `
                Sure 😊 Here are our editing packages:

                <br><br>

                💰 <strong>Starter — ₹249/video</strong>
                <br>
                Clean cuts • Basic captions •
                Basic sound design • 2 revisions

                <br><br>

                🚀 <strong>Creator — ₹1,499 / 3 videos</strong>
                <br>
                Advanced editing • Motion •
                Sound design • Color grading •
                3 revisions

                <br><br>

                🎬 <strong>Pro — ₹2,999 / 5 videos</strong>
                <br>
                Premium editing • Advanced motion graphics •
                Cinematic color • Sound design •
                Priority delivery

                <br><br>

                If you tell me what kind of video you have,
                I can help you choose the right package 😊
            `;
        }


        /* ===============================
           PORTFOLIO
        =============================== */

        else if (type === "portfolio") {

            userText =
                "Can I see your work?";

            reply = `
                Of course! 🎬

                <br><br>

                You can check our
                <strong>Showcase / Portfolio</strong>
                section to see our editing work.

                <br><br>

                We work on Reels, Shorts, YouTube videos,
                cinematic edits and AI / faceless content.

                <br><br>

                Take a look and let me know which style
                you like 😊
            `;
        }


        /* ===============================
           SERVICES
        =============================== */

        else if (type === "services") {

            userText =
                "What services do you provide?";

            reply = `
                Absolutely 😊 We can help with:

                <br><br>

                ✂️ Reels & Shorts
                <br>
                🎥 YouTube Editing
                <br>
                ✨ Motion Graphics
                <br>
                📝 Captions & Subtitles
                <br>
                🎨 Color Grading
                <br>
                🔊 Sound Design
                <br>
                🎬 Cinematic Editing
                <br>
                🤖 AI / Faceless Videos

                <br><br>

                Basically, if you have the footage,
                we can help turn it into something much more engaging.
            `;
        }


        /* ===============================
           PROCESS
        =============================== */

        else if (type === "process") {

            userText =
                "How does the process work?";

            reply = `
                It's pretty simple 😊

                <br><br>

                <strong>01 — Brief</strong>
                <br>
                You share your footage and requirements.

                <br><br>

                <strong>02 — Edit</strong>
                <br>
                We work on your video.

                <br><br>

                <strong>03 — Review</strong>
                <br>
                You share your feedback.

                <br><br>

                <strong>04 — Deliver</strong>
                <br>
                We deliver the final polished video.
            `;
        }


        /* ===============================
           REVISIONS
        =============================== */

        else if (type === "revisions") {

            userText =
                "How many revisions do I get?";

            reply = `
                No worries 😊 You get revisions with every package.

                <br><br>

                <strong>Starter:</strong> 2 revisions
                <br>
                <strong>Creator:</strong> 3 revisions
                <br>
                <strong>Pro:</strong> 3 revisions

                <br><br>

                Your feedback helps us make the final edit
                exactly how you want it.
            `;
        }


        /* ===============================
           CONTACT
        =============================== */

        else if (type === "contact") {

            userText =
                "How can I contact you?";

            reply = `
                Sure 😊 Let's discuss your project.

                <br><br>

                💬
                <a
                    href="https://wa.me/916205706883"
                    target="_blank"
                    style="color:#ffd21c;"
                >
                    Chat with us on WhatsApp →
                </a>

                <br><br>

                📧
                <a
                    href="mailto:Priyatamkumar84@gmail.com"
                    style="color:#ffd21c;"
                >
                    Send an Email →
                </a>

                <br><br>

                📸
                <a
                    href="https://www.instagram.com/priyatam.cuts/"
                    target="_blank"
                    style="color:#ffd21c;"
                >
                    Instagram →
                </a>
            `;
        }


        addMessage(userText, "user");

        botTyping(reply, 700);

    };


    /* =========================================
       SEND CHAT
    ========================================= */

    function sendChat() {

        const text =
            chatbotInput.value.trim();

        if (!text) return;


        addMessage(text, "user");

        chatbotInput.value = "";


        const msg =
            text.toLowerCase();


        /* =====================================
           STEP 1 — NAME
        ===================================== */

        if (step === "name") {

            clientData.name = text;

            step = "service";

            botTyping(`
                Nice to meet you, <strong>${escapeHTML(clientData.name)}</strong> 😊
                <br><br>
                What type of video do you need edited?
                <br><br>
                For example: Reel, YouTube, Short,
                cinematic video, ad, AI/faceless video...
            `);

            return;
        }


        /* =====================================
           STEP 2 — SERVICE
        ===================================== */

        if (step === "service") {

            clientData.service = text;

            step = "videos";

            botTyping(`
                Got it 👍 <strong>${escapeHTML(clientData.service)}</strong>
                sounds good.

                <br><br>

                Approximately how many videos
                do you need?
            `);

            return;
        }


        /* =====================================
           STEP 3 — NUMBER OF VIDEOS
        ===================================== */

        if (step === "videos") {

            clientData.videos = text;

            step = "deadline";

            botTyping(`
                Perfect 😊

                <br><br>

                When would you like the videos
                to be ready?
                <br><br>

                You can simply tell me something like
                <strong>tomorrow</strong>,
                <strong>3 days</strong>,
                or <strong>next week</strong>.
            `);

            return;
        }


        /* =====================================
           STEP 4 — DEADLINE
        ===================================== */

        if (step === "deadline") {

            clientData.deadline = text;

            step = "budget";

            botTyping(`
                Got it 👍

                <br><br>

                And do you already have a budget
                in mind for the project?

                <br><br>

                Don't worry if you're not sure —
                you can simply say <strong>not sure</strong>.
            `);

            return;
        }


        /* =====================================
           STEP 5 — BUDGET
        ===================================== */

        if (step === "budget") {

            clientData.budget = text;

            step = "summary";

            botTyping(`
                Thanks, ${escapeHTML(clientData.name)} 😊
                I have everything I need.

                <br><br>

                <strong>Here's what I understood:</strong>

                <br><br>

                👤 Name:
                ${escapeHTML(clientData.name)}

                <br>

                🎬 Video:
                ${escapeHTML(clientData.service)}

                <br>

                📦 Videos:
                ${escapeHTML(clientData.videos)}

                <br>

                ⏰ Deadline:
                ${escapeHTML(clientData.deadline)}

                <br>

                💰 Budget:
                ${escapeHTML(clientData.budget)}

                <br><br>

                Would you like to discuss this directly
                with Priyatam Edits?
                
                <br><br>

                <a
                    href="https://wa.me/916205706883"
                    target="_blank"
                    style="
                        display:inline-block;
                        padding:10px 14px;
                        background:#ffd21c;
                        color:#000;
                        border-radius:8px;
                        text-decoration:none;
                        font-weight:700;
                        margin-right:6px;
                    "
                >
                    💬 WhatsApp
                </a>

                <a
                    href="mailto:Priyatamkumar84@gmail.com"
                    style="
                        display:inline-block;
                        padding:10px 14px;
                        border:1px solid #ffd21c;
                        color:#ffd21c;
                        border-radius:8px;
                        text-decoration:none;
                        font-weight:700;
                    "
                >
                    📧 Email
                </a>
            `);

            return;
        }


        /* =====================================
           GENERAL QUESTIONS
        ===================================== */

        let reply = `
            Hmm 😊 I'm here to help.

            <br><br>

            You can ask me about:
            <br>
            💰 Pricing
            <br>
            🎬 Portfolio
            <br>
            ✂️ Services
            <br>
            🔄 Revisions
            <br>
            ⚡ Process
            <br>
            📩 Contact
        `;


        /* =====================================
           PRICING
        ===================================== */

        if (
            msg.includes("price") ||
            msg.includes("pricing") ||
            msg.includes("cost") ||
            msg.includes("rate") ||
            msg.includes("budget") ||
            msg.includes("₹")
        ) {

            reply = `
                Sure 😊 Our editing starts from
                <strong>₹249/video</strong>.

                <br><br>

                💰 Starter — ₹249/video
                <br>
                🚀 Creator — ₹1,499 / 3 videos
                <br>
                🎬 Pro — ₹2,999 / 5 videos

                <br><br>

                If you tell me your video type
                and number of videos, I can guide you
                toward the best option.
            `;
        }


        /* =====================================
           PORTFOLIO
        ===================================== */

        else if (
            msg.includes("portfolio") ||
            msg.includes("sample") ||
            msg.includes("work") ||
            msg.includes("video sample")
        ) {

            reply = `
                Of course! 🎬

                <br><br>

                Head over to our
                <strong>Showcase / Portfolio</strong>
                section to see our latest work.

                <br><br>

                We have Reels, Shorts, YouTube,
                cinematic and AI/faceless edits.
            `;
        }


        /* =====================================
           SERVICES
        ===================================== */

        else if (
            msg.includes("service") ||
            msg.includes("editing") ||
            msg.includes("edit") ||
            msg.includes("reel") ||
            msg.includes("youtube") ||
            msg.includes("short") ||
            msg.includes("motion")
        ) {

            reply = `
                Absolutely 😊

                <br><br>

                We offer professional video editing
                for <strong>Reels, Shorts, YouTube,
                cinematic videos, ads and AI/faceless content.</strong>

                <br><br>

                We can also handle captions,
                motion graphics, color grading
                and sound design.
            `;
        }


        /* =====================================
           REVISIONS
        ===================================== */

        else if (
            msg.includes("revision") ||
            msg.includes("changes") ||
            msg.includes("modify")
        ) {

            reply = `
                Yes 😊 Revisions are included.

                <br><br>

                Starter — <strong>2 revisions</strong>
                <br>
                Creator — <strong>3 revisions</strong>
                <br>
                Pro — <strong>3 revisions</strong>
            `;
        }


        /* =====================================
           CONTACT
        ===================================== */

        else if (
            msg.includes("contact") ||
            msg.includes("whatsapp") ||
            msg.includes("email") ||
            msg.includes("instagram") ||
            msg.includes("talk")
        ) {

            reply = `
                Of course 😊 You can contact us directly:

                <br><br>

                💬
                <a
                    href="https://wa.me/916205706883"
                    target="_blank"
                    style="color:#ffd21c;"
                >
                    WhatsApp
                </a>

                <br><br>

                📧
                <a
                    href="mailto:Priyatamkumar84@gmail.com"
                    style="color:#ffd21c;"
                >
                    Email
                </a>

                <br><br>

                📸
                <a
                    href="https://www.instagram.com/priyatam.cuts/"
                    target="_blank"
                    style="color:#ffd21c;"
                >
                    Instagram
                </a>

                <br><br>

                I'll be happy to help you 😊
            `;
        }


        /* =====================================
           HELLO
        ===================================== */

        else if (
            msg === "hi" ||
            msg === "hello" ||
            msg === "hey" ||
            msg.includes("hi ananya") ||
            msg.includes("hello ananya") ||
            msg.includes("hey ananya")
        ) {

            reply = `
                Hey! 👋

                <br><br>

                Nice to see you here 😊
                I'm <strong>Ananya</strong> from
                Priyatam Edits.

                <br><br>

                What can I help you with today?
            `;
        }


        /* =====================================
           THANK YOU
        ===================================== */

        else if (
            msg.includes("thank") ||
            msg.includes("thanks")
        ) {

            reply = `
                You're very welcome 😊❤️

                <br><br>

                If you need anything else,
                just message me anytime.
            `;
        }


        /* =====================================
           OK / YES
        ===================================== */

        else if (
            msg === "ok" ||
            msg === "okay" ||
            msg === "yes" ||
            msg === "sure"
        ) {

            reply = `
                Perfect 😊

                <br><br>

                Whenever you're ready,
                just tell me about your video
                and I'll guide you through it.
            `;
        }


        /* =====================================
           UNKNOWN MESSAGE
        ===================================== */

        else {

            reply = `
                Hmm, I got you 😊

                <br><br>

                I'm Sheraya, your Priyatam Edits assistant.
                I can help you with:

                <br><br>

                💰 <strong>Pricing</strong>
                <br>
                🎬 <strong>Portfolio</strong>
                <br>
                ✂️ <strong>Services</strong>
                <br>
                🔄 <strong>Revisions</strong>
                <br>
                ⚡ <strong>Process</strong>
                <br>
                📩 <strong>Contact</strong>

                <br><br>

                Or simply tell me what kind of video
                you want to edit 😊
            `;
        }


        /* =====================================
           BOT RESPONSE
        ===================================== */

        botTyping(reply, 700);

    }


    /* =========================================
       SEND BUTTON
    ========================================= */

    chatbotSend.addEventListener(
        "click",
        function () {

            sendChat();

        }
    );


    /* =========================================
       ENTER KEY
    ========================================= */

    chatbotInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendChat();

            }

        }
    );


    /* =========================================
       ESCAPE HTML
    ========================================= */

    function escapeHTML(value) {

        const div =
            document.createElement("div");

        div.textContent = value;

        return div.innerHTML;

    }

});