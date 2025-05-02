import Head from 'next/head';
import Chatbot from '@/components/Chatbot';

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio with a Chatbot" />
      </Head>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer with experience in Java, Android, and more!</p>
        <Chatbot />
      </div>
    </>
  );
};

export default Home;
