const projects = {
    "portfolio": {
        id: 1,
        title: "Portfolio",
        cover: "/projects/portfolio/cover.webp",
        category: "web dev",
        description:
            "The primary goal of this project was to create a digital portfolio that serves as a repository for information about my skills, showcasing a diverse array of projects,  and offering essential contact information.",
        techStack: "React/Next.js, Sass, Framer Motion, Lenis",
        desktopImages: [
            "/projects/portfolio/sreenshots/01-home-light.webp",
            "/projects/portfolio/sreenshots/02-home-dark.webp",
            "/projects/portfolio/sreenshots/03-about-light.webp",
            "/projects/portfolio/sreenshots/04-about-dark.webp",
            "/projects/portfolio/sreenshots/05-menu-light.webp",
            "/projects/portfolio/sreenshots/06-menu-dark.webp",
            "/projects/portfolio/sreenshots/07-contact-light.webp",
            "/projects/portfolio/sreenshots/08-contact-dark.webp",
            "/projects/portfolio/sreenshots/09-mobile-light.webp",
        ],
        nextProject: {path: "spaced-repetition", category: "pwa dev"}
    },
    "spaced-repetition": {
        id: 2,
        title: "Spaced Repetition",
        cover: "/projects/spaced_repetition/cover.webp",
        category: "pwa dev",
        description: "This is a mobile web application for memorizing information using the Spaced Repetition technique. PWA technology is used, which allows you to install the application on a device (mobile phone) and use it offline.",
        techStack: "React.js, Sass, Vite, PWA",
        website: "https://spaced-rep-app-beta.vercel.app",
        desktopImages: [
            "/projects/spaced_repetition/desktop_tablet_imgs/desktop-tablet--frame-1.webp",
            "/projects/spaced_repetition/desktop_tablet_imgs/desktop-tablet--frame-2.webp",
            "/projects/spaced_repetition/desktop_tablet_imgs/desktop-tablet--frame-3.webp",
        ],
        nextProject: {path: "chris-pratt", category: "web dev"}
    },
    "chris-pratt": {
        id: 3,
        title: "Chris Pratt",
        cover: "/projects/chrispratt/chrispratt-cover.webp",
        category: "web dev",
        description: "Website of a professional photographer, dedicated to showcasing a portfolio of exemplary work, providing information about the photographer, and facilitating seamless contact. Our focus on design extends to meticulous attention given to animation and microinteractions, enhancing the overall user experience.",
        techStack: "React/Next.js, GSAP, Swiper, Lenis",
        website: "https://chrispratt.vercel.app",
        desktopImages: [
            "/projects/chrispratt/screenshots/01-cp-home.webp",
            "/projects/chrispratt/screenshots/02-cp-about.webp",
            "/projects/chrispratt/screenshots/03-cp-menu.webp",
            "/projects/chrispratt/screenshots/04-cp-gallery.webp",
            "/projects/chrispratt/screenshots/05-cp-contact.webp",
            "/projects/chrispratt/screenshots/06-cp-footer.webp",
            "/projects/chrispratt/screenshots/07-cp-mobile.webp",
        ],
        nextProject: {path:"portfolio", category: "web dev"}
    },
};

export function getProjects() {
    return Object.values(projects);
}

export function getProject(project) {
    return projects[project];
}

export function getProjectsPaths() {
    return Object.keys(projects).map((project) => {
        return {
            params: {
                id: project,
            },
        };
    });
}
