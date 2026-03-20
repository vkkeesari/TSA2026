const resources = [
    {
        name: "Common Heart",
        category: "Human Services",
        focus: "Hunger relief and community support",
        description: "Supports families through food access programs and local kindness initiatives.",
        contact: "704-218-9060 | commonheart.org",
        url: "https://commonheart.org"
    },
    {
        name: "Museum of the Waxhaws",
        category: "Arts/History",
        focus: "Regional history and exhibits",
        description: "Highlights Waxhaw area heritage with educational exhibits and programs.",
        contact: "704-843-1832 | museumofthewaxhaws.org",
        url: "https://museumofthewaxhaws.org"
    },
    {
        name: "Waxhaw Community Theatre",
        category: "Arts/History",
        focus: "Community theatre productions",
        description: "Provides local productions and performance opportunities for residents.",
        contact: "waxhawcommunitytheatre.com",
        url: "https://waxhawcommunitytheatre.com"
    },
    {
        name: "Heart for Monroe",
        category: "Human Services",
        focus: "Family support and local outreach",
        description: "Coordinates local service projects and aid programs for residents.",
        contact: "heartformonroe.com",
        url: "https://heartformonroe.com"
    },
    {
        name: "Turning Point",
        category: "Health",
        focus: "Crisis support and counseling",
        description: "Offers crisis response and trauma-informed support services.",
        contact: "704-283-7233 | turningpointnc.org",
        url: "https://turningpointnc.org"
    },
    {
        name: "HealthQuest",
        category: "Health",
        focus: "Wellness and medication access",
        description: "Connects uninsured residents with medications and health education.",
        contact: "704-226-2050 | healthquestuc.org",
        url: "https://healthquestuc.org"
    },
    {
        name: "Thrive Counseling",
        category: "Health",
        focus: "Mental health counseling",
        description: "Provides therapy and counseling for children, teens, and adults.",
        contact: "704-243-2615 | thrivewellnesstherapy.com",
        url: "https://thrivewellnesstherapy.com"
    },
    {
        name: "Cane Creek Park",
        category: "Recreation",
        focus: "Outdoor recreation",
        description: "Features lake activities, trails, and outdoor family recreation.",
        contact: "704-843-3919 | unioncountync.gov/canecreek",
        url: "https://unioncountync.gov/canecreek"
    },
    {
        name: "WCWAA",
        category: "Arts/History",
        focus: "Community arts and athletics",
        description: "Supports youth programming and community cultural engagement.",
        contact: "wcwaa.org",
        url: "https://wcwaa.org"
    },
    {
        name: "JAARS",
        category: "Education",
        focus: "STEM and language learning",
        description: "Offers educational outreach and technology-focused learning experiences.",
        contact: "704-843-6000 | jaars.org",
        url: "https://jaars.org"
    },
    {
        name: "SPCC",
        category: "Education",
        focus: "Career and continuing education",
        description: "Provides pathways for skill building and academic advancement.",
        contact: "704-272-5300 | spcc.edu",
        url: "https://spcc.edu"
    },
    {
        name: "Humane Society",
        category: "Human Services",
        focus: "Animal welfare and adoption",
        description: "Supports pet adoption and community animal-care services.",
        contact: "704-283-9126 | hsuc.org",
        url: "https://hsuc.org"
    },
    {
        name: "Union County Public Library - Waxhaw Branch",
        category: "Education",
        focus: "Literacy, technology access, and community workshops",
        description: "A vital hub for student research, offering free tutoring resources, Storytime for younger children, and high-speed internet access for the community.",
        contact: "704-283-8184 | ucpl.libguides.com/waxhaw",
        url: "https://ucpl.libguides.com/waxhaw"
    },
    {
        name: "Union Day School",
        category: "Education",
        focus: "Charter education with an inquiry-based curriculum",
        description: "A tuition-free public charter school serving the Weddington/Waxhaw area, focused on rigorous, globally-minded education for K-12 students.",
        contact: "704-256-1494 | uniondayschool.com",
        url: "https://uniondayschool.com"
    },
    {
        name: "The Little Gym of Weddington",
        category: "Education",
        focus: "Early childhood physical education and development",
        description: "Provides Serious Fun through gymnastics and motor-skill classes, helping children build confidence and social skills in a non-competitive environment.",
        contact: "704-321-3930 | thelittlegym.com/weddington",
        url: "https://www.thelittlegym.com/north-carolina-indian-trail/"
    },
    {
        name: "Weddington Town Park",
        category: "Recreation",
        focus: "Local nature trails and quiet outdoor space",
        description: "Located behind Town Hall, this park features a walking trail, playground, and pavilion for small community gatherings.",
        contact: "704-846-1402 | townofweddington.com",
        url: "https://www.townofweddington.com"
    },
    {
        name: "Town of Waxhaw Skate Park",
        category: "Recreation",
        focus: "Youth athletics and action sports",
        description: "A designated concrete skate park for local skateboarders and bikers to practice and build community through sports.",
        contact: "704-843-2195 | waxhaw.com",
        url: "https://www.waxhaw.com"
    },
    {
        name: "Twelve Claws Nature Preserve",
        category: "Recreation",
        focus: "Wildlife conservation and hiking",
        description: "A hidden Waxhaw-area preserve offering rugged trails and opportunities to explore Carolina Piedmont flora and fauna.",
        contact: "tarheeltrailblazers.com",
        url: "https://tarheeltrailblazers.com"
    },
    {
        name: "The Storefront Theatre",
        category: "Arts/History",
        focus: "Professional-grade community theatre",
        description: "An intimate Waxhaw theatre company producing high-quality plays and providing a platform for local playwrights and actors.",
        contact: "thestorefronttheatre.org",
        url: "https://thestorefronttheatre.org"
    },
    {
        name: "Union County Community Shelter",
        category: "Human Services",
        focus: "Emergency housing and nutrition",
        description: "A primary provider of emergency shelter and hot meals for families facing homelessness across Weddington and Waxhaw zip codes.",
        contact: "704-289-5300 | unionshelter.org",
        url: "https://unionshelter.org"
    }
];

