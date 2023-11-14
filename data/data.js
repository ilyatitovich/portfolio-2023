export const projectsList = {
    portfolio: {
        id: 1,
        title: "Portfolio 2023",
        cover: "/projects/portfolio/portfolio-cover.webp",
        category: "Web Development",
        description:
            "The primary goal of this project was to create a digital portfolio that serves as a repository for information about my skills, showcasing a diverse array of projects,  and offering essential contact information.",
        techStack: "React/Next.js, Framer Motion, Lenis",
        path: "/projects/portfolio",
        website: "https://ilyatitovich.vercel.app",
        screenShots: [
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
    },

    chrispratt: {
        id: 2,
        title: "Chris Pratt",
        cover: "/projects/chrispratt/chrispratt-cover.webp",
        category: "Web Development",
        description: "Website of a professional photographer, dedicated to showcasing a portfolio of exemplary work, providing information about the photographer, and facilitating seamless contact. Our focus on design extends to meticulous attention given to animation and microinteractions, enhancing the overall user experience.",
        techStack: "React/Next.js, GSAP, Swiper, Lenis",
        path: "/projects/chrispratt",
        website: "https://chrispratt.vercel.app",
        screenShots: [
            "/projects/chrispratt/screenshots/01-cp-home.webp",
            "/projects/chrispratt/screenshots/02-cp-about.webp",
            "/projects/chrispratt/screenshots/03-cp-menu.webp",
            "/projects/chrispratt/screenshots/04-cp-gallery.webp",
            "/projects/chrispratt/screenshots/05-cp-contact.webp",
            "/projects/chrispratt/screenshots/06-cp-footer.webp",
            "/projects/chrispratt/screenshots/07-cp-mobile.webp",
        ],
    },
};

projectsList.portfolio.nextProject = projectsList.chrispratt;
projectsList.chrispratt.nextProject = projectsList.portfolio;
