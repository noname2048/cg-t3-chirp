import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div
      key={post.id}
      className="flex items-center gap-3 border-b border-slate-400 p-8"
    >
      <Image
        src={author.profilePicture}
        alt="Profile Image"
        className="flex flex-col rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="test-slate-400 flex gap-1 font-bold">
          <Link href={`/@${post.authorId}`}>
            <span>{`@${author.username} `}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span className="font-thin">{` · ${dayjs(
              post.createdAt
            ).fromNow()}`}</span>
          </Link>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};
