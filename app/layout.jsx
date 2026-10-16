import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.metaDescription,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Runs before first paint so the saved theme applies without a flash.
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light') document.documentElement.classList.remove('dark');
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
