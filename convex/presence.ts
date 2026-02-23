import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const setOnline = mutation({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      online: true,
    });
  },
});

export const setOffline = mutation({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      online: false,
      lastSeen: Date.now(),
    });
  },
});