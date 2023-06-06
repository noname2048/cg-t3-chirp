import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { PageLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";
import { PostView } from "~/components/postview";

dayjs.extend(relativeTime);

const ProfileFeed = (props: { userId: string }) => {
  const { data, isLoading } = api.posts.getPostsByUserId.useQuery({
    userId: props.userId,
  });
  if (isLoading) return <LoadingPage />;
  if (!data || data.length === 0) return <div> User has not posted</div>;
  return (
    <div className="flex flex-col">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

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
      <PageLayout>
        <div className="relative h-36 bg-slate-600">
          <Image
            src={data.profileImageUrl}
            alt={`${data.username}'s profile image`}
            width={128}
            height={128}
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-2 border-black"
          />
        </div>
        <div className="h-[64px]"></div>
        <div className="p-4 text-2xl font-bold">{`@${data.username}`}</div>
        <div className="w-full border-b border-slate-400" />
        <ProfileFeed userId={authorId} />
      </PageLayout>
    </>
  );
};

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
