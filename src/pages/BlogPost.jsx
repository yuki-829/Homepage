import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <Layout>
      <section>
        <h1>Blog Post: {id}</h1>
        <p>準備中です。</p>
      </section>
    </Layout>
  );
}