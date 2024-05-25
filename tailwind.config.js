/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                modal: "#000000a9",
            },
            width: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                192: "48rem",
                208: "52rem",
                224: "56rem",
                240: "60rem",
            },
            height: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                192: "48rem",
                208: "52rem",
                224: "56rem",
                240: "60rem",
            },
        },
    },
    plugins: [],
};
