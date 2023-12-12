/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 8s ease infinite",
                scroll: "down 7s ease infinite",
                // "rotate-1": "rotate 3s ease",
            },

            keyframes: {
                down: {
                    "0%": { opacity: 0, transform: "translateY(0)" },
                    "20%": { opacity: 1, transform: "translateY(30%)" },
                    "60%": { opacity: 1, transform: "translateY(30%)" },
                    "100%": { opacity: 0, transform: "translateY(300%)" },
                },
            },
            // keyframes: {
            //     rotate: {
            //         "100%": { transform: "rotate(25deg)" },
            //     },
            // },
        },
    },
    plugins: [],
}
