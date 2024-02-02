// menu animation
export const menuItemAnimation = {
    show: (i) => ({
        y: 0,
        transition: {
            delay: i * 0.1 + 0.5,
            duration: 0.5,
        },
    }),

    hide: (i) => ({
        y: -100,
        transition: {
            delay: i * 0.1,
            duration: 0.3,
        },
    }),
};

// pages animation
export const fullPage = {
    in: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            ease: "easeOut",
        },
    },

    out: {
        opacity: 0,
        y: -100,
        transition: {
            ease: "easeOut",
        },
    },
};


// pages items animation
export const pageItem = {
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05 + 0.5,
            duration: 0.5,
            ease: "easeOut",
        },
    }),

    hide: (i) => ({
        opacity: 0,
        y: -100,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

