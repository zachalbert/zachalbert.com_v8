import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import ThemeToggle from "../components/theme-toggle";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>
          <ThemeToggle />
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
