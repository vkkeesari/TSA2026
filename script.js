const resources = [
    { name: "Common Heart", category: "Human Services", contact: "704-218-9060", url: "https://commonheart.org", x: 70, y: 22 },
    { name: "Museum of the Waxhaws", category: "Arts/History", contact: "704-843-1832", url: "https://museumofthewaxhaws.org", x: 49, y: 78 },
    { name: "Waxhaw Community Theatre", category: "Arts/History", contact: "waxhawcommunitytheatre.com", url: "https://waxhawcommunitytheatre.com", x: 34, y: 73 },
    { name: "Heart for Monroe", category: "Human Services", contact: "heartformonroe.com", url: "https://heartformonroe.com", x: 63, y: 30 },
    { name: "Turning Point", category: "Health", contact: "704-283-7233", url: "https://turningpointnc.org", x: 76, y: 50 },
    { name: "HealthQuest", category: "Health", contact: "704-226-2050", url: "https://healthquestuc.org", x: 66, y: 58 },
    { name: "Thrive Counseling", category: "Health", contact: "704-243-2615", url: "https://thrivewellnesstherapy.com", x: 58, y: 52 },
    { name: "Cane Creek Park", category: "Recreation", contact: "704-843-3919", url: "https://unioncountync.gov/canecreek", x: 19, y: 63 },
    { name: "WCWAA", category: "Arts/History", contact: "wcwaa.org", url: "https://wcwaa.org", x: 27, y: 68 },
    { name: "JAARS", category: "Education", contact: "704-843-6000", url: "https://jaars.org", x: 29, y: 31 },
    { name: "SPCC", category: "Education", contact: "704-272-5300", url: "https://spcc.edu", x: 18, y: 44 },
    { name: "Humane Society", category: "Human Services", contact: "704-283-9126", url: "https://hsuc.org", x: 72, y: 34 }
];

const slices = Array.from(document.querySelectorAll(".slice"));
const nodeLayer = document.getElementById("nodeLayer");
const resetMapBtn = document.getElementById("resetMapBtn");
const hubStage = document.getElementById("hubStage");
const resourcePanel = document.getElementById("resourcePanel");
const panelTitle = document.getElementById("panelTitle");
const panelIntro = document.getElementById("panelIntro");
const mapShell = document.querySelector(".map-shell");
const sliceGroups = Array.from(document.querySelectorAll(".slice-group"));
const studyMap = document.getElementById("studyMap");

if (slices.length > 0 && nodeLayer && resetMapBtn && hubStage && resourcePanel && panelTitle && panelIntro && mapShell && studyMap && globalThis.gsap) {
    const state = {
        activeCategory: null,
        nodes: []
    };

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
            const node = document.createElement("article");
            node.className = "resource-node";
            node.setAttribute("aria-label", `${resource.name} node`);

            node.innerHTML = `
                <div class="bullet" aria-hidden="true"></div>
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
                    <div class="name">${resource.name}</div>
                    <div class="meta">${resource.contact}</div>
                </a>
            `;

            fragment.appendChild(node);
            state.nodes.push(node);
        });

        nodeLayer.appendChild(fragment);

        gsap.fromTo(
            state.nodes,
            { opacity: 0, scale: 0.25, yPercent: 28 },
            {
                opacity: 1,
                scale: 1,
                yPercent: 0,
                duration: 0.55,
                stagger: 0.08,
                ease: "back.out(1.8)"
            }
        );
    }

    function activateSlice(category) {
        state.activeCategory = category;
        hubStage.classList.add("is-active");
        resourcePanel.setAttribute("aria-hidden", "false");
        panelTitle.textContent = category;
        panelIntro.textContent = "Linked local nodes appear here, grouped by the selected study area fragment.";

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

        gsap.fromTo(resourcePanel,
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
        panelIntro.textContent = "The resource list will unfold here as a field of linked local nodes.";

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


        globalThis.addEventListener("resize", () => {
            if (state.activeCategory) {
                gsap.set(mapShell, { xPercent: globalThis.innerWidth > 1024 ? -25 : 0 });
            }
        });
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
}
