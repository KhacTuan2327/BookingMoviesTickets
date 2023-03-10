module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black_900_7f: "#0000007f",
        bluegray_50: "#eef0f3",
        red_601: "#ee2e24",
        red_600: "#ec1e2b",
        black_900_3f: "#0000003f",
        gray_300_99: "#e2e5eb99",
        teal_300: "#5db0bd",
        black_900_82: "#00000082",
        deep_purple_A200: "#7b61ff",
        black_900_4c: "#0000004c",
        gray_600: "#7b7b7b",
        gray_601: "#7a7a7a",
        gray_400: "#c4c4c4",
        gray_401: "#c2bcbc",
        lime_700: "#c6943f",
        gray_800: "#424040",
        gray_801: "#4b4242",
        gray_200: "#ebebeb",
        gray_201: "#eaeaea",
        orange_200: "#f2c46f",
        bluegray_801: "#212e5c",
        white_A700_21: "#ffffff21",
        indigo_400: "#587acd",
        bluegray_800: "#333c58",
        bluegray_600: "#5a637a",
        black_900_99: "#00000099",
        bluegray_100_00: "#d9d9d900",
        bluegray_200: "#bdc5d4",
        white_A700: "#ffffff",
        indigo_800: "#383681",
        indigo_401: "#577acc",
        indigo_402: "#4970c8",
        deep_orange_50: "#f2e8e8",
        red_300: "#ff6b6b",
        gray_700_4c: "#7362624c",
        amber_A400: "#ffbe00",
        white_A700_75: "#ffffff75",
        light_green_500: "#8cbe56",
        black_900: "#000000",
        light_green_501: "#97c356",
        yellow_900: "#f26f21",
        gray_501: "#929292",
        gray_700: "#686868",
        gray_502: "#a29999",
        lime_400: "#d8dd51",
        lime_401: "#d7de52",
        gray_900_05: "#1e1e1e05",
        gray_500: "#a69f9f",
        gray_901: "#141414",
        bluegray_900_ab: "#333333ab",
        gray_902: "#242424",
        gray_506: "#a0a0a0",
        gray_701: "#736262",
        gray_503: "#a7a7a7",
        gray_900: "#222222",
        blue_600: "#118eea",
        gray_504: "#999292",
        bluegray_100: "#cccccc",
        gray_900_7c: "#1513177c",
        gray_101: "#f5f5f5",
        gray_300: "#dadee7",
        gray_102: "#f2f2f2",
        gray_100: "#f3f3f3",
        bluegray_900: "#333333",
        indigo_300: "#5a90c5",
        lime_400_a8: "#d7de52a8",
        bluegray_700: "#414a62",
        bluegray_500: "#6d7391",
        bluegray_301: "#8f98aa",
        bluegray_300: "#9ca7be",
        indigo_900: "#000e62",
        indigo_901: "#272663",
        bluegray_903: "#2c2b2b",
        bluegray_902: "#34293c",
        bluegray_901: "#1a2c50",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#97c356,#d7de52)",
        gradient1: "linear-gradient(180deg ,#8cbe56,#d8dd51)",
        gradient2: "linear-gradient(180deg ,#97c356,#d7de52a8)",
        gradient3: "linear-gradient(90deg ,#f2c46f,#c6943f)",
        gradient4: "linear-gradient(180deg ,#97c356,#97c356,#d7de52)",
        gradient5: "linear-gradient(204deg ,#587acd,#5a90c5)",
        gradient6: "linear-gradient(189deg ,#5db0bd,#577acc)",
        gradient7: "linear-gradient(188deg ,#ffffff21,#d9d9d900,#4970c8)",
        gradient8: "linear-gradient(225deg ,#000000,#34293c)",
      },
      fontFamily: { roboto: "Roboto", poppins: "Poppins", lato: "Lato" },
      boxShadow: {
        bs1: "0px 1px  4px 0px #0000003f",
        bs3: "0px 1px  6px 0px #0000004c",
        bs2: "0px 4px  4px 0px #0000003f",
        bs: "0px 13.2px  55px 0px #00000082",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
