import { Layout } from "@components/Layout";
import { Main } from "@components/Main";
import { Features } from "@components/Features";
import { Testimonials } from "@components/Testimonials";
export default function Home() {
  return (
    <Layout>
      <Main />
      <Features />
      <Testimonials />
    </Layout>
  );
}
