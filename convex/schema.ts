import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    title: v.string(),
    status: v.union(v.literal("pending"), v.literal("completed")),
    priority: v.union(v.literal("high"), v.literal("medium"), v.literal("low")),
    createdAt: v.number(),
  }).index("by_created_at", ["createdAt"]),
});