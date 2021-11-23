import TestUI from 'modules/test-ui';
import type { NextPage } from 'next';
import Head from 'next/head';

const TestUiPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>TestUi Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>TestUi Page</h1>
        <TestUI />
      </main>
    </>
  );
};

export default TestUiPage;