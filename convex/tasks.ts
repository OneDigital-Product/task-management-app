import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("tasks")
      .withIndex("by_created_at")
      .order("desc")
      .collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    priority: v.union(v.literal("high"), v.literal("medium"), v.literal("low")),
  },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("tasks", {
      title: args.title,
      status: "pending",
      priority: args.priority,
      createdAt: Date.now(),
    });
    return taskId;
  },
});

export const toggleStatus = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, args) => {
    const task = await ctx.db.get(args.id);
    if (!task) {
      throw new Error("Task not found");
    }
    
    const newStatus = task.status === "pending" ? "completed" : "pending";
    await ctx.db.patch(args.id, { status: newStatus });
    return newStatus;
  },
});

export const remove = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const removeCompleted = mutation({
  args: {},
  handler: async (ctx) => {
    const completedTasks = await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("status"), "completed"))
      .collect();
    
    for (const task of completedTasks) {
      await ctx.db.delete(task._id);
    }
    
    return completedTasks.length;
  },
});