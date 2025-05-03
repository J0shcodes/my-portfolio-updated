import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "josh-gray-1": "#a5a5a5",
        "josh-gray-2": "#8491a0",
        "header-color": "#EAEAEA"
      },
      animation: {
        'showup': 'showup 7s forwards',
        'reveal': 'reveal 7s forwards',
        'slidein': 'slidein 7s forwards',
        'scrollRoles': 'scrollRoles 10s linear infinite 4s',
        // 'fadein': "fadein 0.5s ease-in forwards",
      },
      keyframes: {
        showup: {
          '0%': {opacity: '0'},
          '20%': {opacity: '1'},
          '80%': {opacity: '1'},
          '100%': {opacity: '1'},
        },
        slidein: {
          '0%': {marginLeft: '-700px'},
          '20%': {marginLeft: '-800px'},
          '35%': {marginLeft: '0px'},
          '100%': {marginLeft: '0px'},
        },
        reveal: {
          '0%': {opacity: '0', width: '0px'},
          '20%': {opacity: '1', width: '0px'},
          '30%': {width: '600px'},
          '80%': {opacity: '1'},
          '100%': {opacity: '1', width: '600px'},
        },
        scrollRoles: {
          "0%, 20%": { transform: "translateY(0%)" }, // Pause on first text
          "30%, 50%": { transform: "translateY(-100%)" }, // Scroll to second text
          "60%, 80%": { transform: "translateY(-200%)" }, // Pause on second text
          "90%, 100%": { transform: "translateY(-300%)" }, // Scroll back to the first
          // '0%': { 
          //   transform: 'translateY(0)',
          //   opacity: '1'
          // },
          // '40%': {
          //   transform: 'translateY(0)',
          //   opacity: '1'
          // },
          // '45%': {
          //   transform: 'translateY(-100%)',
          //   opacity: '1'
          // },
          // '50%, 90%': {
          //   transform: 'translateY(-100%)',
          //   opacity: '1'
          // },
          // '95%': {
          //   transform: 'translateY(-200%)',
          //   opacity: '1'
          // },
          // '100%': {
          //   transform: 'translateY(-200%)',
          //   opacity: '1'
          // } 
        },
        // fadein: {
        //   "0%": { opacity: "0" },
        //   "100%": { opacity: "1" },
        // },
      }
    },
    fontFamily: {
      spaceMono: ["var(--font-space-mono)", "sans-serif"]
    }
  },
  plugins: [],
};
export default config;
