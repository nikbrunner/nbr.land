import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "300px",
                md: "400px",
                lg: "500px",
                xl: "600px",
                "2xl": "700px"
            }
        },
        extend: {
            colors: {
                // TODO: Think of better name
                huez: {
                    50: "oklch(90% 0.01 var(--hue))",
                    100: "oklch(85% 0.025 var(--hue))",
                    200: "oklch(80% 0.035 var(--hue))",
                    300: "oklch(70% 0.05 var(--hue))",
                    400: "oklch(60% 0.1 var(--hue))",
                    500: "oklch(50% 0.25 var(--hue))",
                    600: "oklch(40% 0.25 var(--hue))",
                    700: "oklch(35% 0.20 var(--hue))",
                    800: "oklch(33% 0.1 var(--hue))",
                    900: "oklch(27% 0.05 var(--hue))",
                    950: "oklch(15% 0.025 var(--hue))"
                }
            }
        }
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                body: {
                    backgroundColor: theme("colors.huez.50"),
                    color: theme("colors.huez.900")
                },
                h2: {
                    fontSize: theme("fontSize.3xl")
                },
                section: {
                    marginBottom: theme("margin.8")
                },
                a: {
                    color: theme("colors.huez.900"),
                    fontWeight: theme("fontWeight.medium"),
                    textDecoration: "underline",
                    textDecorationColor: theme("colors.huez.500"),
                    textDecorationThickness: "0.1em"
                }
            });
        })
    ]
} satisfies Config;
