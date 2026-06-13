import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const tailwindConfig = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#f7f9fb",
        "on-surface": "#191c1e",
        "outline": "#76777d",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#c6c6cd",
        "on-tertiary-fixed": "#271900",
        "inverse-on-surface": "#eff1f3",
        "on-secondary": "#ffffff",
        "on-primary-container": "#7c839b",
        "surface-container": "#eceef0",
        "surface-container-low": "#f2f4f6",
        "inverse-surface": "#2d3133",
        "on-surface-variant": "#45464d",
        "on-secondary-fixed": "#002113",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#fabc45",
        "on-tertiary": "#ffffff",
        "surface": "#f7f9fb",
        "surface-container-high": "#e6e8ea",
        "on-primary-fixed-variant": "#3f465c",
        "primary-fixed-dim": "#bec6e0",
        "on-primary-fixed": "#131b2e",
        "surface-bright": "#f7f9fb",
        "secondary": "#006c49",
        "on-tertiary-container": "#ad7b00",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#005236",
        "surface-dim": "#d8dadc",
        "surface-variant": "#e0e3e5",
        "surface-tint": "#565e74",
        "on-error-container": "#93000a",
        "secondary-container": "#6cf8bb",
        "primary-fixed": "#dae2fd",
        "tertiary-fixed": "#ffdea9",
        "tertiary": "#000000",
        "surface-container-highest": "#e0e3e5",
        "on-error": "#ffffff",
        "tertiary-container": "#271900",
        "on-secondary-container": "#00714d",
        "on-background": "#191c1e",
        "primary-container": "#131b2e",
        "inverse-primary": "#bec6e0",
        "secondary-fixed-dim": "#4edea3",
        "secondary-fixed": "#6ffbbe",
        "error": "#ba1a1a",
        "on-tertiary-fixed-variant": "#5f4100",
        "primary": "#000000"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "container-max": "1200px",
        unit: "8px",
        "margin-mobile": "20px",
        "margin-desktop": "64px"
      },
      fontFamily: {
        "body-lg": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-xl-mobile": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "headline-xl": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-xl-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.25", letterSpacing: "0", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "1.25", fontWeight: "700" }]
      }
    }
  }
}
`;

export const metadata: Metadata = {
  title: {
    default: "Valuintcorp",
    template: "%s | Valuintcorp",
  },
  description:
    "Valuintcorp membantu UMKM mengelola akuntansi, pajak, payroll, dan operasional keuangan dengan lebih rapi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        {children}
        <Script id="tailwind-config" strategy="beforeInteractive">
          {tailwindConfig}
        </Script>
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
