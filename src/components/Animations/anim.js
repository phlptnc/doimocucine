export const fadeUp = {
    initial: { opacity: 0, y: "50px" },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15 },
    }),
}

export const textFadeUp = {
    initial: { opacity: 0, y: "50px" },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1 },
    },
}

export const titleAnimation = {
    initial: {
        opacity: 0,
        filter: "blur(5px)",
    },
    animate: (i) => ({
        opacity: 1,
        filter: "blur(0)",
        transition: { duration: 3, delay: i * 0.05 },
    }),
}
