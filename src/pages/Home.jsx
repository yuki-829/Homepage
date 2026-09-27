import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section>
        <h1>Yuki</h1>
        <p>
          Technical college student in Maizuru, learning backend development with Go,
          exploring React, and experimenting with electronics and device physics.
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
          <a href="/blog">Read the blog →</a>
        </p>
      </section>
    </Layout>
  );
}
