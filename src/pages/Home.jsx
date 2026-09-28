import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <section>
        <h1>Yuki</h1>
        <p>
          Technical college student in Maizuru,major is electrical and information engineering.
          learning backend development with Go,
          exploring React, and experimenting with electronics.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Go + Gin + GORM ToDo App</li>
          <li>English Diary App (in progress)</li>
          <li>Minimal Personal Homepage with React</li>
        </ul>
      </section>

      <section>
        <h2>Blog</h2>
        <p>
          I write about Go, React, electronics, and learning notes.
          <Link to="/blog">Read the blog →</Link>
        </p>
      </section>
    </Layout>
  );
}