const slices = Array.from(document.querySelectorAll(".slice"));
const nodeLayer = document.getElementById("nodeLayer");
const resetMapBtn = document.getElementById("resetMapBtn");
const hubStage = document.getElementById("hubStage");
const resourcePanel = document.getElementById("resourcePanel");
const resourcePanelShell = document.getElementById("resourcePanelShell");
const panelTitle = document.getElementById("panelTitle");
const panelIntro = document.getElementById("panelIntro");
const detailBackBtn = document.getElementById("detailBackBtn");
const detailTitle = document.getElementById("detailTitle");
const detailFocus = document.getElementById("detailFocus");
const detailDescription = document.getElementById("detailDescription");
const detailContact = document.getElementById("detailContact");
const detailWebsiteBtn = document.getElementById("detailWebsiteBtn");
const mapShell = document.querySelector(".map-shell");
const sliceGroups = Array.from(document.querySelectorAll(".slice-group"));
const studyMap = document.getElementById("studyMap");
const resourceSuggestionForm = document.getElementById("resourceSuggestionForm");
const formStatusMessage = document.getElementById("formStatusMessage");

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotShell = document.getElementById("chatbotShell");
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");

if (slices.length > 0 && nodeLayer && resetMapBtn && hubStage && resourcePanel && resourcePanelShell && panelTitle && panelIntro && detailBackBtn && detailTitle && detailFocus && detailDescription && detailContact && detailWebsiteBtn && mapShell && studyMap && globalThis.gsap) {
    const state = {
        activeCategory: null,
        nodes: [],
        activeResource: null
    };

    function showResourceListPane() {
        resourcePanelShell.classList.remove("showing-detail");
        state.activeResource = null;
    }

    function showResourceDetail(resource) {
        state.activeResource = resource;
        detailTitle.textContent = resource.name;
        detailFocus.textContent = resource.focus || "";
        detailDescription.textContent = resource.description || "";
        detailContact.textContent = resource.contact || "";
        detailWebsiteBtn.href = resource.url || "#";
        resourcePanelShell.classList.add("showing-detail");
    }

    function reorderSliceGroups(activeCategory) {
        const order = ["group-human", "group-edu", "group-arts", "group-rec", "group-health"];
        order.forEach((id) => {
            const group = document.getElementById(id);
            if (group) {
                studyMap.appendChild(group);
            }
        });

        if (!activeCategory) {
            return;
        }

        const activeGroup = sliceGroups.find((group) => group.dataset.category === activeCategory);
        if (activeGroup) {
            studyMap.appendChild(activeGroup);
        }
    }

    function clearNodes() {
        state.nodes.forEach((node) => node.remove());
        state.nodes = [];
    }

    function renderNodes(category) {
        clearNodes();
        const filtered = resources.filter((resource) => resource.category === category);

        if (filtered.length === 0) {
            return;
        }

        const fragment = document.createDocumentFragment();
        filtered.forEach((resource) => {
            const node = document.createElement("button");
            node.className = "resource-node";
            node.type = "button";
            node.setAttribute("aria-label", `${resource.name} node`);
            node.innerHTML = `
                <div class="bullet" aria-hidden="true"></div>
                <div>
                    <div class="name">${resource.name}</div>
                    <div class="meta">${resource.contact}</div>
                </div>
            `;
            node.addEventListener("click", () => showResourceDetail(resource));
            fragment.appendChild(node);
            state.nodes.push(node);
        });

        nodeLayer.appendChild(fragment);
        gsap.fromTo(
            state.nodes,
            { opacity: 0, scale: 0.25, yPercent: 28 },
            { opacity: 1, scale: 1, yPercent: 0, duration: 0.55, stagger: 0.08, ease: "back.out(1.8)" }
        );
    }

    function activateSlice(category) {
        state.activeCategory = category;
        hubStage.classList.add("is-active");
        resourcePanel.setAttribute("aria-hidden", "false");
        panelTitle.textContent = category;
        panelIntro.textContent = "Select a resource to view more details.";
        showResourceListPane();

        slices.forEach((slice) => {
            const isActive = slice.dataset.category === category;
            slice.classList.toggle("is-active", isActive);
            gsap.to(slice, {
                opacity: isActive ? 1 : 0.2,
                scale: isActive ? 1.05 : 1,
                duration: 0.25,
                overwrite: true,
                ease: "power2.out"
            });
        });

        reorderSliceGroups(category);

        sliceGroups.forEach((group) => {
            const isActive = group.dataset.category === category;
            gsap.to(group, {
                y: isActive ? -10 : 0,
                duration: 0.34,
                overwrite: true,
                ease: "power3.out"
            });
        });

        gsap.to(mapShell, {
            xPercent: globalThis.innerWidth > 1024 ? -25 : 0,
            duration: 0.42,
            ease: "power3.out",
            overwrite: true
        });

        gsap.fromTo(
            resourcePanel,
            { autoAlpha: 0, x: 32 },
            { autoAlpha: 1, x: 0, duration: 0.42, ease: "power3.out", overwrite: true }
        );

        renderNodes(category);
    }

    function resetMap() {
        state.activeCategory = null;
        reorderSliceGroups(null);
        hubStage.classList.remove("is-active");
        resourcePanel.setAttribute("aria-hidden", "true");
        panelTitle.textContent = "Choose a map fragment";
        panelIntro.textContent = "";
        showResourceListPane();

        slices.forEach((slice) => {
            slice.classList.remove("is-active");
            gsap.to(slice, {
                opacity: 1,
                scale: 1,
                duration: 0.25,
                overwrite: true,
                ease: "power2.out"
            });
        });

        sliceGroups.forEach((group) => {
            gsap.to(group, {
                y: 0,
                duration: 0.3,
                overwrite: true,
                ease: "power3.out"
            });
        });

        gsap.to(mapShell, {
            xPercent: 0,
            duration: 0.42,
            ease: "power3.out",
            overwrite: true
        });

        gsap.to(resourcePanel, {
            autoAlpha: 0,
            x: 32,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true
        });

        if (state.nodes.length > 0) {
            gsap.to(state.nodes, {
                opacity: 0,
                scale: 0.4,
                duration: 0.2,
                stagger: 0.02,
                onComplete: clearNodes
            });
        }
    }

    function clickHandler(slice) {
        const category = slice.dataset.category;
        if (!category) {
            return;
        }

        if (state.activeCategory === category) {
            resetMap();
            return;
        }

        activateSlice(category);
    }

    slices.forEach((slice) => {
        slice.addEventListener("click", () => clickHandler(slice));

        slice.addEventListener("mouseenter", () => {
            if (state.activeCategory && state.activeCategory !== slice.dataset.category) {
                gsap.to(slice, { opacity: 0.35, scale: 1.02, duration: 0.15, overwrite: true });
            } else {
                gsap.to(slice, { scale: 1.05, duration: 0.15, overwrite: true });
            }
        });

        slice.addEventListener("mouseleave", () => {
            if (state.activeCategory && state.activeCategory !== slice.dataset.category) {
                gsap.to(slice, { opacity: 0.2, scale: 1, duration: 0.15, overwrite: true });
            } else if (state.activeCategory === slice.dataset.category) {
                gsap.to(slice, { scale: 1.05, duration: 0.15, overwrite: true });
            } else {
                gsap.to(slice, { scale: 1, duration: 0.15, overwrite: true });
            }
        });

        slice.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                clickHandler(slice);
            }
        });
    });

    resetMapBtn.addEventListener("click", resetMap);
    detailBackBtn.addEventListener("click", showResourceListPane);

    globalThis.addEventListener("resize", () => {
        if (state.activeCategory) {
            gsap.set(mapShell, { xPercent: globalThis.innerWidth > 1024 ? -25 : 0 });
        }
    });
}

