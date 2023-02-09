import Head from "next/head";
import { Container } from "../styles/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snippetbase</title>
        <meta
          name="description"
          content="Code snippets for developers and designers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main>Snippetbase</main>
      </Container>
     
    </>
  );
}
