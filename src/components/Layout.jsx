import "../styles/base.css";
import "../styles/typography.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2026 Yuki</p>
      </footer>
    </div>
  );
}