if (resourceSuggestionForm && formStatusMessage) {
    resourceSuggestionForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const endpoint = resourceSuggestionForm.getAttribute("action") || "";
        if (endpoint.includes("REPLACE_WITH_YOUR_ACTION_CODE")) {
            formStatusMessage.textContent = "Replace the Formspree action code first, then submit again.";
            return;
        }

        formStatusMessage.textContent = "Sending...";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                body: new FormData(resourceSuggestionForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            resourceSuggestionForm.reset();
            formStatusMessage.textContent = "Thanks! Your resource suggestion was sent.";
        } catch {
            formStatusMessage.textContent = "Unable to send right now. Please try again in a moment.";
        }
    });
}

if (chatbotToggle && chatbotShell && chatbotMessages && chatbotForm && chatbotInput) {
        function syncChatbotToggleState() {
            const isHidden = chatbotShell.hasAttribute("hidden");
            chatbotToggle.textContent = isHidden ? "Chat" : "Close";
            chatbotToggle.setAttribute("aria-expanded", isHidden ? "false" : "true");
            chatbotToggle.setAttribute("aria-label", isHidden ? "Open community assistant" : "Minimize community assistant");
        }

    const quickFacts = {
        sections: "This page has 3 main areas: the interactive map filter, a spotlight section, and a resource suggestion form.",
        spotlight: "The spotlight highlights Common Heart, Museum of the Waxhaws, and JAARS.",
        navigation: "Use the top nav for Hub, Local Navigator, and References pages."
    };

    function pushMessage(text, sender) {
        const item = document.createElement("div");
        item.className = `chat-msg ${sender}`;
        item.textContent = text;
        chatbotMessages.appendChild(item);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getCategorySummary(category) {
        const picks = resources.filter((resource) => resource.category === category);
        if (picks.length === 0) {
            return "I could not find resources in that category.";
        }

        const names = picks.map((resource) => resource.name).join(", ");
        return `${category} resources on this page: ${names}.`;
    }

    function normalizeText(value) {
        return value
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9]+/g, " ")
            .trim();
    }

    function getResourceSearchTerms(resource) {
        const terms = [resource.name];

        if (resource.name.includes(" - ")) {
            terms.push(resource.name.split(" - ")[0]);
            terms.push(resource.name.split(" - ").slice(1).join(" - "));
        }

        return terms.map(normalizeText);
    }

    function findResourceMatch(input) {
        const normalizedInput = normalizeText(input);
        if (!normalizedInput) {
            return null;
        }

        let bestMatch = null;
        let bestLength = 0;

        resources.forEach((resource) => {
            const terms = getResourceSearchTerms(resource);
            terms.forEach((term) => {
                if (!term || normalizedInput.indexOf(term) === -1) {
                    return;
                }

                if (term.length > bestLength) {
                    bestMatch = resource;
                    bestLength = term.length;
                }
            });
        });

        return bestMatch;
    }

    function getResourceSummary(resource) {
        return `${resource.name} is a ${resource.category.toLowerCase()} resource focused on ${resource.focus}. ${resource.description} Contact: ${resource.contact}. Website: ${resource.url}.`;
    }

    function buildDayPlan(userText) {
        const lower = userText.toLowerCase();
        if (lower.includes("family")) {
            return "Family day plan: Morning at Museum of the Waxhaws, lunch in Waxhaw, afternoon at Cane Creek Park, and evening community theatre if available.";
        }

        if (lower.includes("outdoor") || lower.includes("nature")) {
            return "Outdoor day plan: Start with coffee, head to Cane Creek Park for trails and lake views, then finish with downtown Waxhaw dinner and a walk.";
        }

        return "Sample day out: Morning museum stop, midday volunteer visit at Common Heart, afternoon park time at Cane Creek, and evening arts event with Waxhaw Community Theatre.";
    }

    function botReply(input) {
        const text = input.toLowerCase();
        const resourceMatch = findResourceMatch(input);

        if (resourceMatch) {
            return getResourceSummary(resourceMatch);
        }

        if (text.includes("plan") || text.includes("day") || text.includes("itinerary")) {
            return buildDayPlan(input);
        }

        if (text.includes("human") || text.includes("services")) {
            return getCategorySummary("Human Services");
        }

        if (text.includes("health")) {
            return getCategorySummary("Health");
        }

        if (text.includes("arts") || text.includes("history")) {
            return getCategorySummary("Arts/History");
        }

        if (text.includes("recreation") || text.includes("park")) {
            return getCategorySummary("Recreation");
        }

        if (text.includes("education") || text.includes("school")) {
            return getCategorySummary("Education");
        }

        if (text.includes("spotlight")) {
            return quickFacts.spotlight;
        }

        if (text.includes("page") || text.includes("section") || text.includes("how does this work")) {
            return quickFacts.sections;
        }

        if (text.includes("navigator") || text.includes("references") || text.includes("where")) {
            return quickFacts.navigation;
        }

        return "I can answer questions about individual resources, map categories, spotlight organizations, and day-out plans. Try asking: 'Tell me about Common Heart', 'Describe Union Day School', or 'what health resources are listed?'";
    }

    chatbotToggle.addEventListener("click", () => {
        const isHidden = chatbotShell.hasAttribute("hidden");
        if (isHidden) {
            chatbotShell.removeAttribute("hidden");
            chatbotInput.focus();
        } else {
            chatbotShell.setAttribute("hidden", "hidden");
        }

        syncChatbotToggleState();
    });

    chatbotForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = chatbotInput.value.trim();
        if (!value) {
            return;
        }

        pushMessage(value, "user");
        chatbotInput.value = "";

        const response = botReply(value);
        globalThis.setTimeout(() => {
            pushMessage(response, "bot");
        }, 220);
    });

    pushMessage("Hi, I can answer questions about this page, describe listed resources, and help plan a day out around Weddington and Waxhaw.", "bot");
    syncChatbotToggleState();
}
