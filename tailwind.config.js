/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#f0f0f0",
                    dark: "#151528",
                    navbar: {
                        DEFAULT: "#FFFFFF",
                        dark: "#292a4d"
                    }
                },
                searchbar: {
                    DEFAULT: "#f0f0f0",
                    dark: "#454781",
                    icon: {
                        DEFAULT: "#4b4e8d",
                        dark: "#FFFFFF"
                    }
                },
                content: {
                    DEFAULT: "#FFFFFF",
                    dark: "#292a4d"
                },
                button: {
                    DEFAULT: "#454781",
                    dark: "#454781",
                    hover: {
                        DEFAULT: "#454781",
                        dark: "#FFFFFF"
                    },
                    title: {
                        DEFAULT: "#FFFFFF",
                        dark: "#FFFFFF",
                        hover: {
                            DEFAULT: "#FFFFFF",
                            dark: "#151528"
                        }
                    },
                    menu: {
                        DEFAULT: "#f0f0f0",
                        dark: "#454781",
                        hover: {
                            DEFAULT: "#454781",
                            dark: "#FFFFFF"
                        },
                    }
                },
                text: {
                    DEFAULT: "#4b4e8d", //Light 4b4e8d // Dark 454781
                    dark: "#FFFFFF",
                    hover: {
                        DEFAULT: "#FFFFFF",
                        dark: "#151528"
                    }
                },
                contact: {
                    x: {
                        background: {
                            DEFAULT: "#000000",
                            dark: "#FFFFFF",
                            hover: {
                                DEFAULT: "#FFFFFF",
                                dark: "#000000"
                            }
                        },
                        title: {
                            DEFAULT: "#FFFFFF",
                            dark: "#000000",
                            hover: {
                                DEFAULT: "#000000",
                                dark: "#FFFFFF",
                            }
                        },
                    },
                    fb: {
                        background: {
                            DEFAULT: "#479dff", //#2457ff
                            dark: "#FFFFFF",
                            hover: {
                                DEFAULT: "#FFFFFF",
                                dark: "#479dff"
                            }
                        },
                        title: {
                            DEFAULT: "#FFFFFF",
                            dark: "#479dff",
                            hover: {
                                DEFAULT: "#479dff",
                                dark: "#FFFFFF",
                            }
                        },
                    },
                    ig: {
                        background: {
                            DEFAULT: "#ff334b", //##fa0202
                            dark: "#FFFFFF",
                            hover: {
                                DEFAULT: "#FFFFFF",
                                dark: "#ff334b"
                            }
                        },
                        title: {
                            DEFAULT: "#FFFFFF",
                            dark: "#ff334b",
                            hover: {
                                DEFAULT: "#ff334b",
                                dark: "#FFFFFF",
                            }
                        },
                    },
                    yt: {
                        background: {
                            DEFAULT: "#ff2e2e", //##fa0202
                            dark: "#FFFFFF",
                            hover: {
                                DEFAULT: "#FFFFFF",
                                dark: "#ff2e2e"
                            }
                        },
                        title: {
                            DEFAULT: "#FFFFFF",
                            dark: "#ff2e2e",
                            hover: {
                                DEFAULT: "#ff2e2e",
                                dark: "#FFFFFF",
                            }
                        },
                    },
                    tw: {
                        background: {
                            DEFAULT: "#ad4bd1", //##fa0202
                            dark: "#FFFFFF",
                            hover: {
                                DEFAULT: "#FFFFFF",
                                dark: "#ad4bd1"
                            }
                        },
                        title: {
                            DEFAULT: "#FFFFFF",
                            dark: "#ad4bd1",
                            hover: {
                                DEFAULT: "#ad4bd1",
                                dark: "#FFFFFF",
                            }
                        },
                    }
                },
                filter: {
                    background: {
                        DEFAULT: "#FFFFFF",
                        dark: ""
                    }
                }
            },
            fontFamily: {
                "Kanit": ['Kanit', 'sans-serif'],
                "Anuphan": ['Anuphan', 'sans-serif'],
                "IBM": ['IBM Plex Sans Thai', 'sans-serif'],
                "Baijam": ['Bai Jamjuree', 'sans-serif'],
                "Prompt": ['Prompt', 'sans-serif']
            },
            fontSize: {
                'logo': '75px',
                '4xl': '50px',
                '3xl': '40px',
                '2xl': '30px',
                'xl': '28px',
                'lg': '26px',
                'md': '24px',
                'sm': '22px',
                'xs': '20px',
                '2xs': '18px',
                '3xs': '16px',
                '4xs': '14px',
                '5xs': '12px',
                '6xs': '10px',
                '7xs': '8px',
                '8xs': '6px',
                '9xs': '4px',
                '10xs': '2px',
            },
        },
    },
    plugins: [],
}

