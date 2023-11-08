export const projectsList = {
    portfolio: {
        id: 1,
        title: "Portfolio 2023",
        cover: "/projects/cover-2.png",
        category: "Web Development",
        description: "Personal web site",
        techStack: "React/Next.js, Framer Motion",
        path:"/projects/portfolio",
        website: "https://ilyatitovich.vercel.app",
        screenShots: [],
    },

    chrispratt: {
        id: 2,
        title: "Chris Pratt",
        cover: "/projects/cover-1.png",
        category: "Web Development",
        description: "Web site for photographer",
        techStack: "React/Next.js, GSAP",
        path:"/projects/chrispratt",
        website: "https://chrispratt.vercel.app",
        screenShots: [],
    },

};

projectsList.portfolio.nextProject = projectsList.chrispratt;
projectsList.chrispratt.nextProject = projectsList.portfolio;