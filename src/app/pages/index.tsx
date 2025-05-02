import Head from 'next/head';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio with a Chatbot" />
      </Head>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <Chatbot />
      </div>
    </>
  );
};

export default Home;
