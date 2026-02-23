import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrGetConversation = mutation({
  args: {
    user1: v.id("users"),
    user2: v.id("users"),
  },
  handler: async (ctx, args) => {
    const conversations = await ctx.db
      .query("conversations")
      .collect();

    const existing = conversations.find(
      (c) =>
        !c.isGroup &&
        c.members.includes(args.user1) &&
        c.members.includes(args.user2)
    );

    if (existing) return existing._id;

    return await ctx.db.insert("conversations", {
      members: [args.user1, args.user2],
      isGroup: false,
    });
  },
});