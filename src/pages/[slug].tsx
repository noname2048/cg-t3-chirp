import { type NextPage } from "next";
import Head from "next/head";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <main className="flex  h-screen justify-center">
        <div>Profile View</div>
      </main>
    </>
  );
};

export default ProfilePage;
