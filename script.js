const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 130);
});

const menuIcon = document.querySelector("#menu-icon");
const menuList = document.querySelector(".menulist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    menuList.classList.toggle("open");
});

// Close menu when clicking a menu link
document.querySelectorAll(".menulist a").forEach((link) => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        menuList.classList.remove("open");
    });
});

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
        menuIcon.classList.remove("bx-x");
        menuList.classList.remove("open");
    }
});

var typed = new Typed(".input", {
    strings: ["Web Designer.", "Web Developer.", "App Developer"],
    typeSpeed: 140,
    backSpeed: 70,
    loop: true,
});



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImages = document.getElementById("modal-images");
    const modalDescription = document.getElementById("modal-description");
    const modalSkills = document.getElementById("skills-list");
    const modalFigma = document.getElementById("modal-figma");
    const modalWebsite = document.getElementById("modal-website");
    const closeModal = document.querySelector(".close");

    // Ensure modal is hidden on load
    modal.style.display = "none";

    // Project data
    const projects = {
        "aubefriends": {
            title: "AUBeFRIENDS",
            images: ["img/AUBeFriends (2).png"],
            description: "AUBeFRIENDS is a mobile application aimed at connecting students within AUB.",
            skills: ["Flutter", "Frontend Development", "Team Leadership"],
            figma: "https://www.figma.com/your-figma-link",
            website: ""
        },
        "bunbar": {
            title: "Bun Bar Website",
            images: ["img/logo.jpg"],
            description: "Designed a visually striking and modern UI for Bun Bar, focusing on bold aesthetics, clean layouts, and engaging visuals to enhance the brand’s digital presence.",
            skills: ["UI/UX Design", "Web Design", "Figma"],
            figma: "https://www.figma.com/design/Bl3cY8laO1Z7VmS0fXlxNt/Bunbar?node-id=0-1&t=Hjlg2aeBbQbpfSYm-1",
            website: ""
        },
        // "douyoufi": {
        //     title: "Douyoufi Guesthouse",
        //     images: ["img/WhatsApp Image 2024-07-25 at 11.30.49 AM.jpeg"],
        //     description: "A cozy guesthouse retreat with a modern experience.",
        //     skills: ["UI/UX Design", "Frontend Development", "WordPress"],
        //     figma: "https://www.figma.com/your-figma-link",
        //     website: "https://douyoufi.com"
        // },
        "whereto": {
            title: "WhereTo",
            images: ["img/personal.png"],
            description: "Developed an Android app to discover places based on preferences.",
            skills: ["Kotlin", "Java", "Figma", "Android Development", "Custom API"],
            figma: "https://www.figma.com/design/lyYX8ouzyn668dyvrpuQwZ/Tourism?node-id=0-1&t=RaG8Mf6z6Ty6sgsj-1",
            website: ""
        },
        "byblos": {
            title: "Digitalization of Byblos Citadel",
            images: ["img/byblos-citadel.jpg"],
            description: "Digitalized the Byblos Citadel, a UNESCO heritage site through 3d models and virtual tours. Intergate it into a responsive, interactive website for my final year project.",
            skills: ["3D Modeling", "Virtual Reality", "Web Development", "Web Design", "Figma", "Photogrammetry"],
            figma: "https://www.figma.com/design/TwGVDaYujGDuHkCyVb7HyW/fyp?node-id=0-1&t=RaG8Mf6z6Ty6sgsj-1",
            website: "https://leachadraoui.github.io/fyp/"
        },
         "alwadi": {
            title: "Al Wadi",
            images: ["img/AlWadi.jpg"],
            description: "During my internship at Born Interactive, I developed the frontend of Al Wadi's, transforming Figma designs into a responsive and interactive user interface using clean and efficient code.",
            skills: ["Frontend Development", "HTML5", "CSS3", "jQuery"],
            figma: "https://www.figma.com/design/Bl3cY8laO1Z7VmS0fXlxNt/Bunbar?node-id=0-1&t=Hjlg2aeBbQbpfSYm-1",
            website: ""
        },
         "anita": {
            title: "Anita Papa's Website",
            images: ["img/books.png"],
            description: "During my internship at Born Interactive, I developed the frontend of Anita's website, transforming Figma designs into a responsive and interactive user interface using clean and efficient code.",
            skills: ["HTML", "CSS", "JavaScript"],
            figma: "https://www.figma.com/design/Bl3cY8laO1Z7VmS0fXlxNt/Bunbar?node-id=0-1&t=Hjlg2aeBbQbpfSYm-1",
            website: ""
        },
         "smush": {
            title: "Smush Burger",
            images: ["img/logo-smush.jpg"],
            description: "Designed a visually striking and modern UI, in addition to building the website.",
            skills: ["Web Design", "Figma", "HTML", "CSS"],
            figma: "https://www.figma.com/design/Sgy8vpnhWy2hndlmp9gHYn/Smush-Burger?node-id=1-3&t=ufieUEMIhX2VAtfo-1",
            website: "https://leachadraoui.github.io/Smush-Burger/"
        },
    };

    // Add event listeners to open modal
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const projectKey = this.getAttribute("data-project");
            const project = projects[projectKey];

            // Update modal content
            modalTitle.innerText = project.title;
            modalImages.innerHTML = project.images.map(img => `<img src="${img}" alt="${project.title}">`).join("");
            modalDescription.innerText = project.description;

            // Update skills
            modalSkills.innerHTML = project.skills.map(skill => `<li>${skill}</li>`).join("");

            // Update links
            modalFigma.href = project.figma;
            modalWebsite.href = project.website;

            // Show modal
            modal.style.display = "flex";
        });
    });

    // Close modal on clicking close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});




