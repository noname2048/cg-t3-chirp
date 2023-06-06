import { GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage<{ authorId: string }> = ({ authorId }) => {
  const { data, isLoading } = api.profile.getUserByAuthorId.useQuery({
    authorId,
  });
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>404(User Not Found)</div>;
  if (!data.username) return <div>No Github Account Found</div>;

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <main className="flex h-screen flex-col items-center justify-start text-white">
        <div>{data.username}</div>
        <div>
          <Image
            src={data.profileImageUrl}
            alt="profile image"
            width={56}
            height={56}
          />
        </div>
      </main>
    </>
  );
};

import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "~/server/api/root";
import superjson from "superjson";
import { prisma } from "~/server/db";

const generateSSGHelper = () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug;

  if (typeof slug !== "string") throw new Error("no slug");

  const authorId = slug.replace("@", "");

  await ssg.profile.getUserByAuthorId.prefetch({ authorId });

  return { props: { trpcState: ssg.dehydrate(), authorId } };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default ProfilePage;
