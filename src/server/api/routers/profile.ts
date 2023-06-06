import type { User } from "@clerk/nextjs/dist/api";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { filterUserForClient } from "~/server/helpers/filterUserForClient";

export const profileRouter = createTRPCRouter({
  getUserByAuthorId: publicProcedure
    .input(z.object({ authorId: z.string() }))
    .query(async ({ input }) => {
      const user = await clerkClient.users.getUser(input.authorId);
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User not found",
        });
      }

      return {
        id: user.id,
        username:
          user.username ||
          user.externalAccounts.find(
            (account) => account.provider === "oauth_github"
          )?.username ||
          "(User name not found)",
        profileImageUrl: user.profileImageUrl,
      };
    }),

  getUserByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const users = await clerkClient.users.getUserList({
        limit: 110,
      });

      const user = users.find((user) =>
        user.externalAccounts.find(
          (account) =>
            account.username === input.username &&
            account.provider === "oauth_github"
        )
      );

      if (!user) {
        const user = users.find((user) =>
          user.externalAccounts.find(
            (account) => account.username === input.username
          )
        );
        if (!user) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "User not found",
          });
        }
        return filterUserForClient(user);
      }

      return filterUserForClient(user);
    }),
});
