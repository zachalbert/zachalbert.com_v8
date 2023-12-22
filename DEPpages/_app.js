import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
