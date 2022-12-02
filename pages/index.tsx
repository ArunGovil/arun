import Head from "next/head";
import { Hero } from "../components";
import AppLayout from "../layouts";

export default function App() {
  return (
    <div>
      <Head>
        <title>Arun Govil</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <AppLayout showSearch={false}>
          <Hero />
        </AppLayout>
      </main>
    </div>
  );
}
